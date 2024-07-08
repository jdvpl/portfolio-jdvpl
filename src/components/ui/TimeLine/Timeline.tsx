'use client';
import { EXPERIENCE } from "@/constants";
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";

const Experience = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Esto se ejecutará solo en el cliente
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Chrono
          items={EXPERIENCE}
          mode="VERTICAL_ALTERNATING"
          slideItemDuration={5000}
          slideShow
        />
      )}
    </>
  );
};

export default Experience;
