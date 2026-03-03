import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

function Home(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`, {
            withCredentials: true
        })
        .then(res => {
            if (res.data.status) {
                setUser(res.data.user);
            } else {
                window.location.href = "https://zerodha-app-wr6a.onrender.com";
            }
        })
        .catch(() => {
            window.location.href = "https://zerodha-app-wr6a.onrender.com";
        });
    }, []);

    if (!user) return <h2>Loading...</h2>;
    return(
        <>
            <TopBar user = {user}/>
            <Dashboard/>
        </>
    );
};

export default Home;

