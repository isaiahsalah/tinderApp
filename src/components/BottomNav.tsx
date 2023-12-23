import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Settings } from '@mui/icons-material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components'
import { Colors } from '../assets/Colors';

const BottomNavBox = styled.div`
//width: 100vw;
//position: relative;
display: flex;
justify-content: center;
align-items: center;


`


const BottomNav = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('recents');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavBox>
            <BottomNavigation
                sx={{
                    width: 500,
                    color: 'white',
                    height: 60
                }}
                style={{
                    backgroundColor: Colors.white,
                }}
                value={value} onChange={handleChange}>
                <BottomNavigationAction
                    style={{
                        color: Colors.blue,
                    }}
                    label="Historial"
                    value="recents"
                    icon={<RestoreIcon style={{ fontSize: 30 }} />}
                />
                <BottomNavigationAction
                    style={{
                        color: Colors.blue,
                    }}
                    label="Match"
                    value="favorites"
                    icon={<FavoriteIcon style={{ fontSize: 30 }} />}
                />
                <BottomNavigationAction
                    style={{
                        color: Colors.blue,
                    }}
                    label="Ajustes"
                    value="nearby"
                    icon={<Settings style={{ fontSize: 30 }} />}
                />
            </BottomNavigation>
        </BottomNavBox>
    );
}

export default BottomNav


