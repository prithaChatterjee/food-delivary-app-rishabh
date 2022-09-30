import { Provider } from "react-redux";
import Routing from "./Config/Routes";
import { BrowserRouter} from "react-router-dom";
import store from "./Store/configStore";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
