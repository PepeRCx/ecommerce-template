import React, { useEffect, useState } from "react";
import supabase from "../../lib/helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import './admin-panel.css'

import MuiBottomNav from "../../components/MuiBottomNav";
import UsersPanel from "./Users/UsersPanel";
import DashboardPanel from "./Dashboard/DashboardPanel";
import ProductsPanel from "./Products/ProductsPanel";

function AdminPanel() {
    const [selectedPanel, setSelectedPanel] = useState(0);
    const [userEmail, setUserEmail] = useState('');

    const [isAdmin, setIsAdmin] = useState(null);
    const navigate = useNavigate();

    const handleNavigation = (newValue) => {
        setSelectedPanel(newValue);
    };
    
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

    useEffect(() => {
        getUserLogged();
    }, []);

    const getUserLogged = async () => {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
            alert("Error fetching user:" + error.message);
        } else {
            setUserEmail(user.email);
        }
    }

    const renderPanel = () => {
        switch (selectedPanel) {
            case 0:
                return <DashboardPanel />;
            case 1:
                return <UsersPanel />;
            case 2:
                return <ProductsPanel userEmail={userEmail}/>;
            default:
                return <DashboardPanel />;
        }
    }

    return isAdmin ? (
        <>
            <h2>Admin Panel</h2>
            {renderPanel()}
            <MuiBottomNav onChange={handleNavigation} />
        </>
    ) : null;
}

export default AdminPanel;