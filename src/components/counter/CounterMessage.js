import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { rangeV2 } from '../../utils/range';
import BUG_MESSAGES from './bugMessages';

function CounterMessage({ counter }) {
  const [message, setMessage] = useState('');

  const getBugMessage = () => {
    if (counter === 0) return BUG_MESSAGES[0];

    return BUG_MESSAGES.find((item) => {
      const { bugs } = item;
      return rangeV2(...bugs).includes(counter);
    });
  };

  useEffect(() => {
    const bugItem = getBugMessage();
    setMessage(bugItem.message);
  }, [counter]);

  return <div>{message}</div>;
}
CounterMessage.propTypes = {
  counter: PropTypes.number
};
CounterMessage.defaultProps = {
  counter: 0
};
export default CounterMessage;
