import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import PokemonList from '../screens/PokemonList/PokemonList';
import PokemonDetails from '../screens/PokemonDetails';
import PokemonListEmptyState from '../screens/PokemonListEmptyState';
import PokemonDetailsEmptyState from '../screens/PokemonDetailsEmptyState';
import { primaryColorPokedex } from '../screens/constants';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: PokemonList,
      options: {
        headerShown: false,
      },
    },
    Details: {
      screen: PokemonDetails,
      options: {
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: primaryColorPokedex,
        },
        title: '',
      },
    },
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
