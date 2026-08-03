import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import PokemonList from '../../features/pokemon/presentation/screens/PokemonList/PokemonList';
import PokemonDetails from '../../features/pokemon/presentation/screens/PokemonDetails/PokemonDetails';
import PokemonListEmptyState from '../../features/pokemon/presentation/screens/PokemonListEmptyState';
import PokemonDetailsEmptyState from '../../features/pokemon/presentation/screens/PokemonDetailsEmptyState';
import { primaryColorPokedex } from '../../features/pokemon/presentation/screens/constants';
import FavoriteList from '../../features/pokemon/presentation/screens/FavoriteList/FavoriteList';
import FavoriteButton from './FavoriteButton';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: PokemonList,
      options: {
        title: 'Inicio',
        headerRight: FavoriteButton,
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
    FavoriteList: FavoriteList,
  },
  screenOptions: {
    contentStyle: {
      backgroundColor: 'white',
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
