import React, {useState} from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';


const UpdateProfile = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
  return (
    <Container py={'16'} minH={'90vh'}>
        <form>
            <Heading textTransform={'uppercase'} fontFamily={'Algebric'} children="Update Profile" my={'16'} textAlign={['center','left']} />
            <VStack spacing={'8'}>

            <Input 
            required id='password' value={name}
             onChange={(e)=>setName(e.target.value)} 
             placeholder='name'
             type='text'
             focusBorderColor='green.400'
              />

            <Input 
            required id='password' value={email}
             onChange={(e)=>setEmail(e.target.value)} 
             placeholder='Email'
             type='email'
             focusBorderColor='green.400'
              />

              <Button w={'full'} colorScheme='green' type='submit' >Update</Button>
            </VStack>
        </form>
    </Container>
  );
}

export default UpdateProfile;
