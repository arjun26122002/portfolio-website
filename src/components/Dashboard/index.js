import { useEffect, useState } from "react";
import {  onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    //  const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged( (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);


    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;