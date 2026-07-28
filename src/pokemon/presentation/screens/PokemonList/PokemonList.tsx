import { FlatList, View } from 'react-native';
import { Skeleton } from '../../../../shared/components';
import { INITIAL_ITEMS_TO_RENDER } from './constants';
import ListHeader from './ListHeader/ListHeader';
import { styles } from './PokemonList.styles';
import { usePokemonList } from '../../hooks/usePokemonList';
import { SkeletonContent } from './PokemonList.Skeleton';
import { PokemonListItemType } from './types';
import { useDependencies } from '../../../../app/providers/DependenciesContext';
import { useCallback } from 'react';
import PokemonListItem from './PokemonListItem';

const EMPTY_POKEMON_LIST: PokemonListItemType[] = [];

const PokemonList = () => {
  const { getPokemonList } = useDependencies();
  const { page, loading, loadingMore, loadMore, reload } = usePokemonList({
    getPokemonList,
  });

  const renderItem = useCallback(
    ({ item }: { item: PokemonListItemType }) => (
      <PokemonListItem item={item} />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={page?.results ?? EMPTY_POKEMON_LIST}
        initialNumToRender={INITIAL_ITEMS_TO_RENDER}
        keyExtractor={item => item.pokemonName}
        ListEmptyComponent={<SkeletonContent />}
        ListFooterComponent={
          loadingMore ? (
            <Skeleton accessibilityLabel="Cargando más pokémon">
              <Skeleton.Item height={100} borderRadius={15} />
            </Skeleton>
          ) : null
        }
        ListHeaderComponent={<ListHeader />}
        maxToRenderPerBatch={INITIAL_ITEMS_TO_RENDER}
        onRefresh={reload}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshing={loading}
        renderItem={renderItem}
        updateCellsBatchingPeriod={50}
        windowSize={5}
      />
    </View>
  );
};

export default PokemonList;
