import axios from 'axios';
import { useEffect } from 'react'
import CardComponent from '../components/CardComponent';
import styled from 'styled-components';
import { Colors } from '../assets/Colors';


const MatchBox = styled.div`
//width: 100vw;
//position: relative;
height: 100%;
width: 100%;
max-width: 700px;
background-color: ${Colors.white}80;
display: flex;
justify-content: center;
align-items: center;

`
const MatchPage = () => {

    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
            .then(response => {
                // Manejar la respuesta de la API
                console.log(response.data);
            })
            .catch(error => {
                // Manejar errores
                console.error('Error al obtener datos de la API:', error);
            });
    }, [])

    return (
        <MatchBox>
            <CardComponent></CardComponent>
        </MatchBox>
    )
}

export default MatchPage

