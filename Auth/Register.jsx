import { FormLabel, Heading, Input, VStack, Container, Box, Button, Avatar } from '@chakra-ui/react';
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
    cursor:"pointer", 
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#99EDC5",
    backgroundColor:"white",
};

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss
}

const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [imagePrev,setImagePrev] = useState("")
    const [image,setImage] = useState("")


    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    }

  return (
   <Container >
    <VStack h={'full'} justifyContent={'center'} spacing={'16'}>

        <Heading children={'Register Yourself'} size={'xl'} fontFamily={'Algebric'} marginTop={'20'} />

        <form style={{width:'100%'}}>

            <Box display={'flex'} justifyContent={'center'}  >
                <Avatar src={imagePrev} size={'2xl'} />
            </Box>

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
              <FormLabel htmlFor='password' children={'Password'} />
              <Input required id='password' value={password}
             onChange={(e)=>setPassword(e.target.value)} 
             placeholder='Enter Your Password'
             type='password'
             focusBorderColor='green.400' />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='chooseavatar' children={'Choose Avatar'} />
              <Input 
              accept='image/*'
              required 
              id='chooseavatar'
             type='file'
             focusBorderColor='green.400'
              css ={fileUploadStyle}
              onChange={changeImageHandler}
             />
            </Box>

            <Button my={'4'} colorScheme='green' type='submit'>
                Register
            </Button>

            <Box my={'4'} >
                Already Sign Up? <Link to="/login">
                    <Button colorScheme='green' variant={'link'} >
                        Login
                        </Button> {''}
                        
                        </Link>
                        here
            </Box>

        </form>
        
    </VStack>
   </Container>
  );
}

export default Register;
