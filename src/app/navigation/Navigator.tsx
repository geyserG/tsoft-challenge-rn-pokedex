import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import PokemonList from '../../pokemon/presentation/screens/PokemonList/PokemonList';
import PokemonDetails from '../../pokemon/presentation/screens/PokemonDetails/PokemonDetails';
import PokemonListEmptyState from '../../pokemon/presentation/screens/PokemonListEmptyState';
import PokemonDetailsEmptyState from '../../pokemon/presentation/screens/PokemonDetailsEmptyState';
import { primaryColorPokedex } from '../../pokemon/presentation/screens/constants';

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
