import { View, ScrollView, Image } from 'react-native';
import React from 'react';
import type { StaticScreenProps } from '@react-navigation/native';
import type { PokemonDetailsParams } from '../../navigation/types';
import { usePokemonById } from '../../hooks/usePokemonById';
import { Text } from '../../components';
import { styles } from './styles';
import PokemonDetailsSkeleton from './PokemonDetails.Skeleton';
import Stat from './Stat';

type Props = StaticScreenProps<PokemonDetailsParams>;

const PokemonDetails = ({ route }: Props) => {
  const { pokemonId } = route.params;
  const { pokemon, loading } = usePokemonById(pokemonId);

  if (loading) {
    return <PokemonDetailsSkeleton />;
  }

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

        <View style={styles.description}>
          <Text.Emphasis>Descripción</Text.Emphasis>
          <Text>{pokemon?.description}</Text>
        </View>

        <View style={styles.statsSection}>
          <Text variant="title">Estadísticas</Text>
          <View style={styles.statsList}>
            {pokemon?.stats.map(stat => (
              <Stat name={stat.name} value={stat.value} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;
