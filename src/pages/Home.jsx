
import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
   <Container>
   <Typography variant='h4' align='center' color="primary.main">Dashboard</Typography>
      <Grid container spacing={4} marginTop={2}>
        <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Card sx={{width:"300px",padding:"1rem", borderRadius:"1rem", borderTop:"5px solid skyblue"}} >
        <Typography variant='h5' align='center'>€ 8565867435</Typography>
        <Typography variant='body2' color="primary.second">Sales</Typography>
        </Card>
        </Grid>

        <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Card sx={{width:"300px",padding:"1rem", borderRadius:"1rem", borderTop:"5px solid seagreen"}}>
            <Typography variant='h5' align='center'>€ 1241235</Typography>
            <Typography variant='body2' color="primary.second">Cash</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>

        <Card sx={{width:"300px",padding:"1rem", borderRadius:"1rem", borderTop:"5px solid tomato"}}>
        <Typography variant='h5' align='center' >€ 1241235</Typography>
        <Typography variant='body2' color="primary.second">Purchases</Typography>
        </Card>
        </Grid>

      </Grid>

      <Grid>

      </Grid>
   </Container>
  )
}

export default Home