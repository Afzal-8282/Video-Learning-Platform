import { Avatar, Button, Container, Heading, Stack, Text, VStack, HStack, Box } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import {RiSecurePaymentFill} from 'react-icons/ri';




const About = () => {

    const Founder= () =>(
        <Stack direction={['column','row']} spacing={['4','16']} padding={'8'} >

            <VStack>
                <Avatar src='geeta.jpg' boxSize={['40','48']} />
                <Text children="Co-Founder" opacity={0.7} />
            </VStack>

            <VStack justifyContent={'center'} alignItems={['center','flex-start']} >
                <Heading children="Afzal Ansari" size={["md","xl"]} />
                <Text textAlign={['center','left']} children={'Hi, I am Final Year Student of KES Shroff College studying in Bachelor of Science in Information Technology. Our mission is to provide you Scripture Wisdom in Audio Form.'} />
                
                
            </VStack>

        </Stack>
    )

    const TandC = ({termsAndCondition}) => (
    <Box>
        <Heading size={'md'} children="Terms & Condition" textAlign={['center','left']} my={'4'} fontFamily={'Algebra'} />

        <Box h={'sm'} p={'4'}>
            <Text fontFamily={'Algebric'} letterSpacing={'widest'} textAlign={['center','left']} >{termsAndCondition}</Text>
            <Heading my={'4'} size={"xs"} children="Refund only applicable for cancellation within 7 days.
            " />
        </Box>
    </Box>
    )

  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>

        <Heading children="About Us"  textAlign={["center","left"]} fontFamily={'Algebric'} />
        <Founder />
        <Stack m={'8'} direction={['column','row']} alignItems={'center'} >
            <Text fontFamily={'cursive'} m={'8'} fontSize={'large'} textAlign={['center','left']} >It is an Audio Streaming Platform which absolutely free for users.</Text>
            <Link to={"/Subscribe"}>
                <Button variant={'ghost'} colorScheme='green'>
                    CheckOut our Plan
                </Button>
            </Link>    
        </Stack>

        <TandC termsAndCondition={'termsAndCondition'} />

        <HStack my={'4'} padding={'4'} >
            <RiSecurePaymentFill />
            <Heading size={'xs'} textTransform={'uppercase'} fontFamily={'sans-serif'} children="Payment is Secure by Razorpay" />
        </HStack>

    </Container>
  );
}

export default About;
