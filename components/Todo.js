import { TableCell, TableContainer, Table, TableBody, TableRow, Paper, IconButton } from '@mui/material';
import moment from 'moment/moment';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { db } from '@/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';


const Todo = ({ id, timestamp, title, detail }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetail, setEditedDetail] = useState(detail);

  const handleDelete = async () => {
    try {
      const todoRef = doc(db, `todos/${id}`);
      await deleteDoc(todoRef);
      console.log('Todo deleted successfully.');
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const todoRef = doc(db, `todos/${id}`);
      await updateDoc(todoRef, {
        title: editedTitle,
        detail: editedDetail
      });
      console.log('Todo updated successfully.');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(title);
    setEditedDetail(detail);
  };

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#f2f2f2', marginBottom: '20px' }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <strong>Title:</strong> {isEditing ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              ) : (
                title
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <strong>Time stamp:</strong> {moment(timestamp).format('MMMM Do, YYYY')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <strong>Detail:</strong> {isEditing ? (
                <textarea
                  value={editedDetail}
                  onChange={(e) => setEditedDetail(e.target.value)}
                />
              ) : (
                detail
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              {isEditing ? (
                <>
                  <IconButton onClick={handleSave}>
                    <CheckIcon />
                  </IconButton>
                  <IconButton onClick={handleCancel}>
                    <CancelIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton onClick={handleEdit}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Todo;
