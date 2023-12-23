
import BottomNavComponent from './components/BottomNavComponent'
import styled from 'styled-components'


const AppBox = styled.div`
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px rgba(0, 0, 0, 1);

`

function App() {
  //const [count, setCount] = useState(0)
  return (

    <AppBox>
      <BottomNavComponent ></BottomNavComponent>
    </AppBox>


  )
}

export default App
