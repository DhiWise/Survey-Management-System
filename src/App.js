import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Routes />
    </GoogleOAuthProvider>
  );
}

export default App;
