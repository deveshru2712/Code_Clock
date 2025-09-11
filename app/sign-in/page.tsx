"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react";
import { signIn, useSession } from "@/lib/auth/auth-client";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import Loader from "@/components/Loader";

export default function SignUpPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const { data: session, isPending } = useSession();

  // Show loader while session is being fetched
  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center bg-red-400">
        <Loader />
      </div>
    );
  }

  // Redirect if user is already authenticated
  if (session?.user) {
    router.push("/profile");
    return null;
  }

  const handleSignUp = async () => {
    try {
      await signIn.social({
        provider: "github",
        callbackURL: "/",
        newUserCallbackURL: "/profile",
      });
    } catch {
      toast.error("Sign in failed. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm shadow-lg bg-transparent backdrop-blur-sm border border-border/50">
        <CardHeader className="text-center">
          <CardTitle>Welcome</CardTitle>
          <CardDescription className="text-slate-950 dark:text-slate-200">
            Continue with your GitHub account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground text-center">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            className="w-full gap-2 hover:shadow-sm transition-shadow cursor-pointer"
            onClick={handleSignUp}
          >
            <Github />
            Continue with GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
