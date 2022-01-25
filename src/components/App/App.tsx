import React, { useState } from 'react';

import data from '../../data.json';
import styles from './App.module.scss';
import User from '../User';
import Card from '../Card';

const App = () => {
  const [currentTimeframe, setTimeframe] = useState('weekly');

  const onClickTimeframe = (timeframe: string) => {
    setTimeframe(timeframe);
  };

  const renderedCards = data.map(record => {
    const timeframe =
      currentTimeframe === 'daily'
        ? record.timeframes.daily
        : currentTimeframe === 'weekly'
        ? record.timeframes.weekly
        : record.timeframes.monthly;

    const unit =
      currentTimeframe === 'daily'
        ? 'Yesterday'
        : currentTimeframe === 'weekly'
        ? 'Last Week'
        : 'Last Month';

    return <Card key={record.title} title={record.title} timeframe={timeframe} unit={unit} />;
  });

  return (
    <main className={styles.container}>
      <User onClickTimeframe={onClickTimeframe} currentTimeframe={currentTimeframe} />
      {renderedCards}
    </main>
  );
};

export default App;
