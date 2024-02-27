import { FormControl, FormLabel, VStack,Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function Signup() {
    const[show,setShow]=useState(false)
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[cpassword,setCpassword]=useState()
    const[pic,setPic]=useState()

    const handleClick = () => setShow(!show);
const postDetails=(pic)=>{}

const submitHandler=()=>{
    
}


return (
<VStack spacing='5px'>
    <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input  placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
    </FormControl>
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input  placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm"  onClick={handleClick}>
                {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
    </FormControl>
    <FormControl id='cpassword' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setCpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
    </FormControl>
    <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        /></FormControl>
<Button
colorScheme='blue'
width='100%'
style={{marginTop:15}}
onClick={submitHandler}
>Sign up</Button>


</VStack>
  )
}

export default Signup