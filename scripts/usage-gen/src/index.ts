import { StackProps } from '@rneui/layout';
import React from 'react';

declare const Stack: React.ElementType<StackProps>;

declare function info(...args: string[]): void;
declare function usage(
  title: string,
  desc: string | string[],
  component: (...other: any[]) => React.ReactNode
  // live?: boolean
): void;

export { info, usage, Stack };
