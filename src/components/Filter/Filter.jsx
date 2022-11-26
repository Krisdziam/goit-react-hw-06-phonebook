import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';


const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(state => state.contacts.filter);

const onChange = e => {
  dispatch(filter(e.currentTarget.value.toLowerCase()))
}



  return (
    <>
      <label className={styles.label}>
        Find contacts by name: <br />
        <input
          className={styles.input}
          placeholder="Enter name"
          onChange={onChange}
          name="filter"
          type="text"
          value={filter}
        />
      </label>
    </>
  );
};

export default Filter;
