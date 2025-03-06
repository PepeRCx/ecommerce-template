import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './users-panel.css'
import supabase from '../../../lib/helper/supabaseClient'
import DashboardRow from "../../../components/DashboardRows/DashboardRow";
import { Button } from "@mui/material";

function UsersPanel() {
    const [users, setUsers] = useState([]);
    const [isAdmin, setIsAdmin] = useState(null);
    const navigate = useNavigate();

    useEffect(()=> {
        const checkIfAdmin = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error || !user) {
                navigate('/');
                return;
            }

            const { data, error: userError } = await supabase
                .from("users_data")
                .select("is_admin")
                .eq("email", user.email)
                .single();
            if (userError || !data || !data.is_admin) {
                navigate('/');
            } else {
                setIsAdmin(true);
            }
        };

        checkIfAdmin();
    }, [navigate]);

    const fetchUsers = async () => {
        const { data, error } = await supabase
            .from('users_data')
            .select('email, is_admin')
        
        if (error) {
            console.log(error)
        } else {
            setUsers(data)
        }
    }

    const getUserLogged = async () => {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
            alert("Error fetching user:" + error.message);
        } else {
            alert("Current User: " + user.email);
        }
    }

    return isAdmin ? (
        <>
            <div className="panel">
                <Button variant="contained" onClick={fetchUsers} sx={{ m: 2, backgroundColor: 'black' }}>Fetch Users</Button>
                <Button variant="outlined" sx={{ color: 'black' }} color="black" onClick={getUserLogged} >Current User</Button>
                {users.map((user, index) =>(
                    <DashboardRow key={index} userEmail={user.email} userRole={user.is_admin}/>
                ))}
            </div>
        </>
    ) : null;
}

export default UsersPanel;