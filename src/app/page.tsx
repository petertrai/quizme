import Navbar from "@/components/Navbar";
import React from "react";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";
import { getAuthSession } from "@/lib/nextauth";

export default async function Home() {
  const session = await getAuthSession();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <Card className="w-[300px] flex flex-col items-center">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>Welcome To QuizMe!</CardTitle>
          <CardDescription className="pt-3">
            QuizMe creates quizzes using AI!
          </CardDescription>
        </CardHeader>
        <CardFooter>
        <SignInButton text="Sign In with Google"></SignInButton>
        </CardFooter>
      </Card>
    </div>
  );
}
