import type { ComponentPropsWithoutRef } from 'react';
import type { View } from 'react-native';

type ViewProps = ComponentPropsWithoutRef<typeof View>;

export interface ProgressBarContextValue {
  percentage: number;
}

export interface ProgressBarProps extends ViewProps {
  max?: number;
  value: number;
}

export interface ProgressBarTrackProps extends ViewProps {}

export interface ProgressBarIndicatorProps extends ViewProps {}
