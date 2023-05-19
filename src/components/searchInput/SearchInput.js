import {BsSearch } from 'react-icons/bs'
import styles from './searchinput.module.css'
const SearchInput = ({...rest}) => {
return (
  <div className={styles.wrapper}>
    <BsSearch color="inherit" />
    <input className={styles.input} {...rest} />
  </div>
);
};

export default SearchInput;