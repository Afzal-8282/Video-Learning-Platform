import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [course,setCourse] = useState("")

  return (
    <Container h={'90vh'} marginTop={'20'}>

        <VStack h="full" justifyContent={'center'} spacing={'16'}>

            <Heading children="Make a Request" fontFamily={'Algebric'} />

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
              <FormLabel htmlFor='course' children={'Write'} />
              <Textarea required id='course' value={course}
             onChange={(e)=>setCourse(e.target.value)} 
             placeholder='About Scrpture...'
             focusBorderColor='green.400' />
            </Box>

           

            <Button my={'4'} colorScheme='green' type='submit'>
                Send
            </Button>

            <Box my={'4'} >
                See available Courses!<Link to="/Courses">
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

export default Request;
