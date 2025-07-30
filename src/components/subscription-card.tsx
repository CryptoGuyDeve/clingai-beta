import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, Crown, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface SubscriptionData {
  subscribed: boolean;
  subscription_tier?: string;
  subscription_end?: string;
}

export function SubscriptionCard() {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    subscribed: false
  });
  const [credits, setCredits] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const { user, session } = useAuth();

  useEffect(() => {
    if (user) {
      checkSubscription();
      fetchCredits();
    }
  }, [user]);

  const checkSubscription = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      if (error) {
        console.error('Error checking subscription:', error);
        return;
      }

      setSubscriptionData(data);
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  const fetchCredits = async () => {
    try {
      const { data, error } = await supabase
        .from('credits')
        .select('credits')
        .eq('user_id', user?.id)
        .single();

      if (error) {
        console.error('Error fetching credits:', error);
        return;
      }

      setCredits(data?.credits || 0);
    } catch (error) {
      console.error('Error fetching credits:', error);
    }
  };

  const handleSubscribe = async () => {
    if (!session) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        toast.error(error.message || "Failed to create checkout session");
        return;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast.error("Failed to create checkout session");
    } finally {
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    if (!session) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        toast.error(error.message || "Failed to access customer portal");
        return;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error accessing customer portal:', error);
      toast.error("Failed to access customer portal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-primary" />
          Subscription Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coins className="h-4 w-4 text-primary" />
            <span className="font-medium">{credits} Credits</span>
          </div>
          {subscriptionData.subscribed && (
            <Badge variant="secondary">
              {subscriptionData.subscription_tier || "Premium"}
            </Badge>
          )}
        </div>

        {subscriptionData.subscribed ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              You have an active subscription with unlimited credits!
            </p>
            {subscriptionData.subscription_end && (
              <p className="text-xs text-muted-foreground">
                Renews on {new Date(subscriptionData.subscription_end).toLocaleDateString()}
              </p>
            )}
            <Button 
              onClick={handleManageSubscription}
              disabled={loading}
              variant="outline"
              className="w-full"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
              Manage Subscription
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Free trial: {credits} credits remaining (10 credits per generation)
            </p>
            <Button 
              onClick={handleSubscribe}
              disabled={loading}
              className="w-full"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
              Upgrade to Premium - $5.00/month
            </Button>
            <p className="text-xs text-muted-foreground">
              Get 200 credits monthly with premium subscription
            </p>
          </div>
        )}

        <Button 
          onClick={() => {
            checkSubscription();
            fetchCredits();
          }}
          variant="ghost"
          size="sm"
          className="w-full"
        >
          Refresh Status
        </Button>
      </CardContent>
    </Card>
  );
}