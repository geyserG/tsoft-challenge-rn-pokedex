import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import type { ImageProps, PressableProps, View, ViewStyle } from 'react-native';
import type { TextProps } from '../../atoms/Text';

type ViewProps = ComponentPropsWithoutRef<typeof View>;
type CardItemChild = ReactElement<CardItemLabelProps | CardItemImageProps>;

export type CardItemContextValue = Record<string, never>;

export interface CardItemProps extends ViewProps {
  backgroundColor?: ViewStyle['backgroundColor'];
  children: [CardItemChild, CardItemChild];
  onPress?: PressableProps['onPress'];
  pressableProps?: Omit<PressableProps, 'children' | 'onPress' | 'style'>;
}

export interface CardItemLabelProps extends TextProps {
  children: ReactNode;
}

export interface CardItemImageProps extends ImageProps {}
