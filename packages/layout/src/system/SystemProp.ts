type directionShort = 'l' | 'r' | 't' | 'b' | 'x' | 'y' | '';
type direction =
  | ''
  | 'Left'
  | 'Right'
  | 'Top'
  | 'Bottom'
  | 'Horizontal'
  | 'Vertical';
type styleNameShort = 'm' | 'p';
type styleName = 'margin' | 'padding';
export type SystemProp =
  | `${styleName}${direction}`
  | `${styleNameShort}${directionShort}`;
