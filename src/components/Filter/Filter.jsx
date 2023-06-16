import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => {
    return (
      <div className={css.label}>
        <input
          type="text"
          name="filter"
          className={css.input}
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
          }}
          placeholder="Enter name"
        />
      </div>
    );
  }

Filter.types = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func,
};