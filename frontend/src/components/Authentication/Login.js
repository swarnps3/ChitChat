import React from 'react'
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
  import { useState } from "react";
const Login = () =>  {
    const [show, setShow] = useState(false);
    {
      /* To implement show/hide feature of password*/
    }
  
    const [email, setEmail] = useState();
    const [password, setPasswod] = useState();
  
    const handleClick = () => setShow(!show);
    const submitHandler=()=>{};
    return (
      <VStack spacing={"5px"}>
       
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
        <Button
       colorScheme="blue"
        width="100%"
        style={{marginTop: 15}}
        onClick={submitHandler}
      >
       Login
       
      </Button>
      <Button
      variant={"solid"}
       colorScheme="red"
        width="100%"
        style={{marginTop: 10}}
        onClick={()=>{
            setEmail("guest123@gmail.com");
            setPasswod("12345678");
        }}
      >
       Guest User
       
      </Button>
     
      </VStack>
    );
  };
export default Login
