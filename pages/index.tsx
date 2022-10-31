import styles from "../styles/Home.module.css";

import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";

function Page({ signOut, user }: WithAuthenticatorProps) {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello {user?.username}</h1>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default withAuthenticator(Page);
