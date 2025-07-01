import eeData from "@/data/ee.json";
import React from 'react';
import Cantena from "../../screens/Cantena";

export default function Faculty() {
  return (
    <Cantena number={1} url={eeData} />
  );
}