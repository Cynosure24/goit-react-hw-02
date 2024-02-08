import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const initState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem("feedback")) ?? initState
  );

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const positive = Math.round(((good + neutral) / total) * 100);

  const handleClick = (name) => {
    setState((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const handleReset = () => {
    setState(initState);
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(state));
  }, [state]);
  return (
    <>
      <Description />

      <div className={css.wrap}>
        <Options
          handleClick={handleClick}
          options={Object.keys(initState)}
        />

        {total > 0 && (
          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      {total > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};