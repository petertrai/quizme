'use client'

import React from 'react'
import D3WorldCloud from 'react-d3-cloud'

type Props = {}

const WordCloud = (props: Props) => {
  return (
    <D3WorldCloud data={[{ text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 }]} />
  )
}

export default WordCloud