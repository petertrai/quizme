'use client'

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import QuizCreationForm from "./QuizCreationForm";


type Props = {};

const QuizCreation = (props: Props) => {

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Quiz Creator</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
         <QuizCreationForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCreation;
