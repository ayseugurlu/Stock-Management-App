import { Grid, Typography } from '@mui/material'
import React from 'react'

const AuthHeader = () => {
  return (
    <Grid item xs={12} mt={10} mb={5}>
        <Typography variant='h3' color="gray" align='center'>
            Stock Management App
        </Typography>
    </Grid>
  )
}

export default AuthHeader