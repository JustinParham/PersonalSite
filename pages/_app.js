import { Fragment } from "react";
import SiteLayout from "../components/layouts/SiteLayout";
import "../styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Fragment>
  );
}
