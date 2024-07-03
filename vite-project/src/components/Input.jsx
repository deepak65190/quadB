import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Input as ChakraInput, Button } from '@chakra-ui/react';
import { addTodo } from './redux/action_type';

const Input = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        const todoData = {
            todo,
            id: new Date().getMilliseconds() + todo,
            isCompleted: false
        };
        dispatch(addTodo(todoData));
        setTodo("")
    };

    return (
        <Box display="flex" alignItems="center">
            <ChakraInput
                type="text"
                placeholder="Enter your task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                mr={2}
            />
            <Button onClick={handleAdd} colorScheme="teal">
                Add
            </Button>
        </Box>
    );
};

export default Input;
