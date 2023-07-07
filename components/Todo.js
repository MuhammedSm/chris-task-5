import { TableCell, TableContainer, Table, TableBody, TableRow, Paper, IconButton } from '@mui/material';
import moment from 'moment/moment';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '@/firebase';
import { deleteDoc, doc } from 'firebase/firestore';

const Todo = ({ id, timestamp, title, detail }) => {
  const handleDelete = async () => {
    try {
      const todoRef = doc(db, `todos/${id}`);
      console.log('Deleting todo with ID:', id);
      await deleteDoc(todoRef);
      console.log('Todo deleted successfully.');
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#f2f2f2', marginBottom: '20px' }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <strong>Title:</strong> {title}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <strong>Time stamp:</strong> {moment(timestamp).format('MMMM Do, YYYY')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <strong>Detail:</strong> {detail}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Todo;
