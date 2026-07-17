import {
  createContext,
  forwardRef,
  useContext,
  type ComponentRef,
} from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { Text } from '../Text';
import { rootVariants, styles } from './Button.styles';
import type {
  ButtonContextValue,
  ButtonIconProps,
  ButtonLabelProps,
  ButtonProps,
} from './Button.types';

const ButtonContext = createContext<ButtonContextValue | null>(null);

const ButtonRoot = forwardRef<ComponentRef<typeof Pressable>, ButtonProps>(
  (
    {
      accessibilityRole = 'button',
      children,
      disabled = false,
      loading = false,
      style,
      variant = 'filled',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <ButtonContext.Provider value={{ disabled: isDisabled, variant }}>
        <Pressable
          ref={ref}
          accessibilityRole={accessibilityRole}
          accessibilityState={{ disabled: isDisabled, busy: loading }}
          disabled={isDisabled}
          style={state => [
            styles.root,
            rootVariants[variant],
            state.pressed && styles.pressed,
            isDisabled && styles.disabled,
            typeof style === 'function' ? style(state) : style,
          ]}
          {...props}
        >
          {loading ? (
            <ActivityIndicator
              color={variant === 'filled' ? '#FFFFFF' : '#000000'}
            />
          ) : (
            children
          )}
        </Pressable>
      </ButtonContext.Provider>
    );
  },
);

const Label = forwardRef<ComponentRef<typeof Text>, ButtonLabelProps>(
  ({ color, style, ...props }, ref) => {
    const context = useButtonContext('Button.Label');

    return (
      <Text
        ref={ref}
        color={color ?? (context.variant === 'filled' ? '#FFFFFF' : '#000000')}
        style={[styles.label, style]}
        variant="label"
        {...props}
      />
    );
  },
);

const Icon = forwardRef<ComponentRef<typeof View>, ButtonIconProps>(
  ({ position = 'left', style, ...props }, ref) => {
    useButtonContext('Button.Icon');

    return (
      <View
        ref={ref}
        style={[
          position === 'left' ? styles.iconLeft : styles.iconRight,
          style,
        ]}
        {...props}
      />
    );
  },
);

function useButtonContext(componentName: string): ButtonContextValue {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error(`${componentName} must be used inside Button.`);
  }

  return context;
}

ButtonRoot.displayName = 'Button';
Label.displayName = 'Button.Label';
Icon.displayName = 'Button.Icon';

export const Button = Object.assign(ButtonRoot, { Label, Icon });
