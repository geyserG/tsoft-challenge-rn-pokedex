import { View } from 'react-native';
import { styles } from './PokemonList.styles';
import { CardItem } from '../../../../../shared/components';
import { PokemonListItemType } from './types';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

const PokemonListItem = ({ item }: { item: PokemonListItemType }) => {
  const navigation = useNavigation();
  return (
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
};

export default memo(PokemonListItem);
