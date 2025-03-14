import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './users-panel.css'
import supabase from '../../../lib/helper/supabaseClient'
import DashboardRow from "../../../components/DashboardRows/DashboardRow";
import { Button } from "@mui/material";

function UsersPanel() {
    const [users, setUsers] = useState([]);

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

    return (
        <>
            <div className="panel">
                <Button variant="contained" onClick={fetchUsers} sx={{ m: 2, backgroundColor: 'black' }}>Fetch Users</Button>
                <Button variant="outlined" sx={{ color: 'black' }} color="black" onClick={getUserLogged} >Current User</Button>
                {users.map((user, index) =>(
                    <DashboardRow key={index} userEmail={user.email} userRole={user.is_admin}/>
                ))}
            </div>
        </>
    )
}

export default UsersPanel;