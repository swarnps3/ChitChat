import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  {
    /* To implement show/hide feature of password*/
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasswod] = useState();
  const [cofirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);
  const postDetails=(pic)=>{};
  const submitHandler=()=>{};
  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => {
              setPasswod(e.target.value);
            }}
          />
          <InputRightElement>
            {" "}
            {/*To implement the show/hide feature of password*/}
            <Button
              h={"1.75rem"}
              size="sm"
              backgroundColor={"white"}
              p={"2px"}
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          />
          <InputRightElement>
            {" "}
            {/*To implement the show/hide feature of password*/}
            <Button
              h={"1.75rem"}
              size="sm"
              backgroundColor={"white"}
              p={"2px"}
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e)=> postDetails(e.target.files[0])}
          
        />
      </FormControl>
      <Button
       colorScheme="blue"
        width="100%"
        style={{marginTop: 15}}
        onClick={submitHandler}
      >
        Sign Up
       
      </Button>
    </VStack>
  );
};

export default Signup;
