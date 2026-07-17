import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '../components';
import { useNavigation } from '@react-navigation/native';

const PokemonList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>PokemonList</Text>
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            pokemonId: 123,
          })
        }
      >
        <Button.Label>Ir al pokemon</Button.Label>
      </Button>
    </View>
  );
};

export default PokemonList;
