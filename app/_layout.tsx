import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    'F1Italic400': require('../assets/fonts/italic400.ttf'),
    'F1Regular400': require('../assets/fonts/Normal400.ttf'),
    'F1Regular400Wide': require('../assets/fonts/Normal400Wide.ttf'),
    'F1Regular700': require('../assets/fonts/Normal700.ttf'),
    'F1Regular900': require('../assets/fonts/Normal900.ttf'),
    'F1Digits400': require('../assets/fonts/Normal400Digits.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide splash screen once fonts are loaded or if there's an error
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Don't render anything until fonts are loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
} 