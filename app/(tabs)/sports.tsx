import sportsData from "@/data/sports.json";
import Cantena from "@/screens/Cantena";
import React from 'react';

export default function Sports() {
  return (
    <Cantena number={0} url={sportsData} />
  );
}