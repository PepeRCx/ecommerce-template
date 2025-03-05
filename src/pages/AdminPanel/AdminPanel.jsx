import React from "react";
import './admin-panel.css'
import supabase from '../../lib/helper/supabaseClient'

const { data, error } = await supabase
  .from('characters')
  .select()

let fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        console.log(error);
    } else {
        console.log(data.user);
    }
}

function AdminPanel() {
    return(
        <>
            <h2>Admin Panel</h2>
            <div className="panel">
                <button onClick={fetchUser} >Fetch user</button>
            </div>
        </>
    )
}

export default AdminPanel;