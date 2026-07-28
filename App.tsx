import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/pokemon/presentation/navigation/Navigator';
import { DependenciesProvider } from './src/pokemon/presentation/contexts/DependenciesContext';
import { dependencies } from './src/pokemon/di/dependencies';

function App() {
  return (
    <SafeAreaProvider>
      <DependenciesProvider dependencies={dependencies}>
        <Navigation />
      </DependenciesProvider>
    </SafeAreaProvider>
  );
}

export default App;
