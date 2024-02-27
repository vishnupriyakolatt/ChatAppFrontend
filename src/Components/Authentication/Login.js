import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

function Login() {
    const[show,setShow]=useState(false)
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
  
    const submitHandler=()=>{
    
    }
    
    const handleClick = () => setShow(!show);
  return (
<VStack spacing='5px'>
    
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input  placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm"  onClick={handleClick}>
                {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
    </FormControl>
    <Button
colorScheme='blue'
width='100%'
style={{marginTop:15}}
onClick={submitHandler}
>Sign up</Button>
<Button
variant='solid'
colorScheme='red'
width='100%'
style={{marginTop:15}}
onClick={()=>{
    setEmail('guest@email.com');
    setPassword("12345");
}}
>Get user Credentials</Button>
</VStack>
  )
}

export default Login