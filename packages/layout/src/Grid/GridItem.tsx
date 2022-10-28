import React from 'react';

export interface GridItemProps {
  children?: React.ReactNode;
}

export function GridItemBase({ children }: GridItemProps) {
  return <>{children}</>;
}
