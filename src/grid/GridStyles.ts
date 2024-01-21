import { styled } from '@mui/material';
import { GridContainerProps } from './types';
import { getGridTemplateAreas } from './functions';

export const GridContainer = styled('div')<GridContainerProps>(
  ({ theme, queryContainer, breakpointSizes, childrenNumber }) => {
    const queryType = queryContainer ? `container ${queryContainer}` : 'media';
    const templateAreas = getGridTemplateAreas(breakpointSizes);

    const childAreasProps = Array.from(
      { length: childrenNumber },
      (_, i) => i + 1
    ).reduce<Record<string, unknown>>((props, number) => {
      props[`& div:nth-child(${number})`] = {
        gridArea: `area${number}`,
      };
      return props;
    }, {});

    console.log(childAreasProps);

    return {
      display: 'grid',
      [`@${queryType} (width < ${theme.breakpoints.values.sm}px)`]: {
        gridTemplateAreas: templateAreas.xs,
      },
      [`@${queryType} (${theme.breakpoints.values.sm}px <= width < ${theme.breakpoints.values.md}px)`]:
        {
          gridTemplateAreas: templateAreas.sm,
        },
      [`@${queryType} (${theme.breakpoints.values.md}px <= width < ${theme.breakpoints.values.lg}px)`]:
        {
          gridTemplateAreas: templateAreas.md,
        },
      [`@${queryType} (${theme.breakpoints.values.lg}px <= width < ${theme.breakpoints.values.xl}px)`]:
        {
          gridTemplateAreas: templateAreas.lg,
        },
      [`@${queryType} (${theme.breakpoints.values.xl}px <= width)`]: {
        gridTemplateAreas: templateAreas.xl,
      },
      ...childAreasProps,
    };
  }
);

export const GridItem = styled('div')(() => ({}));
