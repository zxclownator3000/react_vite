import styles from "./Form.module.css";
import { useState } from "react";
import { TextInput } from "../TextInput";

export const Form = () => {
  const onClick = () => {
    console.log("username");
    console.log(username);
  };

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className={styles.form}>
      <TextInput
        placeholder={"Введите имя"}
        title={"Имя"}
        value={username}
        onChange={setUsername}
      />
      <TextInput
        placeholder={"Введите телефон"}
        title={"Телефон"}
        value={phone}
        onChange={setPhone}
      />
      <TextInput
        placeholder={"Введите Email"}
        title={"Email"}
        value={email}
        onChange={setEmail}
      />
      <TextInput
        placeholder={"Введите адрес"}
        title={"Адрес"}
        value={address}
        onChange={setAddress}
      />

      <button onClick={onClick} className={styles.submitButton}>
        Сохранить
      </button>
    </div>
  );
};
