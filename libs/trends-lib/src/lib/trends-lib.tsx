import styles from './trends-lib.module.scss';

/* eslint-disable-next-line */
export interface TrendsLibProps {}

export function TrendsLib(props: TrendsLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TrendsLib!</h1>
    </div>
  );
}

export default TrendsLib;
