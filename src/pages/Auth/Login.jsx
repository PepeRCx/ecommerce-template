import React, {useState} from 'react';
import './login.css'
import { Button, TextField } from '@mui/material';
import supabase from '../../lib/helper/supabaseClient'
import { useNavigate } from 'react-router-dom';
  
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error('Error logging in:', error.message);
        } else {    
            console.log('User logged in:', data);
            navigate('/');
        }
    };

    const goToSignup = () => {
        navigate('/signup')
    }

    return (
        <div className='login-card'>
            <h2>Inicio de Sesión</h2>
            <section className='user-data'>
                <TextField 
                    required 
                    fullWidth 
                    label="Correo Electrónico" 
                    id="fullWidth" 
                    color='black' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <TextField 
                    required 
                    fullWidth 
                    label="Contraseña" 
                    id="fullWidth" 
                    color='black' 
                    sx={{mt: 4}}
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='buttons'>
                    <Button 
                        variant='contained' 
                        sx={{mt: 4, backgroundColor: 'black'}} 
                        size='large'
                        onClick={handleLogin}
                    >Iniciar Sesión
                    </Button>
                    <Button 
                        variant='outlined' 
                        color='black' 
                        sx={{mt: 1}} 
                        size='small'
                        onClick={goToSignup}
                    >Registrarse
                    </Button>
                    <p>__</p>
                </div>
            </section>
        </div>
    );
};

export default Login;