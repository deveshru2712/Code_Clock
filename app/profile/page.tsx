import { getSession } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfilePage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
    return null;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      profile page
    </div>
  );
}
