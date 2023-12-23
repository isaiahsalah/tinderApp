import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Settings } from '@mui/icons-material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components'
import { Colors } from '../assets/Colors';
import HistoryPage from '../pages/HistoryPage';
import MatchPage from '../pages/MatchPage';
import SettingPage from '../pages/SettingPage';

const BottomNavBox = styled.div`
//width: 100vw;
//position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
margin: 0;
padding: 0;

.cont{
    max-width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;

}
.nav{
    width: 100%;
    max-width: 700px;
    background-color: ${Colors.white}cc;
    height: 60px;
}
.active{opacity:1;

color: ${Colors.blue}
}
.inactive{opacity:0.5;

color: ${Colors.blue}
}
`
const Pages = [
    <HistoryPage />,
    <MatchPage />,
    <SettingPage />,

]

const BottomNavComponent = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('1');





    return (
        <BottomNavBox >
            <div className='cont'>
                {Pages[Number.parseInt(value)]}
                <BottomNavigation
                    className='nav'
                    value={value}
                    onChange={(_event, newValue) => {
                        //alert(newValue);

                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        className={value === '0' ? 'active' : 'inactive'}

                        style={{ color: Colors.blue }}

                        label="Historial"
                        value="0"
                        icon={<RestoreIcon style={{ fontSize: 30 }} />}
                    />
                    <BottomNavigationAction
                        className={value === '1' ? 'active' : 'inactive'}
                        style={{ color: Colors.blue }}


                        label="Match"
                        value="1"
                        icon={<FavoriteIcon style={{ fontSize: 30 }} />}
                    />
                    <BottomNavigationAction
                        className={value === '2' ? 'active' : 'inactive'}

                        style={{ color: Colors.blue }}

                        label="Ajustes"
                        value="2"
                        icon={<Settings style={{ fontSize: 30 }} />}
                    />
                </BottomNavigation>
            </div>

        </BottomNavBox>

    );
}


export default BottomNavComponent







