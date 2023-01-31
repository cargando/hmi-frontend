export interface TContainer {
  // values should be with dimensions
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  all?: string;
}

export type TType = 'padding' | 'margin';

export const figurePadding = (val: TContainer, type: TType = 'padding') => {
  const res = {
    padding: {
      paddingTop: '25px',
      paddingRight: '80px',
      paddingBottom: '100px',
      paddingLeft: '80px',
    },
    margin: {
      marginTop: '0',
      marginRight: '0',
      marginBottom: '0',
      marginLeft: '0',
    },
  };
  if (!val) {
    return {};
  }
  if (val.all) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res[type][type] = val.all;
    return res[type];
  }
  if (val.top) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res[type][`${type}Top`] = val.top;
  }
  if (val.bottom) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res[type][`${type}Bottom`] = val.bottom;
  }
  if (val.right) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res[type][`${type}Right`] = val.right;
  }
  if (val.left) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res[type][`${type}Left`] = val.left;
  }

  return res[type];
};

export const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
});
