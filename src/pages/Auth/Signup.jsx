import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import supabase from '../../lib/helper/supabaseClient'
import './login.css'
  
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, confirmSetPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            alert("La contraseña no coincide")
        } else {
            const { data, error } = await supabase.auth.signUp({email, password});

            if (error) {
                alert('Error logging in:', error.message);
            } else {
                navigate('/');
            }
        }
    };

    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div className='login-card'>
            <h2>Registro</h2>
            <section className='user-data'>
                <TextField 
                required 
                fullWidth 
                label="Correo Electrónico"
                color='black' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <TextField 
                    required 
                    fullWidth 
                    label="Contraseña" 
                    color='black' 
                    sx={{mt: 4}}
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField 
                    required 
                    fullWidth 
                    label="Confirmar Contraseña" 
                    color='black' 
                    sx={{mt: 4}}
                    type='password' 
                    value={confirmPassword}
                    onChange={(e) => confirmSetPassword(e.target.value)}
                />
                <div className='buttons'>
                    <Button 
                        variant='contained' 
                        sx={{mt: 4, backgroundColor: 'black'}} 
                        size='large'
                        onClick={handleSignup}
                    >Registrarse
                    </Button>
                    <Button 
                        variant='outlined' 
                        color='black' 
                        sx={{mt: 1}} 
                        size='small'
                        onClick={goToLogin}
                    >Iniciar Sesión
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Signup;