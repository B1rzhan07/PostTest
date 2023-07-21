import { Table, TableBody, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { StyledTableCell, StyledTableRow } from './styles'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { IPost } from '../../services/Post'

interface TableHelperProps {
  filteredData: IPost[]
  sortOrder: 'asc' | 'desc' | ''
  sortingColumn: 'id' | 'title' | 'body'
  handleChangeSortOrder: (column: 'id' | 'title' | 'body') => void
  isMobile: boolean
}

const TableHelper: React.FC<TableHelperProps> = ({
  filteredData,
  sortOrder,
  sortingColumn,
  handleChangeSortOrder,
  isMobile,
}) => {
  console.log(sortOrder, sortingColumn)

  return (
    <Table sx={{ minWidth: 300 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: isMobile ? '10px' : '40px',
                alignItems: 'center',
              }}
            >
              <span>ID</span>
              <ArrowDropDownIcon
                onClick={() => handleChangeSortOrder('id')}
                style={{
                  cursor: 'pointer',
                  transform:
                    sortOrder === 'asc' && sortingColumn === 'id'
                      ? 'rotate(180deg)'
                      : '',
                }}
              />
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: isMobile ? '10px' : '40px',
                alignItems: 'center',
              }}
            >
              Заголовок{' '}
              <ArrowDropDownIcon
                onClick={() => handleChangeSortOrder('title')}
                style={{
                  cursor: 'pointer',
                  transform:
                    sortOrder === 'asc' && sortingColumn === 'title'
                      ? 'rotate(180deg)'
                      : '',
                }}
              />
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: isMobile ? '10px' : '40px',
                alignItems: 'center',
              }}
            >
              Описание{' '}
              <ArrowDropDownIcon
                onClick={() => handleChangeSortOrder('body')}
                style={{
                  cursor: 'pointer',
                  transform:
                    sortOrder === 'asc' && sortingColumn === 'body'
                      ? 'rotate(180deg)'
                      : '',
                }}
              />
            </div>
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredData.map((row: IPost) => (
          <StyledTableRow key={row.id}>
            <StyledTableCell
              sx={{
                textAlign: 'center',
              }}
              component="th"
              scope="row"
            >
              {row.id}
            </StyledTableCell>
            <StyledTableCell>{row.title}</StyledTableCell>
            <StyledTableCell>{row.body}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableHelper
