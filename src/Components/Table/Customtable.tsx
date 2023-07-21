import {
  CircularProgress,
  Paper,
  TableContainer,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import useCustomizedTables from '../../hooks/UseTable'
import TableHelper from './TableHelper'
import PagginationComponent from '../PagginationComponent'

interface CustomizedTablesProps {
  value: string
}

const CustomizedTables: React.FC<CustomizedTablesProps> = ({ value }) => {
  const {
    filteredData,
    currentPage,
    totalPages,
    sortOrder,
    sortingColumn,
    handleChangePage,
    handleChangeSortOrder,
    isLoading,
  } = useCustomizedTables(value)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      {isLoading ? (
        <CircularProgress
          size={40}
          color="secondary"
          sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
          }}
        />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <TableHelper
                filteredData={filteredData}
                sortOrder={sortOrder}
                sortingColumn={sortingColumn}
                handleChangeSortOrder={handleChangeSortOrder}
                isMobile={isMobile}
              />
            </TableContainer>
          </Grid>

          {filteredData.length > 0 && (
            <PagginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              handleChangePage={handleChangePage}
              isMobile={isMobile}
            />
          )}
        </Grid>
      )}
    </>
  )
}

export default CustomizedTables
