import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {

  const courses = [{
    _id:"fjijfodfje",
    title:"React Course",
    category:"Geeta",
    poster:{
      url:"active"
    },
    createdBy:"afzal",
    views:123,
    numOfVideos:12
  }];

  const {isOpen, onClose, onOpen} = useDisclosure()

  const courseDetailHandler = userId =>{
    onOpen();
  };

  const deleteButtonHandler = userId =>{
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId,lectureId) =>{
    console.log(courseId);
    console.log(lectureId);
  }

  const addLectureHandler = (e, courseId, title, description, video) =>{
    e.preventDefault();

  };

  return (
    <Grid css={{ cursor: 'url(${cursor}),default'}} minH={'100vh'} templateColumns={['1rf','5fr 1fr']}>
    
    <Box p={['0','8']} overflowX={'auto'} >

      <Heading textTransform={'uppercase'} children="All Users" my={'16'} textAlign={['center','left']} />

      <TableContainer w={['100vw','full']} >

        <Table variant={'simple'} size={'lg'}>

          <TableCaption>All available Courses in the database</TableCaption>

          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Poster</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Creator</Th>
              <Th isNumeric>Views</Th>
              <Th isNumeric>Lectures</Th>
              <Th isNumeric>Action</Th>

            </Tr>
          </Thead>

          <Tbody>
            {
              courses.map(item=>(
                <Row courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

      <CourseModal isOpen={isOpen} onClose={onClose}
      id={"dkdfji"} courseTitle="React course"
       deleteButtonHandler={deleteLectureButtonHandler}
      addLectureHandler ={addLectureHandler} />

    </Box>
    <Sidebar />
    </Grid>
  );
}

export default AdminCourses;



function Row({item,courseDetailHandler,deleteButtonHandler}){
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'Uppercase'} >{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      
      <Td isNumeric>

        <HStack justifyContent={"flex-end"} >

          <Button variant={"outline"} color="purple.500" onClick={() => courseDetailHandler(item._id)} >View lectures</Button>

          <Button color={'purple.600'} onClick={() => deleteButtonHandler(item._id)} >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};


