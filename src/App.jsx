import { Route, Routes } from "react-router-dom";
import { Login, Register } from "./components";
import { Home } from "./page/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/account/signin" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
      </Routes>
    </>
  );
};
