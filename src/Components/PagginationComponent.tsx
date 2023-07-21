import { Button, Grid, Pagination } from '@mui/material'
import React from 'react'

interface PagginationComponentProps {
  currentPage: number
  totalPages: number
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void
  isMobile: boolean
}
const PagginationComponent: React.FC<PagginationComponentProps> = ({
  currentPage,
  totalPages,
  handleChangePage,
  isMobile,
}) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        spacing={2}
        direction={isMobile ? 'column' : 'row'}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Button
            onClick={() => {
              handleChangePage(
                (null as unknown) as React.ChangeEvent<unknown>,
                currentPage - 1,
              )
            }}
            disabled={currentPage === 1}
          >
            назад
          </Button>
        </Grid>
        <Grid item>
          <Pagination
            hidePrevButton
            hideNextButton
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              handleChangePage(
                (null as unknown) as React.ChangeEvent<unknown>,
                currentPage + 1,
              )
            }}
            disabled={currentPage === totalPages}
          >
            вперед
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PagginationComponent
