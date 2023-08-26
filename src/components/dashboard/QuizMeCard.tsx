'use client'
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit } from "lucide-react";

import {useRouter} from "next/navigation";

type Props = {};

const QuizMeCard = (props: Props) => {
const router = useRouter()
  return (

      <Card className="hover:cursor-pointer hover:opacity-75 pb-4" onClick={() => {
      router.push('/createquiz')
    }}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Create Quiz</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>
    </Card>

  );
};

export default QuizMeCard;
