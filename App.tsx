import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { initLocale } from './services/localeService';
import { initializeStore, Provider } from './store/providers/RootStoreProvider';

export default function App() {
  initLocale();

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const store = initializeStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider value={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
