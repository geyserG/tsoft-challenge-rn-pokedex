import type { ComponentPropsWithoutRef } from 'react';
import type { Animated, DimensionValue, View } from 'react-native';

export interface SkeletonProps extends ComponentPropsWithoutRef<typeof View> {}

export interface SkeletonItemProps
  extends ComponentPropsWithoutRef<typeof Animated.View> {
  animated?: boolean;
  borderRadius?: number;
  height?: DimensionValue;
  width?: DimensionValue;
}
