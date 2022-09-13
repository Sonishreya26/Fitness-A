import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Schedule from "./components/Schedule/Schedule";
import Trainers from "./components/Trainers/Trainers";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Navbar/Nav";
import BMI from "./components/Calculators/BMI";
import MembershipMain from "./components/MembershipsPlanCards/MembershipMain";
import Yoga from "./components/Yoga/yoga";
import ExerciseHome from "./components/Exercises/ExerciseHome";
import ExerciseDetail from "./components/Exercises/ExerciseDetail";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Categories from "./components/Categories";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterMain from "./components/FooterMain/FooterMain";

const App = () => {
  const location = useLocation();

  const user = useSelector((state) => state.user.currentUser);
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <div className="App">
        <Nav />
        <ToastContainer />
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<BMI />} path="/bmi" />
          <Route element={<GymProgram />} path="/gym-program" />
          <Route element={<ExerciseHome />} path="/exercises" />
          <Route element={<ExerciseDetail />} path="/exercise/:id" />
          <Route element={<Member />} path="/member" />
          <Route element={<Yoga />} path="/Yoga" />
          <Route element={<Classes />} path="/classes" />
          <Route element={<Schedule />} path="/schedules" />
          {/* <Route element={<Trainers />} path="/trainers" /> */}
          <Route element={<Contact />} path="/contact" />
          <Route element={<MembershipMain />} path="/membership" />
          <Route element={<Home />} path="/products" />
          <Route element={<ProductList />} path="/products/:category" />
          <Route element={<Product />} path="/product" />
          <Route element={<Product />} path="/product/:id" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Success />} path="/success" />
          <Route element={<AboutUs />} path="/about" />
          <Route
            element={
              user ? (
                location.state && location.state.toCart === "true" ? (
                  <Navigate to="/cart" />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Login />
              )
            }
            path="/login"
          ></Route>
          <Route
            element={
              user ? (
                location.state && location.state.toCart === "true" ? (
                  <Navigate to="/cart" />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Register />
              )
            }
            path="/register"
          ></Route>
        </Routes>
        {location.pathname != "/" && <FooterMain />}
      </div>
    </Box>
  );
};

export default App;
