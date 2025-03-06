import React, { useState } from "react";
import './admin-panel.css'
import MuiBottomNav from "../../components/MuiBottomNav";
import UsersPanel from "./Users/UsersPanel";
import DashboardPanel from "./Dashboard/DashboardPanel";
import ProductsPanel from "./Products/ProductsPanel";

function AdminPanel() {
    const [selectedPanel, setSelectedPanel] = useState(0);

    const handleNavigation = (newValue) => {
        setSelectedPanel(newValue);
    };

    const renderPanel = () => {
        switch (selectedPanel) {
            case 0:
                return <DashboardPanel />;
            case 1:
                return <UsersPanel />;
            case 2:
                return <ProductsPanel />;
            default:
                return <DashboardPanel />;
        }
    }

    return (
        <>
            <h2>Admin Panel</h2>
            {renderPanel()}
            <MuiBottomNav onChange={handleNavigation} />
        </>
    )
}

export default AdminPanel;