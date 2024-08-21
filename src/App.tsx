import "./App.css";
import CountView from "./Components/Count/CountView";
import Header from "./Components/Header";
import UserTable from "./Components/User/UserTable";

function App() {
  return (
    <>
      <Header />
      <UserTable />
      <CountView />
    </>
  );
}

export default App;
