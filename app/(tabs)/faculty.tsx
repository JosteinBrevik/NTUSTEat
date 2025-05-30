import Cantena from "@/Screens/Cantena";
import facultyData from "@/data/faculty.json";
import React from 'react';

export default function Faculty() {
  return (
    <Cantena number={2} url={facultyData} />
  );
}