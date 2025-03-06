import React from "react";
import './admin-panel.css'
import MuiBottomNav from "../../components/MuiBottomNav";
import UsersPanel from "./Users/UsersPanel";

function AdminPanel() {

    return (
        <>
            <h2>Admin Panel</h2>
            <UsersPanel />
            <MuiBottomNav />
        </>
    )
}

export default AdminPanel;