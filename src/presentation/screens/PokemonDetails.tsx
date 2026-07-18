import { View, ScrollView, Image } from 'react-native';
import React from 'react';
import type { StaticScreenProps } from '@react-navigation/native';
import type { PokemonDetailsParams } from '../navigation/types';
import { usePokemonById } from '../hooks/usePokemonById';
import { ProgressBar, Text } from '../components';
import { pokemonStatLabels } from './constants';
import { styles } from './PokemonDetails/styles';

const MAX_BASE_STAT = 255;

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

        <View style={styles.description}>
          <Text.Emphasis>Descripción</Text.Emphasis>
          <Text>{pokemon?.description}</Text>
        </View>

        <View style={styles.statsSection}>
          <Text variant="title">Estadísticas</Text>
          <View style={styles.statsList}>
            {pokemon?.stats.map(stat => (
              <View key={stat.name} style={styles.statRow}>
                <Text style={styles.statLabel}>
                  {pokemonStatLabels[stat.name] ??
                    stat.name.replaceAll('-', ' ')}
                </Text>
                <ProgressBar
                  accessibilityLabel={`${
                    pokemonStatLabels[stat.name] ?? stat.name
                  }: ${stat.value}`}
                  max={MAX_BASE_STAT}
                  style={styles.statProgress}
                  value={stat.value}
                >
                  <ProgressBar.Track>
                    <ProgressBar.Indicator />
                  </ProgressBar.Track>
                </ProgressBar>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;
