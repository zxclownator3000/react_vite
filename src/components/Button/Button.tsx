import styles from "./Button.module.css";

type IProps = {
  label: string;
  onClick: () => void;
};
export const Button = (props: IProps) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.label}
    </button>
  );
};
