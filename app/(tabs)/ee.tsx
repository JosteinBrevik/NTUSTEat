import Cantena from "@/Screens/Cantena";
import eeData from "@/data/ee.json";
import React from 'react';

export default function Faculty() {
  return (
    <Cantena number={1} url={eeData} />
  );
}