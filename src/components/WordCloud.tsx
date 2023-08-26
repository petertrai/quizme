"use client";

import { useTheme } from "next-themes";
import React from "react";
import D3WorldCloud from "react-d3-cloud";

type Props = {};
const data = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "duck", value: 10 },
];

const fontSizeMapper = (prop: {value: number}) => {
  return Math.log2(prop.value) * 5 + 10
}

const WordCloud = (props: Props) => {
  const theme = useTheme();


  return (
    <>
      <D3WorldCloud
        font="Times"
        data={data}
        height={550}
        rotate={0}
        fontSize={fontSizeMapper}
        padding={10}
        fill={theme.theme == "dark" ? "white" : "black"}
      />
    </>
  );
};

export default WordCloud;
