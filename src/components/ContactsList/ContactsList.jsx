import React from 'react';
import styles from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { removeContacts } from 'redux/contactsSlice';


const ContactsList = () => {
const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts.contacts);
const filter = useSelector(state => state.contacts.filter)

const onDeleteContact = (id) =>{
  dispatch(removeContacts(id))
}





  return (
    <>
      <div className={styles.containerList}>
        <ul className={styles.list}>
          {contacts.map(({ id, number, name }) => (
            <li className={styles.item} key={id}>
              <div className={styles.textContainer}>
                <p className={styles.text}>{name}:</p>
                <p className={styles.number}>{number}</p>
                <button
                  className={styles.removeBtn}
                  onClick={() => onDeleteContact(id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactsList;
