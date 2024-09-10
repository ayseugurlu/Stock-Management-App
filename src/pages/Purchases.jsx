import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import PurchaseTable from '../components/Tables/Purchasetable'

const Purchases = () => {
  return (
    <Container>
      <Typography variant='h4' component="h1" textAlign="center" color="secondary.main" mb={5}>Purchases</Typography>

      <Button variant='contained' >ADD NEW PURCHASE</Button>

      <Box>
        <PurchaseTable/>
      </Box>
    </Container>
  )
}

export default Purchases