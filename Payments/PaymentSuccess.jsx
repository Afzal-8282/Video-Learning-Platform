import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import {RiCheckboxCircleFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'} p={'16'}>
        <Heading my={'8'} textAlign={'center'} children="You have Pro Pack" />
        <VStack boxShadow={'lg'} pb={'16'} alignItems={'center'} borderRadius={'lg'}>
            <Box w={'full'} bg={'green.300'} p={'4'} css={{ borderRadius: '8px 8px 0 0'}} >
                <Text color={'black'}>Payment Success</Text>
            </Box>

            <Box p={'4'}>

                <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
                    <Text>
                        Congratulations you're pro member. You have access to premium Content.
                    </Text>
                    <Heading size={'4xl'} color={'green.400'}>
                        <RiCheckboxCircleFill />
                    </Heading>
                    
                </VStack>

            </Box>

            <Link to='/profile'>
            <Button variant={'ghost'} color={'green.400'}>Go to Profile</Button>
            </Link>

            <Heading size={'xs'}>
                Reference: 
            </Heading>

        </VStack>
    </Container>
  );
}

export default PaymentSuccess;
