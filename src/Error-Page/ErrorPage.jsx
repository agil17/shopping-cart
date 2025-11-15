import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (  
    <div className={styles.error_page}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p><Link to="/">Return to Home</Link></p>
    </div>
  );
}

export default ErrorPage;