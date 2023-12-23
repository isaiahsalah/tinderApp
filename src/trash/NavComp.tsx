import styled from 'styled-components'
import { Colors } from '../assets/Colors'


const NavCompBox = styled.div`
//width: 100vw;
//position: relative;
max-height: 50px;
height: 100%;
width: 100%;
max-width: 500px;
background-color: ${Colors.green};
display: flex;
justify-content: center;
align-items: center;
button{
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
align-items: center;
}
`

const NavComp = () => {
    return (
        <NavCompBox>
            <button>
                { }
            </button>
            <button>opt2</button>
            <button>opt3</button>
        </NavCompBox>
    )
}

export default NavComp