import styled from 'styled-components'
import { Colors } from '../assets/Colors'



const BottomNavBox = styled.div`
//width: 100vw;
//position: relative;
height: 100%;
width: 100%;
max-width: 700px;
background-color: ${Colors.red};
display: grid;
justify-content: center;
align-items: center;

.pic{
    height: 80%;
    width: 80%;
    background-color: ${Colors.orange};

}
`

const CardComp = () => {
    return (
        <BottomNavBox>

            <div className='pic'>
                ola
            </div>

        </BottomNavBox>
    )
}

export default CardComp