export const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul>
      <li>
        <span>Good: {good} </span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {total}</span>
      </li>
      <li>
        <span>Positive: {positive}%</span>
      </li>
    </ul>
  );
};