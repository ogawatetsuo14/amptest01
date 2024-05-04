import axios from "axios";
import './App.css';

const onClickUsers = () => {
  const api = "https://463mivhum3.execute-api.ap-northeast-1.amazonaws.com/default/amptest01Func01-dev";

  axios
    .get(api)
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
