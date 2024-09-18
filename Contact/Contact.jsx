import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [message,setMessage] = useState("")

  return (
    <Container h={'90vh'} marginTop={'20'}>

        <VStack h="full" justifyContent={'center'} spacing={'16'}>

            <Heading children="Contact Us" fontFamily={'Algebric'} />

            <form style={{width:'100%'}}>
            <Box my={'4'}>
              <FormLabel htmlFor='name' children={'Name'} />
              <Input required id='name' value={name}
             onChange={(e)=>setName(e.target.value)} 
             placeholder='abc'
             type='text'
             focusBorderColor='green.400' />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='email' children={'Email Address'} />
              <Input required id='email' value={email}
             onChange={(e)=>setEmail(e.target.value)} 
             placeholder='abc@gmail.com'
             type='email'
             focusBorderColor='green.400' />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='message' children={'Message'} />
              <Textarea required id='message' value={message}
             onChange={(e)=>setMessage(e.target.value)} 
             placeholder='Your Query...'
             focusBorderColor='green.400' />
            </Box>

           

            <Button my={'4'} colorScheme='green' type='submit'>
                Send
            </Button>

            <Box my={'4'} >
                Request for any Scripture? <Link to="/request">
                    <Button colorScheme='green' variant={'link'} >
                        Click 
                        </Button> {''}
                        
                        </Link>
                        here
            </Box>

        </form>

        </VStack>

    </Container>
  );
}

export default Contact;
