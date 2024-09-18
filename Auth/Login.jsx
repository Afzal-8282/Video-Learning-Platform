import { FormLabel, Heading, Input, VStack, Container, Box, Button } from '@chakra-ui/react';
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

  return (
   <Container h={'90vh'}>
    <VStack h={'full'} justifyContent={'center'} spacing={'10'}>

        <Heading children={'Welcome to Login'} fontFamily={'Algebric'} />

        <form style={{width:'100%'}}>
            <Box my={'4'}>
              <FormLabel htmlFor='email' children={'Email Address'} />
              <Input required id='email' value={email}
             onChange={(e)=>setEmail(e.target.value)} 
             placeholder='abc@gmail.com'
             type='email'
             focusBorderColor='green.400' />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='password' children={'Password'} />
              <Input required id='password' value={password}
             onChange={(e)=>setPassword(e.target.value)} 
             placeholder='Enter Your Password'
             type='password'
             focusBorderColor='green.400' />
            </Box>

            <Box>

                <Link to="/forgetpassword" ><Button fontSize={'sm'} variant={'link'}>Forget Password?</Button></Link>
            </Box>

            <Button my={'4'} colorScheme='green' type='submit'>
                Login
            </Button>

            <Box my={'4'} >
                New User? <Link to="/register">
                    <Button colorScheme='green' variant={'link'} >
                        Sign Up
                        </Button> {''}
                        
                        </Link>
                        here
            </Box>

        </form>
        
    </VStack>
   </Container>
  );
}

export default Login;
