import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import { Button, IconButton } from "@mui/material";
import { CloudUploadRounded, EditNoteRounded } from "@mui/icons-material";

function DashboardRow() {

    return (
        <div className="row">
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue='Nombre del producto' slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue='Precio' slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue='Stock' slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <IconButton>
                <EditNoteRounded/>
            </IconButton>
        </div>
    )
}

export default DashboardRow