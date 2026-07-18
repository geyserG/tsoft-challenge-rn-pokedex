import { useNavigation } from '@react-navigation/native';
import { FlatList, View, type ListRenderItem } from 'react-native';
import { CardItem } from '../../components';
import { INITIAL_ITEMS_TO_RENDER } from './constants';
import ListHeader from './ListHeader/ListHeader';
import { styles } from './PokemonList.styles';
import { usePokemonList } from '../../hooks/usePokemonList';
import { SkeletonContent } from './PokemonList.Skeleton';
import { PokemonListItem } from './types';

const EMPTY_POKEMON_LIST: PokemonListItem[] = [];

const PokemonList = () => {
  const { page, loading, reload } = usePokemonList();
  const navigation = useNavigation();

  const renderItems: ListRenderItem<PokemonListItem> = ({ item }) => (
    <View style={styles.item}>
      <CardItem
        onPress={() =>
          navigation.navigate('Details', {
            pokemonId: item.pokemonId,
          })
        }
      >
        <CardItem.Label>{item.pokemonName}</CardItem.Label>
        <CardItem.Image
          source={{
            uri: item.imageLarge,
          }}
        />
      </CardItem>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={page?.results ?? EMPTY_POKEMON_LIST}
        initialNumToRender={INITIAL_ITEMS_TO_RENDER}
        keyExtractor={item => item.pokemonName}
        ListEmptyComponent={<SkeletonContent />}
        ListHeaderComponent={<ListHeader />}
        maxToRenderPerBatch={INITIAL_ITEMS_TO_RENDER}
        onRefresh={reload}
        refreshing={loading}
        renderItem={renderItems}
        updateCellsBatchingPeriod={50}
        windowSize={5}
      />
    </View>
  );
};

export default PokemonList;
