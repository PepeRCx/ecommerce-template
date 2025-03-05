import { IconButton } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';

export const MuiLoginIcon = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    return (
        <IconButton 
            sx={{ color: 'white' }} 
            onClick={handleClick}
        >
            <PersonIcon fontSize="medium"></PersonIcon>
        </IconButton>
    )
}