import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import WordCloud from "../WordCloud";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Popular Topics</CardTitle>
          <CardDescription>
            Click on any topic to open its quiz!
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <WordCloud/>
        </CardContent>
      </Card>

  );
};

export default HotTopicsCard;
