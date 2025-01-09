import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
          basename="/"
        >
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
