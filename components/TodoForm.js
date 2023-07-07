import { db } from '@/firebase';
import { Box, Button, Container, TextField } from '@mui/material';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const collectionRef = collection(db, 'todos');
    const docRef = await addDoc(collectionRef, {
      ...data,
      timestamp: serverTimestamp()
    });
    alert('Todo is added successfully');
    reset();
  };

  return (
    <Box
      sx={{
        backgroundColor: '#e8f2f7',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        marginTop: '20px',
      }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Title"
            margin="normal"
            {...register('title')}
          />
          <TextField
            fullWidth
            label="Detail"
            multiline
            maxRows={4}
            {...register('detail')}
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Add new todo
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default TodoForm;
