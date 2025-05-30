import facultyData from "@/data/faculty.json";
import Cantena from "@/screens/Cantena";
import React from 'react';

export default function Faculty() {
  return (
    <Cantena number={2} url={facultyData} />
  );
}