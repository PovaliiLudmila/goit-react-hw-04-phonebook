import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, addFilter }) => {
    return (
      <div className={css.label}>
        <input
          type="text"
          name="filter"
          className={css.input}
          value={filter}
          onChange={addFilter}
          placeholder="Enter name"
        />
      </div>
    );
  }

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func,
};