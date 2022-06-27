// typerscript => javascript + tipagemfixa
//rfce cria a estrutura de um componente

import './Home.css'
import { Paper } from '@material-ui/core';
import { Box, Button } from '@mui/material';


//Grid tem 12 colunas
function Home() {
  return (
    <>
      <Paper>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <h1>Titulo</h1>
          </Box>
          <img src="https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024" alt="" style={{width:"100%", height:"100%"}}/>
          <Box display="flex" justifyContent="center" p={2}>
            <Button variant="contained" color='primary'>Texto 1</Button>
            <Button variant="contained" color='secondary'>Texto 2</Button>
          </Box>
        </Box>
      </Paper>

    </>
  )
}

export default Home

// Sempre é necessário exportar a função
