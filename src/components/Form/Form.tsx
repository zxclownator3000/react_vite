import styles from './Form.module.css'
import {ChangeEvent, useState} from "react";

export const Form = () => {
    const onClick = () => {
        console.log('username')
        console.log(username)
    }

    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)


    }

    const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }

        return (
        <div className={styles.form}>
            <div className={styles.username}>
                Имя
                <label id={'name'}>
                    <input value={username} onChange={handleChangeUsername}/>
                </label>
            </div>
            <div className={styles.phone}>
                Телефон
                <label id={'name'}>
                    <input value={phone} onChange={handleChangePhone}/>
                </label>
            </div>
            <div className={styles.email}>
                Email
                <label id={'name'}>
                    <input value={email} onChange={handleChangeEmail}/>
                </label>
            </div>
            <div className={styles.address}>
                Адрес
                <label id={'name'}>
                    <input value={address} onChange={handleChangeAddress}/>
                </label>
            </div>
            <button onClick={onClick} className={styles.submitButton}>Сохранить</button>

        </div>
    )
}