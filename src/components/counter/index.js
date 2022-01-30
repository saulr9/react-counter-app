import { useState } from 'react';
import CounterMessage from './CounterMessage';
import styles from './Counter.module.css';

const todayDate = new Date().toDateString();

function Counter() {
  const [count, setCount] = useState(0);

  const handleCounter = (operation) =>
    operation === 'increment' ? setCount(count + 1) : setCount(count - 1);

  return (
    <>
      <p>{`Bugs found today ${todayDate}:`}</p>
      <p>{count}</p>
      <div className={styles.Input__container}>
        <input
          type="button"
          value="-"
          disabled={count === 0}
          onClick={() => handleCounter('decrement')}
        />
        <input
          type="button"
          value="+"
          onClick={() => handleCounter('increment')}
        />
      </div>
      <CounterMessage counter={count} />
    </>
  );
}

export default Counter;
