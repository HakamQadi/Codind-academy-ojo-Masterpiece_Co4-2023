import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [mergedData, setMergedData] = useState({});
  const updateMergedData = data => {
    setMergedData({...mergedData, ...data});
  };

  return (
    <AppContext.Provider value={{mergedData, updateMergedData, user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};