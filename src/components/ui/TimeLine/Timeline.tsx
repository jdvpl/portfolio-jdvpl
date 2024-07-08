import { EXPERIENCE } from "@/constants";
import React from "react";
import { Chrono } from "react-chrono";


const Experience = () => {
  return (
     <Chrono items={EXPERIENCE} mode="VERTICAL_ALTERNATING"  slideItemDuration={5000} slideShow  />

  );
};
export default   Experience;

