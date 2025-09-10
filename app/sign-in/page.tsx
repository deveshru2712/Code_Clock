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
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTheme } from "next-themes";

export default function SignUpPage() {
  const handleGoogleSignUp = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const { theme } = useTheme();

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm shadow-lg bg-transparent backdrop-blur-sm border border-border/50">
        <CardHeader className="text-center">
          <CardTitle>Welcome</CardTitle>
          <CardDescription className="text-slate-950 dark:text-slate-200">
            Continue with your Google account
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
            onClick={handleGoogleSignUp}
          >
            <Github />
            Continue with Github
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
