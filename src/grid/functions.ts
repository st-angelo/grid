import { BreakpointProps, BreakpointSizes, BreakpointValue } from './types';

export const getBreakpointSizes = <TProps extends BreakpointProps>(
  propsCollection: TProps[]
): BreakpointSizes => {
  const xs: BreakpointValue[] = [];
  const sm: BreakpointValue[] = [];
  const md: BreakpointValue[] = [];
  const lg: BreakpointValue[] = [];
  const xl: BreakpointValue[] = [];

  for (const props of propsCollection) {
    let fallback: BreakpointValue = 12;

    xs.push(props.xs || fallback);
    if (props.xs) fallback = props.xs;

    sm.push(props.sm || fallback);
    if (props.sm) fallback = props.sm;

    md.push(props.md || fallback);
    if (props.md) fallback = props.md;

    lg.push(props.lg || fallback);
    if (props.lg) fallback = props.lg;

    xl.push(props.xl || fallback);
  }

  return {
    xs,
    sm,
    md,
    lg,
    xl,
  };
};

const getSizeAreas = (sizeBreakpoints: BreakpointValue[]) => {
  const rows = [];

  let currentAreaNumber = 1;
  let currentRow = '';
  let currentFilled = 0;

  for (const value of sizeBreakpoints) {
    if (currentFilled + value > 12) {
      const rowValues = `${currentRow} ${Array(12 - currentFilled)
        .fill('.')
        .join(' ')}`;
      rows.push(`"${rowValues.trim()}"`);
      currentRow = Array(value).fill(`area${currentAreaNumber}`).join(' ');
      currentFilled = value;
    } else {
      currentFilled += value;
      currentRow +=
        ' ' + Array(value).fill(`area${currentAreaNumber}`).join(' ');
    }

    currentAreaNumber++;
  }

  const lastRowValues = `${currentRow} ${Array(12 - currentFilled)
    .fill('.')
    .join(' ')}`;
  rows.push(`"${lastRowValues.trim()}"`);

  return rows.join('\n');
};

export const getGridTemplateAreas = (breakpointSizes: BreakpointSizes) => {
  return {
    xs: getSizeAreas(breakpointSizes.xs),
    sm: getSizeAreas(breakpointSizes.sm),
    md: getSizeAreas(breakpointSizes.md),
    lg: getSizeAreas(breakpointSizes.lg),
    xl: getSizeAreas(breakpointSizes.xl),
  };
};
