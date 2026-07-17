import { useNavigation } from '@react-navigation/native';
import { FlatList, View, type ListRenderItem } from 'react-native';
import { CardItem } from '../../components';
import { INITIAL_ITEMS_TO_RENDER } from './constants';
import type { PokemonListItem } from './types';
import ListHeader from './ListHeader/ListHeader';
import { styles } from './PokemonList.styles';

const pokemonItems: PokemonListItem[] = Array.from(
  { length: 200 },
  (_, index) => ({
    id: index + 1,
    image:
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    name: 'Charmander',
  }),
);

const PokemonList = () => {
  const navigation = useNavigation();

  const renderItems: ListRenderItem<PokemonListItem> = ({ item }) => (
    <View style={styles.item}>
      <CardItem
        onPress={() =>
          navigation.navigate('Details', {
            pokemonId: item.id,
          })
        }
      >
        <CardItem.Label>{item.name}</CardItem.Label>
        <CardItem.Image source={{ uri: item.image }} />
      </CardItem>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={pokemonItems}
        initialNumToRender={INITIAL_ITEMS_TO_RENDER}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<ListHeader />}
        maxToRenderPerBatch={INITIAL_ITEMS_TO_RENDER}
        renderItem={renderItems}
        updateCellsBatchingPeriod={50}
        windowSize={5}
      />
    </View>
  );
};

export default PokemonList;
