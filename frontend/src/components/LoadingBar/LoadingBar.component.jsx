import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

function LoadingBar() {
  return (
    <Box sx={{ width: '100%' }} className='position-fixed z-1'>
      <LinearProgress />
    </Box>
  )
}

export default LoadingBar