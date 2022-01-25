import React from 'react';

import styles from './Card.module.scss';

interface CardProps {
  title: string;
  unit: string;
  timeframe: { current: number; previous: number };
}

const Card = ({ title, timeframe, unit }: CardProps) => {
  const titleNoSpace = title.replace(' ', '');
  const timeframeUnit = unit.replace('ly', '');
  const { current, previous } = timeframe;

  return (
    <div className={styles.container}>
      <div className={`${styles.background} ${styles[titleNoSpace]}`}></div>
      <div className={styles.info}>
        <div className={styles.title}>
          {title}
          <button aria-label="Setting button"></button>
        </div>
        <span className={styles.current}>
          {current}
          {current > 1 ? 'hrs' : 'hr'}
        </span>
        <span className={styles.previous}>
          {timeframeUnit} - {previous}
          {previous > 1 ? 'hrs' : 'hr'}
        </span>
      </div>
    </div>
  );
};

export default Card;
