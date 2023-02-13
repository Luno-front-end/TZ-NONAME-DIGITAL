import { Link, Route, Routes } from "react-router-dom";

import { HomePage } from "./components/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { Reg } from "./components/Auth/SingUp";
import { Auth } from "./components/Auth/Auth";
import { ListGoods } from "./components/ListGoods/ListGoods";
import { Basket } from "./components/Basket/Basket";
import { Profile } from "./components/Profile/Profile";

export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Reg />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/list-goods" element={<ListGoods />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
