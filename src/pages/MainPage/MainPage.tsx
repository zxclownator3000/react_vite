import "./MainPage.css";
import { Form, Header, Counter } from "../../components";
import { useState } from "react";

export const MainPage = () => {
  const [pageId, setPageId] = useState(1);
  return (
    <div className="page-wrapper">
      <Header />
      {pageId === 0 && <Form />}
      {pageId === 1 && <Counter />}
      <div className="footer">Footer</div>
    </div>
  );
};
