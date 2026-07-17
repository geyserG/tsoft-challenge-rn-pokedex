import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import PokemonList from '../screens/PokemonList/PokemonList';
import PokemonDetails from '../screens/PokemonDetails';
import PokemonListEmptyState from '../screens/PokemonListEmptyState';
import PokemonDetailsEmptyState from '../screens/PokemonDetailsEmptyState';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: PokemonList,
      options: {
        headerShown: false,
      },
    },
    Details: PokemonDetails,
    ListEmptyState: PokemonListEmptyState,
    DetailsEmptyState: PokemonDetailsEmptyState,
  },
  screenOptions: {
    contentStyle: {
      backgroundColor: 'white',
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
