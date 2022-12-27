import React from 'react';
import { StackProps } from '@rneui/layout';

declare const Stack: React.FC<StackProps>;

type UsageMetadata = Record<string, any> & {
  live: boolean;
  showCode: boolean;
  lang: string;
  showLineNumbers: boolean;
};

declare function meta(args: Record<string, any>): void;
declare function info(...args: string[]): void;
declare function usage(
  title: string,
  desc: string | string[],
  component: (...other: any[]) => React.ReactNode,
  usageMetadata?: Partial<UsageMetadata>
): void;

export { info, usage, meta, Stack };
