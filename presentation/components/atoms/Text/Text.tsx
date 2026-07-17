import { forwardRef, type ElementRef } from 'react';
import { Text as NativeText } from 'react-native';
import { styles, variantStyles } from './Text.styles';
import type { TextEmphasisProps, TextProps } from './Text.types';

const TextRoot = forwardRef<ElementRef<typeof NativeText>, TextProps>(
  ({ color, style, variant = 'body', weight, ...props }, ref) => (
    <NativeText
      ref={ref}
      style={[
        styles.base,
        variantStyles[variant],
        color !== undefined && { color },
        weight !== undefined && { fontWeight: weight },
        style,
      ]}
      {...props}
    />
  ),
);

const Emphasis = forwardRef<ElementRef<typeof NativeText>, TextEmphasisProps>(
  ({ weight = '700', ...props }, ref) => (
    <TextRoot ref={ref} weight={weight} {...props} />
  ),
);

TextRoot.displayName = 'Text';
Emphasis.displayName = 'Text.Emphasis';

export const Text = Object.assign(TextRoot, { Emphasis });
