import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [mergedData, setMergedData] = useState({}); // Initialize with an empty object
  const [allData, setAllData] = useState({}); // Initialize with an empty object

  // You can provide functions to update mergedData if needed

  return (
    <AppContext.Provider
      value={{mergedData, setMergedData, allData, setAllData}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
