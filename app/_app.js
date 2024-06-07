// pages/app/_app.js

import { Provider } from "react-redux";

import rootReducer from "../../reducers"; // Import your root reducer
import RootLayout from "../../components/RootLayout";
import "../../styles/globals.css"; // Import your global styles
import store from "@/store/store";

function MyApp({ Component, pageProps }) {
  return (
    // Provide the Redux store to your Next.js application
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
