import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AppProvider } from './context/AppContext'; // Import your context

function App() {
  return (
      <AppProvider>
        <AppNavigator />
      </AppProvider>
  );
}

export default App;
