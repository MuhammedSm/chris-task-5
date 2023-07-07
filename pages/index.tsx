import { Alert, Container, Snackbar } from '@mui/material'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] =useState(false);
 return(
   <Container maxWidth="sm">
    <TodoForm/> 
   
    <TodoList/>
   </Container>

  )
}
