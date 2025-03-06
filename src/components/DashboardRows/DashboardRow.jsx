import React, { useState } from "react";
import './dashboard-row.css'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, IconButton } from "@mui/material";
import { CloudUploadRounded } from "@mui/icons-material";

function DashboardRow({userEmail, userRole}) {
    const [role, setRole] = useState(userRole ? "Administrador" : "Usuario");

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="row">
            <div className="fst-container">
                <TextField 
                    id="outlined-read-only-input"
                    hiddenLabel
                    defaultValue={userEmail}
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                    fullWidth
                    variant="filled"
                    size="small"
                />
            </div>
            <div className="snd-container">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                            id="demo-simple-select"
                            value={role}
                            hiddenLabel
                            onChange={handleChange}
                            variant="filled"
                            size="small"
                        >
                            <MenuItem value="Usuario">Usuario</MenuItem>
                            <MenuItem value="Administrador">Administrador</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="trd-container">
                <IconButton>
                    <CloudUploadRounded/>
                </IconButton>
            </div>
        </div>
    )
}

export default DashboardRow