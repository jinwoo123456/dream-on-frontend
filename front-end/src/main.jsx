import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Card1 from "./component/main/card1";
import Card2 from "./component/main/card2";
import Card3 from "./component/main/card3";
import Card4 from "./component/main/card4";
import RegistType from "./pages/auth/registType";
import Signup from "./pages/auth/signup";
import MainPage from "./pages/main/mainPage";
import "./style/scss/style.scss"; // 글로벌 스타일 적용

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Signup /> App.jsx 대신 Signup.jsx만 렌더링 */}
    <Router>
      <Routes>
        <Route path="/cd1" element={<Card1 />} />
        <Route path="/cd2" element={<Card2 />} />
        <Route path="/cd3" element={<Card3 />} />
        <Route path="/cd4" element={<Card4 />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/registType" element={<RegistType />} />
        <Route path="/registType/signup" element={<Signup />} />
      </Routes>
    </Router>

    <Card3 />
  </React.StrictMode>
);
