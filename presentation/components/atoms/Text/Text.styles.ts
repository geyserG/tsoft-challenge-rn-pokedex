import { StyleSheet, type TextStyle } from 'react-native';
import type { TextVariant } from './Text.types';

export const styles = StyleSheet.create({
  base: {
    color: '#1F2937',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  titlepage: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 64,
  },
});

export const variantStyles = {
  body: styles.body,
  caption: styles.caption,
  label: styles.label,
  subtitle: styles.subtitle,
  title: styles.title,
  titlepage: styles.titlepage,
} satisfies Record<TextVariant, TextStyle>;
