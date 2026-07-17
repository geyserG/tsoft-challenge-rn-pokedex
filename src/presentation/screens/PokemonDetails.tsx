import { View, Text } from 'react-native';
import React from 'react';
import type { StaticScreenProps } from '@react-navigation/native';
import type { PokemonDetailsParams } from '../navigation/types';

type Props = StaticScreenProps<PokemonDetailsParams>;

const PokemonDetails = ({ route }: Props) => {
  const { pokemonId } = route.params;
  return (
    <View>
      <Text>PokemonDetails: {pokemonId}</Text>
    </View>
  );
};

export default PokemonDetails;
