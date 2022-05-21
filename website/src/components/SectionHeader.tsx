import React from 'react';
import { IconTag, type IconProps } from './IconTag';

export function SectionHeader({
  size = '1.5rem',
  header,
  subheader,
  primary,
  color,
  icon: Icon,
  noMargin,
  ...iconProps
}: Partial<IconProps> & {
  header?: string;
  subheader?: string;
  primary?: boolean;
  noMargin?: boolean;
}) {
  return (
    <div className={'container ' + (noMargin ? '' : 'margin-vert--lg')}>
      <div className="row">
        <div>
          {Icon && (
            <IconTag
              icon={Icon}
              color={color}
              padding={8}
              size={size}
              style={{ marginRight: 12 }}
              {...iconProps}
            />
          )}
        </div>
        <div>
          <h1
            className={primary && 'gradient clip-text'}
            style={{ lineHeight: 0.8, margin: '4px 0px', color }}
          >
            {header}
          </h1>
          {subheader && <small>{subheader}</small>}
        </div>
      </div>
    </div>
  );
}
