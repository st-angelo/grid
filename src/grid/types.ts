export type BreakpointValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type BreakpointProps = {
  xs?: BreakpointValue;
  sm?: BreakpointValue;
  md?: BreakpointValue;
  lg?: BreakpointValue;
  xl?: BreakpointValue;
};

export type ContainerProps = BreakpointProps & {
  children?: React.ReactNode;
  queryContainer?: string;
};

export type ItemProps = BreakpointProps & {
  children?: React.ReactNode;
};

export type BreakpointSizes = {
  xs: BreakpointValue[];
  sm: BreakpointValue[];
  md: BreakpointValue[];
  lg: BreakpointValue[];
  xl: BreakpointValue[];
};

export type GridContainerProps = {
  queryContainer?: string;
  breakpointSizes: BreakpointSizes;
  childrenNumber: number;
};
