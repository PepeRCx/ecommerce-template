import React from 'react';
import './login.css'
import { Button, TextField } from '@mui/material';
  
const Login = () => {
    return (
        <div className='login-card'>
            <h2>Inicio de Sesión</h2>
            <section className='user-data'>
                <TextField required fullWidth label="Correo Electrónico" id="fullWidth" color='black' />
                <TextField required fullWidth label="Contraseña" id="fullWidth" color='black' sx={{mt: 4}} />
                <div className='buttons'>
                    <Button variant='contained' sx={{mt: 4, backgroundColor: 'black'}} size='large' >Iniciar Sesión</Button>
                    <Button variant='outlined' color='black' sx={{mt: 1}} size='small' >Registrarse</Button>
                    <p>__</p>
                </div>
            </section>
        </div>
    );
};

export default Login;