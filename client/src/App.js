import Messenger from "./components/messenger";
import LoginDialog from "./components/account/loginDialog";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '400712167708-7jurvgu3jvkto857gq3n990ad6fk5er7.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId = {clientId}>
      <AccountProvider>
     <Messenger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
