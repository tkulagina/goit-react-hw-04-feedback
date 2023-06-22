import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log (options);

  const optionList = Object.keys(options);
  console.log (optionList);
  return (
    <ul className={css.option}>
      {optionList.map(option => (
        <li  key={option}>
          <button className={css.button} name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};



FeedbackOptions.propTypes = {
  option: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
