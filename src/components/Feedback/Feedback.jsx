export function Feedback({ good, neutral, bad }) {
    const total = good + neutral + bad;
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
          Total: <span>{total}</span>
        </p>
        <p>
          Positive: <span>{Math.floor(((good + neutral) / total) * 100)}</span>%
        </p>
      </div>
    );
  }