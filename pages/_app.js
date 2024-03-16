
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  );
}

export default MyApp;