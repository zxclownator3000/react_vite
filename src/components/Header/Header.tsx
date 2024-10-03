import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="../../../public/logo.png" alt="" />
      <div className={styles.navBar}>
        <a href="#">counter</a>
        <a href="#"> form</a>
        <a href="#"> footer </a>
      </div>
    </div>
  );
};
