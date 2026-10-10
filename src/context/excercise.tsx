"use client";
import React, { createContext, useState } from "react";

export const ExcerciseContext = createContext({});

const ExcerciseProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [save, setSave] = useState([]);

  const shereState = {
    todaysPlan,
    setTodaysPlan,
    save,
    setSave,
  };

  return (
    <ExcerciseContext.Provider value={shereState}>
      {children}
    </ExcerciseContext.Provider>
  );
};

export default ExcerciseProvider;
