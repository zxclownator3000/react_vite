import styles from './Form.module.css'
import { useState} from "react";
import {TextInput} from "../TextInput";

export const Form = () => {
    const onClick = () => {
        console.log('username')
        console.log(username)
    }

    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')


        return (
        <div className={styles.form}>
            <TextInput title={'Имя'} value={username} onChange={setUsername}/>
            <TextInput title={'Телефон'} value={phone} onChange={setPhone}/>
            <TextInput title={'Email'} value={email} onChange={setEmail}/>
            <TextInput title={'Адрес'} value={address} onChange={setAddress}/>

            <button onClick={onClick} className={styles.submitButton}>Сохранить</button>

        </div>
    )
}