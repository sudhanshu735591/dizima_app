import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
export default function LinearColor() {
  return (
    <Stack sx={{ width: '30%', color: 'grey.500', margin:"auto" , marginTop:"30px"}} spacing={2}>
      <LinearProgress color="secondary" />
    </Stack>
  );
}