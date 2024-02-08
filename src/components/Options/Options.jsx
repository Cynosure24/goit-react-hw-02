import css from './Options.module.css';

export const Options = ({ onLeaveFeedback, reset, total }) => {
  return (
    <div className={css.wrap}>
      <button className={css.btn} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};