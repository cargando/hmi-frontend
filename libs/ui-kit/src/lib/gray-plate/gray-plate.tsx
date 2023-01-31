import cn from 'classnames';
import React, { FC } from 'react';
import { figurePadding, TContainer } from '../../utils';
import s from './gray-plate.module.scss';

export type TGrayPlate = {
  isColumn?: boolean;
  padding?: TContainer;
  margin?: TContainer;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const GrayPlate: FC<TGrayPlate> = ({
                                            isColumn,
                                            margin,
                                            padding,
                                            children,
                                            style = {},
                                          }) => {
  const defaultPadding = {
    paddingTop: '40px',
    paddingRight: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
    ...figurePadding(padding as TContainer),
  };
  const defaultMargin = {
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
    ...figurePadding(margin as TContainer, 'margin'),
  };

  return (
    <div
      className={cn(s.plate, isColumn && s.plateColumn)}
      style={{ ...defaultPadding, ...defaultMargin, ...style }}
    >
      {children}
    </div>
  );
};


export default GrayPlate;
