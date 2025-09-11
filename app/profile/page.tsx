import { redirect } from "next/navigation";
import React from "react";
import { getSession } from "@/lib/auth/utils";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await getSession();
  // if user session does not exists then re-direct to the sign-in page
  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>{session.user.email}</div>
      <div>{session.user.id}</div>
      <Image
        src={session.user.image!}
        height={45}
        width={45}
        alt="profile_image"
      ></Image>
    </div>
  );
}
