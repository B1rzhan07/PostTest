import React from 'react'
import TextField from '@mui/material/TextField'
import { Search } from '@mui/icons-material'

interface CustomTextFieldProps {
  placeholder: string
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ placeholder }) => {
  return (
    <TextField
      sx={{
        backgroundColor: '#5A5C66',
        color: '#B2B7BF',
        width: '631px',
      }}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      InputProps={{
        endAdornment: (
          <Search style={{ width: '21px', height: '21px', color: '#fff' }} />
        ),
      }}
    />
  )
}

export default CustomTextField
