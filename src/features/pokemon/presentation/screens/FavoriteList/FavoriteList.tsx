import { FlatList, View } from 'react-native';
import { INITIAL_ITEMS_TO_RENDER } from '../PokemonList/constants';
import ListHeader from '../PokemonList/ListHeader/ListHeader';
import { styles } from '../PokemonList/PokemonList.styles';
import { SkeletonContent } from '../PokemonList/PokemonList.Skeleton';
import { PokemonListItemType } from '../PokemonList/types';
import { useDependencies } from '../../../../../app/providers/DependenciesContext';
import { useCallback, useEffect, useState } from 'react';
import PokemonListItem from '../PokemonList/PokemonListItem';
import { PokemonLikeList } from '../../../domain/entities/PokemonLikeList';

const EMPTY_POKEMON_LIST: PokemonListItemType[] = [];

const FavoriteList = () => {
  const { getPokemonLikeList } = useDependencies();
  const [favorites, setFavorites] = useState<PokemonLikeList>();

  const renderItem = useCallback(
    ({ item }: { item: PokemonListItemType }) => (
      <PokemonListItem item={item} />
    ),
    [],
  );

  useEffect(() => {
    try {
      getPokemonLikeList.execute().then(favorites => {
        setFavorites(favorites);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={favorites?.list ?? EMPTY_POKEMON_LIST}
        initialNumToRender={INITIAL_ITEMS_TO_RENDER}
        keyExtractor={item => item.pokemonName}
        ListEmptyComponent={<SkeletonContent />}
        ListHeaderComponent={<ListHeader />}
        maxToRenderPerBatch={INITIAL_ITEMS_TO_RENDER}
        onEndReachedThreshold={0.5}
        renderItem={renderItem}
        updateCellsBatchingPeriod={50}
        windowSize={5}
      />
    </View>
  );
};

export default FavoriteList;
