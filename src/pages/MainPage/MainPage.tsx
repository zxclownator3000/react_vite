import styles from "./MainPage.module.css";
import { Form, Header, Counter } from "../../components";
import { useState } from "react";
import { Footer } from "../../components/Footer";

export const MainPage = () => {
  const [pageId, setPageId] = useState(0);
  return (
    <div className={styles.pageWrapper}>
      <Header />
      {pageId === 0 && <Form />}
      {pageId === 1 && <Counter />}
      <Footer />
    </div>
  );
};
