import axios from "axios";
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const onClickUsers = () => {
  const api = "https://4dsda75wt5.execute-api.ap-northeast-1.amazonaws.com/default/amptest0127e81e2e-main";
  const user = "ogawa";

  axios
    .post(api, {user})
    .then((res) => {
      console.log(res.data);
    })
}

function App() {
  return (
    <div className="App">
      <Button onClick={onClickUsers}>users</Button>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
}

export default withAuthenticator(App);
