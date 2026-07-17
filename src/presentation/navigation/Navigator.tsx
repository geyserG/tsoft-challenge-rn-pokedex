import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import PokemonList from '../screens/PokemonList';
import PokemonDetails from '../screens/PokemonDetails';
import PokemonListEmptyState from '../screens/PokemonListEmptyState';
import PokemonDetailsEmptyState from '../screens/PokemonDetailsEmptyState';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: PokemonList,
    Details: PokemonDetails,
    ListEmptyState: PokemonListEmptyState,
    DetailsEmptyState: PokemonDetailsEmptyState,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
