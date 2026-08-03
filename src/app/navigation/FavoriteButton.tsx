import React from 'react';
import { Button } from '../../shared/components';
import { useNavigation } from '@react-navigation/native';

const FavoriteButton = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.navigate('FavoriteList')}>
      <Button.Label>Favoritos</Button.Label>
    </Button>
  );
};

export default FavoriteButton;
