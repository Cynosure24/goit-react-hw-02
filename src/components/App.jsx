import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Feedback } from './Feedback/Feedback';
import { Options } from './Options/Options';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('saved-feedback'));

    if (savedFeedback !== null) {
      let initialValue = savedFeedback.feedback;
      console.log(initialValue);
      return {
        good: initialValue.good,
        neutral: initialValue.neutral,
        bad: initialValue.bad,
      };
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const onLeaveFeedback = option => {
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify({ feedback }));
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={onLeaveFeedback}
        reset={() =>
          setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
          })
        }
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};