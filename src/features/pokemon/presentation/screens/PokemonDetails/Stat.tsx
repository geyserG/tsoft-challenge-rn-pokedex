import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { pokemonStatLabels } from '../constants';
import { ProgressBar } from '../../../../../shared/components';

type StatType = {
  name: string;
  value: number;
};

const MAX_BASE_STAT = 255;

const Stat = ({ name, value }: StatType) => {
  return (
    <View key={name} style={styles.statRow}>
      <Text style={styles.statLabel}>
        {pokemonStatLabels[name] ?? name.replaceAll('-', ' ')}
      </Text>
      <ProgressBar
        accessibilityLabel={`${pokemonStatLabels[name] ?? name}: ${value}`}
        max={MAX_BASE_STAT}
        style={styles.statProgress}
        value={value}
      >
        <ProgressBar.Track>
          <ProgressBar.Indicator />
        </ProgressBar.Track>
      </ProgressBar>
    </View>
  );
};

export default Stat;
