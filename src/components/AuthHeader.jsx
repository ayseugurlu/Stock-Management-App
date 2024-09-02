import { Grid, Typography } from '@mui/material'
import React from 'react'

const AuthHeader = () => {
  return (
    <Grid item xs={12} mb={3}>
        <Typography variant='h3' color="primary.main" align='center'>
            Stock Management App
        </Typography>
    </Grid>
  )
}

export default AuthHeader