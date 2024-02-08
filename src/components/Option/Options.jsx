import css from './Options.module.css';

export function Options({ setNewFeedback, checkFeedB, setFeedbReset }) {
  return (
    <div className={css.options}>
      <button
        type="button"
        className={css.button}
        onClick={() => setNewFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => setNewFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => setNewFeedback('bad')}
      >
        Bad
      </button>
      {checkFeedB && (
        <button type="button" className={css.button} onClick={setFeedbReset}>
          Reset
        </button>
      )}
    </div>
  );
}