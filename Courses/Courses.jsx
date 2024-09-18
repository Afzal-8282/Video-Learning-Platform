import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vg from "../../assets/images/download1.jpg"



const Course = ({title, description, creator, views, imgSrc, id, addToPlaylistHandler, lectureCount}) =>{

  return (
    <>
<VStack className='course' alignItems={["center","flex-start"]}>
<Image src={imgSrc} boxSize={"60"} objectFit={'contain'} visibility={'visible'} />
<Heading textAlign={["center","left"]} maxW={"200px"} fontFamily={"sans-serif"} size={'sm'} noOfLines={'3'}>
{title} </Heading>

<Text noOfLines={'2'} children={description} />

<HStack>
<Text fontWeight={'bold'} textTransform={"uppercase"} children={'Creator'} />

<Text fontFamily={'body'} textTransform={"uppercase"} children={creator} />


</HStack>

<HStack>

<Heading textAlign={'center'} size={'xs'} children={'Lectures'} />
<Text textAlign={'center'} children={lectureCount} />
</HStack>

<HStack>
<Heading textAlign={'center'} size={'xs'} children={'views'} />
<Text textAlign={'center'} children={views} />
</HStack>

<Stack direction={['column','row']} alignItems={'center'}>
<Link to={'/coursepage/' + id}>
  <Button color={'green'}>Listen Now</Button>
</Link>
<Button variant={'ghost'} colorScheme='green' onClick={() => addToPlaylistHandler(id)}>Add to playlist</Button>
</Stack> 

</VStack>

</>
  );
}

const Courses = () => {
  
  const [ keyword, setKeyword] = useState("");
  const [ category, setCategory] = useState("");
  
  const addToPlaylistHandler = () => {
    console.log("added to playlist");
  };

  const categories=[ "Geeta", "Upanishads", "Sant-Vani", "Female", "Dar", "Krodh", "Aatma", "Chetana" ]


  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={'8'}>

      <Heading children="All Courses" m={'8'} />
<Input value={keyword}
  onChange={e => setKeyword(e.target.value)}
  placeholder='Search a Course'
  focusBorderColor='green.300'
   type='text'/>

   <HStack overflowX={'auto'} paddingY={'8'}>

    {
      categories.map((item, index)=>(
    <Button key={index} value={category} onClick={()=>setCategory(item)} minW={'60'}>
      <Text children={item} />
    </Button>
      ))
    }

   </HStack>

   <Stack
   direction={["column","row"]}
   flexWrap={'wrap'}
   justifyContent={["flex-start","space-evenly"]}
   alignItems={["center","flex-start"]}
   marginTop={'10'}>


<Course 
   title={"sample"}
   description={'Sample'}
   views={23}
   imageSrc={vg}
   id={"sample"}
   creator={"Sample"}
   lectureCount={2} 
   addToPlaylistHandler={addToPlaylistHandler}
   />


   </Stack>

   
    </Container>
  );
}

export default Courses;
