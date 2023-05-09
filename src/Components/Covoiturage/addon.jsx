import styles from './styles.module.css';

function Addon() {
  return (
    <div className={styles.section}>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
      <div className={styles.circle}></div>
    </div>
  );
}

export default Addon;