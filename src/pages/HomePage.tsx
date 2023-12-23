import React from 'react'
import styled from 'styled-components'
import BottomNav from '../components/BottomNav'
import TinderCard from '../components/CardComponent'

const HomePageBox = styled.div`
width: 100vw;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const HomePage = () => {
    return (
        <HomePageBox>
            <TinderCard></TinderCard>
            <BottomNav></BottomNav>
        </HomePageBox>
    )
}

export default HomePage