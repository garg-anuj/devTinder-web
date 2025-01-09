import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

import Body from "./Body";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import FeedPage from "./page/FeedPage";

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
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<FeedPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
