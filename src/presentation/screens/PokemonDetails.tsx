import { View, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import type { StaticScreenProps } from '@react-navigation/native';
import type { PokemonDetailsParams } from '../navigation/types';
import { usePokemonById } from '../hooks/usePokemonById';
import { Text } from '../components';
import { primaryColorPokedex } from './constants';

type Props = StaticScreenProps<PokemonDetailsParams>;

const PokemonDetails = ({ route }: Props) => {
  const { pokemonId } = route.params;
  const { pokemon } = usePokemonById(pokemonId);

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.metaData}>
          <View>
            <Text.Emphasis color="white">Tipo</Text.Emphasis>
            <Text color="white">{pokemon?.type}</Text>
          </View>
          <View>
            <Text.Emphasis color="white">Altura</Text.Emphasis>
            <Text color="white">{pokemon?.heightInMeters} m</Text>
          </View>
          <View>
            <Text.Emphasis color="white">Peso</Text.Emphasis>
            <Text color="white">{pokemon?.weightInKilograms} kg</Text>
          </View>
        </View>
        <Image
          source={{ uri: pokemon?.imageLarge }}
          style={styles.image}
          width={300}
          height={300}
        />
      </View>
      <View>
        <Text variant="titlepage" style={styles.title}>
          {pokemon?.pokemonName}
        </Text>

        <View style={styles.othersMetaData}>
          <View>
            <Text.Emphasis>Categoría</Text.Emphasis>
            <Text>{pokemon?.species}</Text>
          </View>
          <View>
            <Text.Emphasis>Habilidad</Text.Emphasis>
            <Text>{pokemon?.abilities.join(', ')}</Text>
          </View>
        </View>

        <Text style={styles.description}>{pokemon?.description}</Text>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    experimental_backgroundImage: `linear-gradient(180deg, ${primaryColorPokedex}, ${primaryColorPokedex}, white)`,
    paddingHorizontal: 16,
  },
  image: {
    paddingLeft: 10,
  },
  metaData: {
    margin: 0,
    height: '100%',
    justifyContent: 'center',
    gap: 16,
  },
  title: { textAlign: 'center' },
  description: {
    paddingHorizontal: 16,
  },
  othersMetaData: {
    padding: 16,
    flexDirection: 'row',
    gap: 16,
  },
});
