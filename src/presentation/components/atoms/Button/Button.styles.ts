import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';
import type { ButtonVariant } from './Button.types';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 20,
  },
  filled: {
    backgroundColor: '#00B0EF',
    borderColor: '#00B0EF',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#00B0EF',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.45,
  },
  label: {
    textAlign: 'center',
  } satisfies TextStyle,
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export const rootVariants = {
  filled: styles.filled,
  ghost: styles.ghost,
  outline: styles.outline,
} satisfies Record<ButtonVariant, ViewStyle>;
