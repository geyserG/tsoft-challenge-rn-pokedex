import { View, ScrollView, Image } from 'react-native';
import React from 'react';
import type { StaticScreenProps } from '@react-navigation/native';
import type { PokemonDetailsParams } from '../navigation/types';
import { usePokemonById } from '../hooks/usePokemonById';
import { ProgressBar, Skeleton, Text } from '../components';
import { pokemonStatLabels } from './constants';
import { styles } from './PokemonDetails/styles';

const MAX_BASE_STAT = 255;
const STAT_SKELETON_ITEMS = 6;

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

const PokemonDetailsSkeleton = () => (
  <ScrollView>
    <Skeleton accessibilityLabel="Cargando detalles del pokémon">
      <View style={styles.header}>
        <View style={styles.skeletonMetaData}>
          {Array.from({ length: 3 }, (_, index) => (
            <View key={index} style={styles.skeletonMetaDataItem}>
              <Skeleton.Item height={18} width={64} />
              <Skeleton.Item height={16} width={88} />
            </View>
          ))}
        </View>
        <Skeleton.Item borderRadius={150} height={260} width={260} />
      </View>

      <View style={styles.skeletonContent}>
        <Skeleton.Item height={56} style={styles.skeletonTitle} width="55%" />

        <View style={styles.othersMetaData}>
          <Skeleton.Item height={44} width={110} />
          <Skeleton.Item height={44} width={140} />
        </View>

        <View style={styles.description}>
          <Skeleton.Item height={18} width={100} />
          <Skeleton.Item height={16} width="100%" />
          <Skeleton.Item height={16} width="85%" />
        </View>

        <View style={styles.statsSection}>
          <Skeleton.Item height={32} width={150} />
          <View style={styles.statsList}>
            {Array.from({ length: STAT_SKELETON_ITEMS }, (_, index) => (
              <View key={index} style={styles.statRow}>
                <Skeleton.Item height={20} width={130} />
                <Skeleton.Item
                  borderRadius={999}
                  height={10}
                  style={styles.statProgress}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </Skeleton>
  </ScrollView>
);

export default PokemonDetails;
