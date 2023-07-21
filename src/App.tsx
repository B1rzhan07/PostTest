import { Box, Stack, TextField } from '@mui/material'
import CustomizedTables from './Components/Table/Customtable'
import { Search } from '@mui/icons-material'
import React from 'react'

function App() {
  const [value, setValue] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box flex={1} p={5}>
      <Stack spacing={2}>
        <TextField
          sx={{
            backgroundColor: '#5A5C66',
            width: '100%',
            maxWidth: '631px',
            marginLeft: '16px',
          }}
          variant="outlined"
          placeholder="Поиск"
          value={value}
          onChange={handleChange}
          fullWidth
          autoFocus
          InputProps={{
            endAdornment: (
              <Search
                style={{ width: '21px', height: '21px', color: '#fff' }}
              />
            ),
          }}
        />
        <CustomizedTables value={value} />
      </Stack>
    </Box>
  )
}

export default App
