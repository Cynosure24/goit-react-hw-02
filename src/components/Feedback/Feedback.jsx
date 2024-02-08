export function Feedback({ good, neutral, bad }) {
    const totalFeedback = good + neutral + bad;

    return (
      <div>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
        <p>
          Total: <span>{totalFeedback}</span>
        </p>
        <p>
          Positive: <span>{Math.round(((good + neutral) / totalFeedback) * 100)}</span>%
        </p>
      </div>
    );
  }