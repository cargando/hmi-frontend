import { FC } from 'react';
import s from './progress-bar.module.scss';

export type TProgressBar = {
  value: number;
};

export const ProgressBar: FC<TProgressBar> = ({ value }) => {
  return (
    <div className={s.progress}>
      <div className={s.progress__active} style={{ width: `${value}%` }} />
    </div>
  );
};

export default ProgressBar;


