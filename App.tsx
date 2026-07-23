import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/frameworks-drivers/ui/navigation/Navigator';
import { DependenciesProvider } from './src/frameworks-drivers/ui/contexts/DependenciesContext';
import { dependencies } from './src/main/dependencies';

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <DependenciesProvider dependencies={dependencies}>
        <Navigation />
      </DependenciesProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
