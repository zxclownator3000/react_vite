import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.text}> Социальные сети</div>
      <div className={styles.icons}>
        <a href="https://web.telegram.org">
          <img src="../../../public/telegram.png" alt="" />
        </a>
        <a href="https://www.tiktok.com">
          <img src="../../../public/tik-tok.png" alt="" />
        </a>
        <a href="https://vk.com">
          <img src="../../../public/vkontakte.png" alt="" />
        </a>
        <a href="https://web.whatsapp.com/">
          <img src="../../../public/whatsapp.png" alt="" />
        </a>
      </div>
    </div>
  );
};
