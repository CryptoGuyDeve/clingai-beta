-- Update the initialize_user_credits function to give 20 credits instead of 50
CREATE OR REPLACE FUNCTION public.initialize_user_credits()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.credits (user_id, credits)
  VALUES (NEW.id, 20);
  RETURN NEW;
END;
$function$;

-- Update the default value for credits column to 20
ALTER TABLE public.credits ALTER COLUMN credits SET DEFAULT 20;