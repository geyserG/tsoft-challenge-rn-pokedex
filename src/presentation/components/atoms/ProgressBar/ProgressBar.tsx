import {
  createContext,
  forwardRef,
  useContext,
  type ComponentRef,
} from 'react';
import { View } from 'react-native';
import { styles } from './ProgressBar.styles';
import type {
  ProgressBarContextValue,
  ProgressBarIndicatorProps,
  ProgressBarProps,
  ProgressBarTrackProps,
} from './ProgressBar.types';

const ProgressBarContext = createContext<ProgressBarContextValue | null>(null);

const ProgressBarRoot = forwardRef<ComponentRef<typeof View>, ProgressBarProps>(
  ({ accessibilityLabel, children, max = 100, value, ...props }, ref) => {
    const safeMax = max > 0 ? max : 100;
    const safeValue = clamp(value, 0, safeMax);
    const percentage = (safeValue / safeMax) * 100;

    return (
      <ProgressBarContext.Provider value={{ percentage }}>
        <View
          ref={ref}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="progressbar"
          accessibilityValue={{ max: safeMax, min: 0, now: safeValue }}
          {...props}
        >
          {children}
        </View>
      </ProgressBarContext.Provider>
    );
  },
);

const Track = forwardRef<ComponentRef<typeof View>, ProgressBarTrackProps>(
  ({ children, style, ...props }, ref) => {
    useProgressBarContext('ProgressBar.Track');

    return (
      <View ref={ref} style={[styles.track, style]} {...props}>
        {children}
      </View>
    );
  },
);

const Indicator = forwardRef<
  ComponentRef<typeof View>,
  ProgressBarIndicatorProps
>(({ style, ...props }, ref) => {
  const { percentage } = useProgressBarContext('ProgressBar.Indicator');

  return (
    <View
      ref={ref}
      style={[styles.indicator, { width: `${percentage}%` }, style]}
      {...props}
    />
  );
});

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function useProgressBarContext(componentName: string): ProgressBarContextValue {
  const context = useContext(ProgressBarContext);

  if (!context) {
    throw new Error(`${componentName} must be used inside ProgressBar.`);
  }

  return context;
}

ProgressBarRoot.displayName = 'ProgressBar';
Track.displayName = 'ProgressBar.Track';
Indicator.displayName = 'ProgressBar.Indicator';

export const ProgressBar = Object.assign(ProgressBarRoot, { Track, Indicator });
