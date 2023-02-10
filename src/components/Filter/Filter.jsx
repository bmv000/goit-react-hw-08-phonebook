import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filterList } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.filter__label}>
      <span className={css.filter__span}>Find contacts by name</span>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(filterList(event.currentTarget.value))}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
  );
};

export default Filter;
