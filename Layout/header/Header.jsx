import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
 
const LinkButton = ({ url = '/', title = 'Home', onClose}) => (
  <Link onClick={onClose} to={url}> 
     <Button variant={'ghost'}>{title}</Button>
  </Link>
 );

const Header = () => {

  const {isOpen, onClose, onOpen} = useDisclosure()
  
  const isAuthenticated = true;
  
  const user = {
    role:'admin',
  }

  const logoutHandler = () =>{
    console.log("Logout");
    onClose();
  }


  return (
    <>
    
    <ColorModeSwitcher />

    <Button onClick={onOpen} colorScheme='green' width={'12'} height={'12'} rounded={'full'} position={'fixed'} top={'6'} left={'6'}>
        <RiMenu5Fill />
    </Button>

    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay  /> 

        <DrawerContent>

            <DrawerHeader borderBottomWidth={'1px'}>
              MenuBar            
            </DrawerHeader>
           
            <DrawerBody>

            <VStack spacing={4} alignItems={"flex-start"}>

          


               <LinkButton onClose={onClose}  url="/" title="Home"></LinkButton>
               <LinkButton onClose={onClose}  url="/courses" title="Browse All Courses"></LinkButton>
               <LinkButton onClose={onClose}  url="/request" title="Request a Course"></LinkButton>
               <LinkButton onClose={onClose}  url="/contact" title="Contact us"></LinkButton>
               <LinkButton onClose={onClose}  url="/about" title="About "></LinkButton>

              <HStack justifyContent={"space-evenly"} position="absolute" bottom={'2rem'} width="80%">
                { isAuthenticated ? (
                     <>
                     <VStack>
                       <HStack>
                       <Link onClick={onClose} to="/profile">
                        <Button variant={'ghost'} colorScheme={"green"}>
                          Profile
                        </Button>
                       </Link>
                     <Button variant={'ghost'} onClick={logoutHandler} >
                       <RiLogoutBoxLine />
                       Logout
                     </Button>
                       </HStack>
                       {
                        user && user.role==="admin" && <Link to ="/admin/dashboard" onClick={onClose}>
                         <Button colorScheme={'purple'} variant={'ghost'}>
                          <RiDashboardFill style={{margin:'4px'}}/>
                          Dashboard
                         </Button>

                        </Link>
                       }
                     </VStack>
                  </>
                     ):(<>
                     <Link to="/login" onClick={onClose} >
                        <Button colorScheme={"green"}>Login</Button>
                     </Link>

                     <p>OR</p>

                     <Link onClick={onClose} to="/register">
                        <Button colorScheme={"green"}>Sign Up</Button>
                     </Link>
                     </>)}

                     </HStack>
                     </VStack>

            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header
