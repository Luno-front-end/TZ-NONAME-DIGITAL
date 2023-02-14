import { Link, Route, Routes } from "react-router-dom";

import { HomePage } from "./components/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { Reg } from "./components/Auth/SingUp";
import { Auth } from "./components/Auth/Auth";
import { ListGoods } from "./components/ListGoods/ListGoods";
import { Basket } from "./components/Basket/Basket";
import { Profile } from "./components/Profile/Profile";
import { NotFound } from "./components/NotFound";
import { Success } from "./components/Success/Success";

import { PrivateRoute } from "./components/PrivateRoute";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Reg />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/list-goods" element={<ListGoods />} />
        <Route
          path="/basket"
          element={
            <PrivateRoute>
              <Basket />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/success"
          element={
            <PrivateRoute>
              <Success />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
