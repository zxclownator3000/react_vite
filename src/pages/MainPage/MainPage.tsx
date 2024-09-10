import './MainPage.css'
import {Form, Header} from "../../components";

export const MainPage = () => {
  return (<div className="page-wrapper">
    <Header />
    <Form />
    <div className="footer">Footer</div>
  </div>)
}