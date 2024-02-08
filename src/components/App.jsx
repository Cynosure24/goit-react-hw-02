import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const localeStorageFeedBacks = window.localStorage.getItem('feedbacks');
    return localeStorageFeedBacks !== null
      ? JSON.parse(localeStorageFeedBacks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  function setNewFeedback(type) {
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      [type]: feedbacks[type] + 1,
    }));
  }


  function setFeedbReset() {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const checkFeedB = Boolean(
    feedbacks.good || feedbacks.neutral || feedbacks.bad
  );
  return (
    <div>
      <Description />
      <Options
        setNewFeedback={setNewFeedback}
        checkFeedB={checkFeedB}
        setFeedbReset={setFeedbReset}
      />
      {checkFeedB ? (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};