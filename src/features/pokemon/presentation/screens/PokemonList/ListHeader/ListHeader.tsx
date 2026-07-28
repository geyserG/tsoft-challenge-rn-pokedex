import { View } from 'react-native';
import React from 'react';
import { Text } from '../../../../../../shared/components';
import { styles } from './ListHeader.styles';

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text variant="titlepage">Pokédex</Text>
    </View>
  );
};

export default ListHeader;
