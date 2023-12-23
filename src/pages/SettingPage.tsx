import styled from "styled-components"
import { Colors } from "../assets/Colors"
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AbcRounded } from '@mui/icons-material';

const SettingBox = styled.div`
//width: 100vw;
//position: relative;
height: 100%;
width: 100vw;
max-width: 700px;
background-color: ${Colors.white}80;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ListOptions = [
    {
        title: "Perfil",
        link: "/",
        icon: AbcRounded
    },
    {
        title: "Preferencias",
        link: "/",
        icon: AbcRounded
    },
    {
        title: "Ayuda",
        link: "/",
        icon: AbcRounded
    },
    {
        title: "Cerrar Sesión",
        link: "/",
        icon: AbcRounded
    }
]
const SettingPage = () => {





    return (
        <SettingBox>
            {
                ListOptions.map(item =>
                    <ListItem
                        style={{ maxWidth: 600 }}
                    >

                        <ListItemButton
                            style={{ backgroundColor: Colors.white, borderRadius: 8 }}>
                            <ListItemIcon>
                                <item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>)

            }

        </SettingBox>
    )
}

export default SettingPage