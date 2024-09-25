import styles from "./TextInput.module.css";
import {ChangeEvent} from "react";

type IProps = {
    title: string;
    value: string;
    onChange:(newValue: string) => void;
    placeholder?: string;

}
export const TextInput = (props: IProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
       props.onChange(event.target.value)
    }
    return (<div className={styles.inputWrapper}>
        {props.title}
        <label id={'name'}>
            <input placeholder={props.placeholder} value={props.value} onChange={ handleChange}/>
        </label>
    </div>)

}