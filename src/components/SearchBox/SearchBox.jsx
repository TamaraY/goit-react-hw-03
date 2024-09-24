import styles from "./SearchBox.module.css";

const SearchBox = ({ value, handleChange }) => {
  return (
    <div className={styles.searchWrap}>
      <label className={styles.text}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(evt) => handleChange(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
