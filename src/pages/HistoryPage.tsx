import styled from "styled-components"
import { Colors } from "../assets/Colors"

const HistoryPage = () => {

    const HistoryBox = styled.div`
//width: 100vw;
//position: relative;
height: 100%;
width: 100vw;

max-width: 700px;
background-color: ${Colors.white}80;
display: flex;
justify-content: center;
align-items: center;

`
    return (
        <HistoryBox>HistoryPage</HistoryBox>
    )
}

export default HistoryPage