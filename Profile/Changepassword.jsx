import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, {useState} from 'react';

const Changepassword = () => {

    const [oldpassword,setOldPassword] = useState("")
    const [newpassword,setNewPassword] = useState("")
  return (
    <Container py={'16'} minH={'90vh'}>
        <form>
            <Heading textTransform={'uppercase'} fontFamily={'Algebric'} children="Change Password" my={'16'} textAlign={['center','left']} />
            <VStack spacing={'8'}>

            <Input 
            required id='password' value={oldpassword}
             onChange={(e)=>setNewPassword(e.target.value)} 
             placeholder='Old Password'
             type='password'
             focusBorderColor='green.400'
              />

            <Input 
            required id='password' value={newpassword}
             onChange={(e)=>setOldPassword(e.target.value)} 
             placeholder='New Password'
             type='password'
             focusBorderColor='green.400'
              />

              <Button w={'full'} colorScheme='green' type='submit' >Change</Button>
            </VStack>
        </form>
    </Container>
  );
}

export default Changepassword;
