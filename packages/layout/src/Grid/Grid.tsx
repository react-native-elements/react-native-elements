import React from 'react';

export interface GridProps {
  children?: React.ReactNode;
}

export function GridBase({ children }: GridProps) {
  return <>{children}</>;
}
