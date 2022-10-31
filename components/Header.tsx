import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const auth = useAuthenticator();
  return (
    <header className={styles.header}>
      <span>Exercise App</span>
      <button onClick={auth.signOut}>Sign Out</button>
    </header>
  );
}
