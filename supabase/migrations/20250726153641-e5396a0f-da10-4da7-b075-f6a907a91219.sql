-- Fix the handle_new_user function to handle duplicate usernames gracefully
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path TO 'public'
AS $function$
DECLARE
  base_username text;
  unique_username text;
  username_counter integer := 0;
BEGIN
  -- Get the base username from metadata, fallback to email prefix if not provided
  base_username := COALESCE(
    NEW.raw_user_meta_data ->> 'username',
    split_part(NEW.email, '@', 1)
  );
  
  -- If base_username is empty or null, use email prefix
  IF base_username IS NULL OR base_username = '' THEN
    base_username := split_part(NEW.email, '@', 1);
  END IF;
  
  -- Start with the base username
  unique_username := base_username;
  
  -- Keep trying until we find a unique username
  WHILE EXISTS (SELECT 1 FROM public.profiles WHERE username = unique_username) LOOP
    username_counter := username_counter + 1;
    unique_username := base_username || username_counter::text;
    
    -- Safety check to prevent infinite loop
    IF username_counter > 1000 THEN
      unique_username := base_username || '_' || NEW.id::text;
      EXIT;
    END IF;
  END LOOP;
  
  -- Insert the profile with the unique username
  INSERT INTO public.profiles (user_id, username, display_name)
  VALUES (
    NEW.id,
    unique_username,
    COALESCE(NEW.raw_user_meta_data ->> 'display_name', unique_username)
  );
  
  RETURN NEW;
EXCEPTION
  WHEN unique_violation THEN
    -- If we still get a unique violation, use the user ID as suffix
    INSERT INTO public.profiles (user_id, username, display_name)
    VALUES (
      NEW.id,
      base_username || '_' || NEW.id::text,
      COALESCE(NEW.raw_user_meta_data ->> 'display_name', base_username || '_' || NEW.id::text)
    );
    RETURN NEW;
  WHEN OTHERS THEN
    -- Log error and re-raise
    RAISE LOG 'Error in handle_new_user: %', SQLERRM;
    RAISE;
END;
$function$;