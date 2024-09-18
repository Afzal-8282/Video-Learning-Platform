import { Container, Heading, VStack, Box, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {

  const [password,setPassword] = useState("")

  const params = useParams();

  console.log(params.token);

  return (
    <Container py={'16'} h="90vh">
      <form>

        <Heading children="Reset Password" fontFamily={'Algebric'} my="16" textAlign={['center','left']} />

        <VStack spacing={'4'} >

        <Box my={'4'} w={'full'}>
              <Input required 
              value={password}
             onChange={(e)=>setPassword(e.target.value)} 
             placeholder='New Password'
             type='password'
             focusBorderColor='green.400' />
            </Box>

            <Button type="submit" w={"full"} colorScheme='green'>Change Password</Button>

        </VStack>


      </form>
    </Container>
  );
}

export default ResetPassword;
