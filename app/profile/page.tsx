import { redirect } from "next/navigation";
import React from "react";
import { getSession } from "@/lib/auth/utils";

export default async function ProfilePage() {
  const session = await getSession();
  // if user session does not exists then re-direct to the sign-in page
  if (!session?.user) {
    redirect("/sign-in");
  }

  return <div>profile page</div>;
}
