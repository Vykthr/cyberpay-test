import './App.css';
import Routes from "./components/routes/MainRoutes";
import { Provider } from "react-redux";
import initStore from "./components/redux/store";

export const store = initStore({});


function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
