import styles from "../styles/About.module.css";

const Test = () => {
  return (
    <>
      <div>
        <h1 className="justify-center text-center absolute top-16 px-6">
          Test
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.child}>c1</div>
        <div className={styles.child}>c2</div>
        <div className={styles.child}>c3</div>
      </div>
    </>
  );
};

export default Test;
