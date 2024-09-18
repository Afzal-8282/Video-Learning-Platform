import React from 'react'
import {Heading, Stack, VStack, Text, Button, Image, Box, HStack} from '@chakra-ui/react'
import "./home.css"
import vg from "../../assets/images/Geet.jpg"
import {CgGoogle, CgYoutube, CgInstagram} from "react-icons/cg"; 
import { Link } from "react-router-dom";

const Home = () => {

  return( 
  
  <section className='home'>

  <div className="container">
    <Stack
    display={"flex"}
    flexDirection={["column","row"]}
    height="100%"
    justifyContent={["center","flex-end"]}
    align-items={["center","left"]}
    spacing={['16','56']}
    >

        <VStack id='s1' width={"full"} alignItems={"center"} spacing={'6'} >

            <Heading children="Platform" textAlign={['center','left']} size={'2xl'}></Heading>
            <Text
            fontFamily={'cursive'}
            textAlign={['center','left']}  
            children="Have A Research Of This Platform."/>
            <Link to="/courses">
            <Button size={"md"} colorScheme="green">
              Explore Now
            </Button>


            </Link>
          </VStack>
           <Image className="graphics" boxSize={'md'} src={vg} id='s2' objectFit="contain"/>
    
    </Stack>
  </div>

     <Box  padding={"8"} bg="green.600"  >
        <Heading textAlign={"center"} fontFamily={'sans'} color={"black.800"} size={'md'} children="Follow Us" />
        <HStack className="Tofollow" justifyContent={"space-evenly"} marginTop='8'>
          <CgGoogle />
          <CgYoutube />
          <CgInstagram />
        </HStack>
     </Box>

  </section>
  );
  }

export default Home 