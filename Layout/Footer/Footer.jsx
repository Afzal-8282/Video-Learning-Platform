import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {TiSocialYoutubeCircular, TiSocialInstagramCircular} from 'react-icons/ti';
import {DiGithub} from "react-icons/di";


const Footer = () => {
  return (
    <div>
      <Box padding={'3'} bg={'blackAlpha.900'} minH={'4vh'} marginTop={'20'} >

        <Stack directions={['column','row']}>
            <VStack alignItems={["center","flex-start"]} width={'full'}>
                <Heading fontFamily={"Algebric"} children="All Rights Reserved" color={'white'} />
                <Heading fontFamily={"Algebric"} size={'sm'} children="@Ansari" color={'green.400'} />

            </VStack>

            <HStack spacing={['2','10']} justifyContent={'center'} color={'white'} fontSize={'50'} >
              <a href='https://youtube.com/6packprogrammer' target='blank'>
                  <TiSocialYoutubeCircular  color={'red'} />
              </a>

              <a href='https://instagram.com/ansari.8282' target='blank'>
                  <TiSocialInstagramCircular  color='pink' />
              </a>

              <a href='https://github.com/Afzal-8282' target='blank'>
                  <DiGithub />
              </a>

            </HStack>

        </Stack>

      </Box>
    </div>
  );
}

export default Footer;
