import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signup/login.css";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

function HomePage() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {

  const verifyCookie = async () => {

    // Agar login nahi hai → kuch nahi karo
    if (!cookies.token) {
      return;
    }

    try{

      const { data } = await axios.post(
        "http://localhost:3002/auth/verify",
        {},
        { withCredentials: true }
      );

      const { status, user } = data;

      if(status){

        setUsername(user);

        // ✅ LOGIN hai → dusre origin pe bhejo
        window.location.href = "http://localhost:5174/";

      }

    }catch(err){
      console.log(err);
    }

  };

  verifyCookie();

}, [cookies]);

  return (
    <>
      <ToastContainer />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;