import { forwardRef, useEffect, useRef, type ComponentRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { styles } from './Skeleton.styles';
import type { SkeletonItemProps, SkeletonProps } from './Skeleton.types';

const SkeletonRoot = forwardRef<ComponentRef<typeof View>, SkeletonProps>(
  ({ accessibilityLabel = 'Loading', ...props }, ref) => (
    <View
      ref={ref}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="progressbar"
      {...props}
    />
  ),
);

const Item = forwardRef<ComponentRef<typeof View>, SkeletonItemProps>(
  (
    {
      animated = true,
      borderRadius = 8,
      height = 16,
      style,
      width = '100%',
      ...props
    },
    ref,
  ) => {
    const opacity = useRef(new Animated.Value(0.45)).current;

    useEffect(() => {
      if (!animated) {
        opacity.setValue(1);
        return;
      }

      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            duration: 700,
            easing: Easing.inOut(Easing.ease),
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            duration: 700,
            easing: Easing.inOut(Easing.ease),
            toValue: 0.45,
            useNativeDriver: true,
          }),
        ]),
      );

      animation.start();
      return () => animation.stop();
    }, [animated, opacity]);

    return (
      <Animated.View
        ref={ref}
        style={[styles.item, { borderRadius, height, opacity, width }, style]}
        {...props}
      />
    );
  },
);

SkeletonRoot.displayName = 'Skeleton';
Item.displayName = 'Skeleton.Item';

export const Skeleton = Object.assign(SkeletonRoot, { Item });
