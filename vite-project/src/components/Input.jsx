import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Input as ChakraInput, Button } from "@chakra-ui/react";
import { addTodo } from "./redux/action_type";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  Textarea
} from "@chakra-ui/react";

const InputComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const todoData = {
      title: title.trim(),
      content: content.trim(),
    
      id: new Date().getMilliseconds() + title,
    };
    dispatch(addTodo(todoData));
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <>
      
      <Box
       
        height="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        // border="1px solid"
        // borderColor="gray.200"
        borderRadius="10px"
        // px="10px"
      >
        <Button colorScheme="teal" width={{ base: "100%", md: "lg" }} borderRadius="10px" onClick={onOpen}>
          Add Notes
        </Button>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <ChakraInput
                ref={initialRef}
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
               
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAdd}>
              Save
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InputComponent;
