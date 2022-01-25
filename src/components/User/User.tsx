import React from 'react';

import avatar from '../../images/image-jeremy.png';
import styles from './User.module.scss';

interface UserProps {
  currentTimeframe: string;
  onClickTimeframe: (timeframe: string) => void;
}

const User = ({ onClickTimeframe, currentTimeframe }: UserProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <span className={styles.name}>Jeremy Robson</span>
      </div>

      <div className={styles.timeframes}>
        <span
          onClick={() => onClickTimeframe('daily')}
          className={currentTimeframe === 'daily' ? styles.active : ''}
        >
          Daily
        </span>
        <span
          onClick={() => onClickTimeframe('weekly')}
          className={currentTimeframe === 'weekly' ? styles.active : ''}
        >
          Weekly
        </span>
        <span
          onClick={() => onClickTimeframe('monthly')}
          className={currentTimeframe === 'monthly' ? styles.active : ''}
        >
          Monthly
        </span>
      </div>
    </div>
  );
};

export default User;
