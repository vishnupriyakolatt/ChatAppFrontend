import React from 'react'
import {Container,Box,Text, Tabs, TabList, Tab, TabPanels, TabPanel}from '@chakra-ui/react'
import Login from '../Components/Authentication/Login'
import Signup from '../Components/Authentication/Signup'

function HomePage() {
  return (
<Container maxW='xl' centerContent>
<Box d='flex' justifyContent='center' p={3} bg={'white'} w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
  <img src='https://as2.ftcdn.net/v2/jpg/05/65/73/67/1000_F_565736797_NmWngSGrUaK8ZD5R3XPiJU7ovgTfIjt6.jpg' align='left' p={3} alignItems="center" width="200" height="20" alt="Image" />
  <Text fontSize='6xl' fontFamily='ork sans' m='35'align='center'>Live Talkie</Text>
</Box>

<Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='1px'>
<Tabs variant='soft-rounded'>
  <TabList mb='1rem'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
<Login/>
    </TabPanel>
    <TabPanel>
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>


</Container>
  )
}

export default HomePage