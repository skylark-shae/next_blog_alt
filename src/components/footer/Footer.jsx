import styles from './footer.module.css';

const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>FOOTER</div>
        <div className={styles.text}>
          Filler text, @ rights reserved
        </div>
      </div>
    );
  };
  
  export default Footer;