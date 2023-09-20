import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  // Initialize the mergedData state with an empty object
  const [mergedData, setMergedData] = useState({});

  // Define a function to update the mergedData
  const updateMergedData = data => {
    setMergedData({...mergedData, ...data});
  };

  // Provide mergedData and the updateMergedData function to the context
  return (
    <AppContext.Provider value={{mergedData, updateMergedData}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
