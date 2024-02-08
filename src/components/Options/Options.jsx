import css from "./Options.module.css";

export const Options = ({ handleClick, options }) => {
  return (
    <ul className={css.btList}>
      {options.map((option) => (
        <li
          key={option}
          className={css.bt}
        >
          <button
            type="button"
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};