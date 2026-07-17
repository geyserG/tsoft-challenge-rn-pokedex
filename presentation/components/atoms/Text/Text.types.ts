import type { ComponentPropsWithoutRef } from 'react';
import type { Text, TextStyle } from 'react-native';

type NativeTextProps = ComponentPropsWithoutRef<typeof Text>;

export type TextVariant =
  | 'body'
  | 'caption'
  | 'label'
  | 'subtitle'
  | 'title'
  | 'titlepage';

export interface TextProps extends NativeTextProps {
  color?: TextStyle['color'];
  variant?: TextVariant;
  weight?: TextStyle['fontWeight'];
}

export interface TextEmphasisProps extends TextProps {}
