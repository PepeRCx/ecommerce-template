import { IconButton } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';

export const MuiLoginIcon = () => {
    return (
        <IconButton sx={{ color: 'white' }}>
            <PersonIcon fontSize="medium"></PersonIcon>
        </IconButton>
    )
}