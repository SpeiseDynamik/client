import styles from './styles.module.scss';

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
