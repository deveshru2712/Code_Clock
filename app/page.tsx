"use client";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { useSession } from "@/lib/auth/auth-client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, isPending } = useSession();
  const { theme } = useTheme();

  // Show loading state while session is being fetched
  if (isPending) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <Loader />
      </div>
    );
  }

  // If user session does not exist then redirect to the sign-in page
  if (!session?.user) {
    redirect("/sign-in");
    return null;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="px-6 py-4 w-full max-w-md rounded-2xl gap-4 bg-white dark:bg-black shadow border flex items-center">
        {session.user.image && (
          <Image
            src={session.user.image}
            height={55}
            width={55}
            alt="Profile image"
            className="rounded-full"
          />
        )}
        <div className="flex flex-col flex-1">
          <span className="text-gray-900 dark:text-white font-medium">
            {session.user.name || "No name provided"}
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            {session.user.email || "No email provided"}
          </span>

          {/* Social media buttons */}
          <div className="flex items-center gap-2.5 mt-3">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <span>Twitter</span>
              {theme == "dark" ? (
                <Image
                  src={"/twitter_light_mode.jpg"}
                  alt="Twitter icon"
                  height={20}
                  width={20}
                />
              ) : (
                <Image
                  src={"/twitter_dark_mode.jpg"}
                  alt="Twitter icon"
                  height={20}
                  width={20}
                />
              )}
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
              <Linkedin color="#0A66C2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
