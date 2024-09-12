import styles from './Form.module.css'
import {ChangeEvent, useState} from "react";

export const Form = () => {
  const onClick = () => {
    console.log('username')
    console.log(username)
  }
  const [username, setUsername] = useState('')

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  return (
    <div className={styles.form}>
      <label id={'name'}>
        Имя
        <input value={username} onChange={handleChangeUsername} />
      </label>

      <button onClick={onClick} className={styles.submitButton}>Сохранить</button>

    </div>
  )
}