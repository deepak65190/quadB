import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useDisclosure,
  useToast,
  Box,
  List as ChakraList,
  ListItem,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { deleteTodo, editTodo, toggleTodo } from "./redux/action_type";

const List = () => {
  const data = useSelector((state) => state.todo);
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [existTodo, setExistTodo] = useState("");
  const [id, setId] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const OpenModal = (el) => {
    onOpen();
    setExistTodo(el.todo);
    setId(el.id);
  };

  const handleEdit = () => {
    dispatch(editTodo({ id, existTodo }));
    toast({
      title: "Todo updated",
      description: "Todo updated successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    toast({
      title: "Todo deleted",
      description: "Todo deleted successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <Box p={4}>
      <ChakraList spacing={3}>
        {data.length > 0 &&
          data.map((el) => (
            <ListItem key={el.id} display="flex" alignItems="center" justifyContent="space-between" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"} borderRadius={"10px"} padding={"10px"}>
              <Text as={el.isComplted ? "s" : undefined}>{el.todo}</Text>
              <Box>
                <Button size="sm" onClick={() => handleToggle(el.id)} mr={2}>
                  {el.isComplted ? "Completed" : "Not Completed"}
                </Button>
                <IconButton
                  aria-label="Edit Todo"
                  icon={<EditIcon />}
                  size="sm"
                  onClick={() => OpenModal(el)}
                  mr={2}
                />
                <IconButton
                  aria-label="Delete Todo"
                  icon={<DeleteIcon />}
                  size="sm"
                  onClick={() => handleDelete(el.id)}
                />
              </Box>
            </ListItem>
          ))}
      </ChakraList>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Edit todo"
                value={existTodo}
                onChange={(e) => setExistTodo(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleEdit}>
              Submit
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default List;
