import { createContext, forwardRef, useContext, type ElementRef } from 'react';
import { Image as NativeImage, Pressable, View } from 'react-native';
import { Text } from '../../atoms/Text';
import { styles } from './CardItem.styles';
import type {
  CardItemContextValue,
  CardItemImageProps,
  CardItemLabelProps,
  CardItemProps,
} from './CardItem.types';

const CardItemContext = createContext<CardItemContextValue | null>(null);

const CardItemRoot = forwardRef<ElementRef<typeof View>, CardItemProps>(
  (
    {
      backgroundColor = '#FFFFFF',
      children,
      onPress,
      pressableProps,
      style,
      ...props
    },
    ref,
  ) => {
    const content = (
      <View
        ref={ref}
        style={[styles.root, { backgroundColor }, style]}
        {...props}
      >
        {children}
      </View>
    );

    return (
      <CardItemContext.Provider value={{}}>
        {onPress ? (
          <Pressable
            accessibilityRole="button"
            {...pressableProps}
            onPress={onPress}
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressed,
            ]}
          >
            {content}
          </Pressable>
        ) : (
          content
        )}
      </CardItemContext.Provider>
    );
  },
);

const Label = forwardRef<ElementRef<typeof Text>, CardItemLabelProps>(
  ({ style, ...props }, ref) => {
    useCardItemContext('CardItem.Label');

    return (
      <Text
        ref={ref}
        numberOfLines={2}
        style={[styles.label, style]}
        variant="title"
        {...props}
      />
    );
  },
);

const CardImage = forwardRef<
  ElementRef<typeof NativeImage>,
  CardItemImageProps
>(({ resizeMode = 'contain', style, ...props }, ref) => {
  useCardItemContext('CardItem.Image');

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: '90%',
          height: '90%',
          backgroundColor: 'white',
          opacity: 0.5,
          borderRadius: 31,
          position: 'absolute',
        }}
      />
      <NativeImage
        ref={ref}
        resizeMode={resizeMode}
        style={[styles.image, style]}
        {...props}
      />
    </View>
  );
});

function useCardItemContext(componentName: string): CardItemContextValue {
  const context = useContext(CardItemContext);

  if (!context) {
    throw new Error(`${componentName} must be used inside CardItem.`);
  }

  return context;
}

CardItemRoot.displayName = 'CardItem';
Label.displayName = 'CardItem.Label';
CardImage.displayName = 'CardItem.Image';

export const CardItem = Object.assign(CardItemRoot, {
  Label,
  Image: CardImage,
});
