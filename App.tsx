import { ActivityIndicator } from 'react-native';
import { Group } from './src/screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Group /> : <ActivityIndicator />} 
    </ThemeProvider>
  );
}


