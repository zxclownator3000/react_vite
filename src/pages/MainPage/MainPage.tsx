import "./MainPage.css";
import { Form, Header, Counter } from "../../components";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer.tsx";

export const MainPage = () => {
  const [pageId, setPageId] = useState(0);
  return (
    <div className="page-wrapper">
      <Header />
      {pageId === 0 && <Form />}
      {pageId === 1 && <Counter />}
      <Footer />
    </div>
  );
};
