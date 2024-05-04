import axios from "axios";
import './App.css';

const onClickUsers = () => {
  const api = "https://4dsda75wt5.execute-api.ap-northeast-1.amazonaws.com/default/amptest0127e81e2e-main";
  const user = {name: "ogawa"};

  axios
    .post(api, {user})
    .then((res) => {
      console.log(res.data);
    })
}

function App() {
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
    </div>
  );
}

export default App;
