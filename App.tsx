import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/app/navigation/Navigator';
import { DependenciesProvider } from './src/app/providers/DependenciesContext';
import { pokemonContainer } from './src/features/pokemon/di/pokemonContainer';

const dependencies = {
  ...pokemonContainer,
};

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
