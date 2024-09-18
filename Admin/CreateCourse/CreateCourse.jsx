import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import { useState } from 'react';
import { fileUploadCss } from '../../Auth/Register';

const CreateCourse = () => {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [createdBy,setCreatedBy] = useState("")
  const [category,setCategory] = useState("")
  const [image,setImage] = useState("")
  const [imagePrev,setImagePrev] = useState("")

  const categories = [
    "Geeta", "Upanishads", "Sant-Vani", "Female", "Dar", "Krodh", "Aatma", "Chetana"
  ]

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
    };
};

  return (
    <Grid css={{ cursor: 'url(${cursor}),default'}} minH={'100vh'} templateColumns={['1rf','5fr 1fr']}>

      <Container py={'16'} >
        <Heading textTransform={'uppercase'} children="Create Course" my={'16'} textAlign={['center','left']} />

        <form>
        

        <VStack m={'auto'} spacing={'8'} >

        <Input 
            required  value={title}
             onChange={(e)=>setTitle(e.target.value)} 
             placeholder='Title'
             type='text'
             focusBorderColor='purple.400'
              />{' '}

        <Input 
            required value={description}
             onChange={(e)=>setDescription(e.target.value)} 
             placeholder='Description'
             type='text'
             focusBorderColor='purple.400'
              />{' '}

        <Input 
            required value={createdBy}
             onChange={(e)=>setCreatedBy(e.target.value)} 
             placeholder='Creator Name'
             type='text'
             focusBorderColor='purple.400'
              />

              <Select focusBorderColor='purple.400' value={category} onChange={e => setCategory(e.target.value)}  >
                
                <option value="" >Category</option>

                {categories.map(item=>(
                 <option key={item} value={item}>
                  {item}
                  </option>
                ))}
              </Select>

              <Input 
              accept='image/*'
              required 
              id='chooseavatar'
             type='file'
             focusBorderColor='purple.400'
              css ={{
                "&::file-selector-button" : {
                  ...fileUploadCss, 
                  color:'purple',
                }
              }}
              onChange={changeImageHandler}
             />

             {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
             )}

             <Button w={'full'} colorScheme={'purple'} type='submit'>Create</Button>
        </VStack>


        </form>
      </Container>

      <Sidebar />

    </Grid>
  );
}

export default CreateCourse;
