import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {

  const users = [{
    _id:"fjijfodfje",
    name:"Afzal",
    role:"admin",
    Subscription:{
      status:"active"
    },
    email:"a@gmail.com"
  }];

  const updateHandler = userId =>{
    console.log(userId);
  };

  const deleteButtonHandler = userId =>{
    console.log(userId);
  };


  return (
    <Grid css={{ cursor: 'url(${cursor}),default'}} minH={'100vh'} templateColumns={['1rf','5fr 1fr']}>
    
    <Box p={['0','16']} overflowX={'auto'} >

      <Heading textTransform={'uppercase'} children="All Users" my={'16'} textAlign={['center','left']} />

      <TableContainer w={['100vw','full']} >

        <Table variant={'simple'} size={'lg'}>

          <TableCaption>All available users in the database</TableCaption>

          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Suscription</Th>
              <Th isNumeric>Action</Th>

            </Tr>
          </Thead>

          <Tbody>
            {
              users.map(item=>(
                <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

    </Box>
    <Sidebar />
    </Grid>
  );
}

export default Users;

function Row({item,updateHandler,deleteButtonHandler}){
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.Subscription.status==="active"?"Active":"Not Active"}</Td>
      <Td isNumeric>

        <HStack justifyContent={"flex-end"} >

          <Button variant={"outline"} color="purple.500" onClick={() => updateHandler(item._id)} >Change Role</Button>

          <Button color={'purple.600'} onClick={() => deleteButtonHandler(item._id)} >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};