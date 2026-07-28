import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import type { TextProps } from '../Text';

type NativePressableProps = ComponentPropsWithoutRef<typeof Pressable>;

export type ButtonVariant = 'filled' | 'outline' | 'ghost';

export interface ButtonContextValue {
  disabled: boolean;
  variant: ButtonVariant;
}

export interface ButtonProps
  extends Omit<NativePressableProps, 'children' | 'style'> {
  children: ReactNode;
  loading?: boolean;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  variant?: ButtonVariant;
}

export interface ButtonLabelProps extends TextProps {}

export interface ButtonIconProps extends ComponentPropsWithoutRef<typeof View> {
  position?: 'left' | 'right';
}
