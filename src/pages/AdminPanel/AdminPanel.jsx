import React, { useState } from "react";
import './admin-panel.css'
import supabase from '../../lib/helper/supabaseClient'
import DashboardRow from "../../components/DashboardRows/DashboardRow";
import { Button } from "@mui/material";

function AdminPanel() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const { data, error } = await supabase
            .from('users_data')
            .select('email, is_admin')
        
        if (error) {
            console.log(error)
        } else {
            console.log(data)
            setUsers(data)
        }
    }

    return(
        <>
            <h2>Admin Panel</h2>
            <div className="panel">
                <Button variant="contained" onClick={fetchUsers}>Fetch Users</Button>
                {users.map((user, index) =>(
                    <DashboardRow key={index} userEmail={user.email} userRole={user.is_admin}/>
                ))}
            </div>
        </>
    )
}

export default AdminPanel;