import React from 'react';

export type IconProps = {
  icon: ({ ...props }: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color?: string;
  overlayColor?: string;
  size?: number | string;
  style?: React.CSSProperties;
  padding?: number | string;
  alpha?: number;
};

export function IconTag({
  color = '#e2e2e2',
  alpha = 0.3,
  overlayColor = color + alpha * 100,
  icon: Icon,
  size,
  padding = '6px',
  style,
}: IconProps) {
  return (
    <div
      className="inline-flex-center"
      style={{
        backgroundColor: overlayColor,
        borderRadius: '6px',
        padding,
        ...style,
      }}
    >
      <Icon fill={color} fontSize={size} />
    </div>
  );
}
