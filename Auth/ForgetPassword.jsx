import { Container, Heading, VStack, Box, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {

  const [email,setEmail] = useState("")

  return (
    <Container py={'16'} h="90vh">
      <form>

        <Heading children="Forget Password" fontFamily={'Algebric'} my="16" textAlign={['center','left']} />

        <VStack spacing={'4'} >

        <Box my={'4'} w={'full'}>
              <Input required value={email}
             onChange={(e)=>setEmail(e.target.value)} 
             placeholder='abc@gmail.com'
             type='email'
             focusBorderColor='green.400' />
            </Box>

            <Button type="submit" w={"full"} colorScheme='green'>Send Reset Link</Button>

        </VStack>


      </form>
    </Container>
  );
}

export default ForgetPassword;
