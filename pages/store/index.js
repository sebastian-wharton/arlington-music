import styles from "../../styles/Store.module.css";

const Store = () => {
  return (
    <>
      <div className={styles.results}>
        <div className={styles.card}>Card1</div>
        <div className={styles.card}>Card2</div>
        <div className={styles.card}>Card3</div>
        <div className={styles.card}>Card4</div>
        <div className={styles.card}>Card5</div>
        <div className={styles.card}>Card6</div>
      </div>
    </>
  );
};

export default Store;
