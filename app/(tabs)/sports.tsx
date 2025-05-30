import Cantena from "@/Screens/Cantena";
import sportsData from "@/data/sports.json";
import React from 'react';

export default function Sports() {
  return (
    <Cantena number={0} url={sportsData} />
  );
}