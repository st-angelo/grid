import { useMemo } from 'react';
import { ContainerProps, ItemProps } from './types';
import { GridContainer, GridItem } from './GridStyles';
import { getBreakpointSizes } from './functions';

const Grid = {
  Container({ queryContainer, children }: ContainerProps) {
    //#region Check children

    const invalidChildren = useMemo(() => {
      const logError = () =>
        console.error(
          'A Grid.Container can only render Grid.Container and Grid.Item child elements.'
        );

      if (!children) return false;
      if (Array.isArray(children)) {
        if (
          children.some(
            (child) => child.type !== Grid.Container && child.type !== Grid.Item
          )
        ) {
          logError();
          return true;
        }
      } else if (typeof children === 'object' && 'type' in children) {
        if (children.type !== Grid.Container && children.type !== Grid.Item) {
          logError();
          return true;
        }
      } else {
        logError();
        return true;
      }

      return false;
    }, [children]);

    //#endregion

    const breakpointSizes = useMemo(() => {
      if (Array.isArray(children)) {
        return getBreakpointSizes(children.map((child) => child.props));
      } else if (
        children &&
        typeof children === 'object' &&
        'props' in children
      ) {
        return getBreakpointSizes([children.props]);
      }
      return getBreakpointSizes([]);
    }, [children]);

    const childrenNumber = useMemo(() => Array.isArray(children) ? children.length : 1, [children]);

    if (invalidChildren) return <></>;

    return (
      <GridContainer
        queryContainer={queryContainer}
        breakpointSizes={breakpointSizes}
        childrenNumber={childrenNumber}
      >
        {children}
      </GridContainer>
    );
  },
  Item({ children }: ItemProps) {
    return <GridItem>{children}</GridItem>;
  },
};

export default Grid;
