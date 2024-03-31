'use client'
import React, { createContext, useContext, useState } from 'react';

// Create a context
interface IDefaultValue {
  projectSectionScrollPercentage: number;
  setProjectSectionScrollPercentage: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: IDefaultValue = {
  projectSectionScrollPercentage: 0,
  setProjectSectionScrollPercentage: () => { },
}

const ScrollContext = createContext(defaultValue);

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: any) => {
  const [projectSectionScrollPercentage, setProjectSectionScrollPercentage] = useState(0);

  return (
    <ScrollContext.Provider value={{ projectSectionScrollPercentage, setProjectSectionScrollPercentage }}>
      {children}
    </ScrollContext.Provider>
  )
};