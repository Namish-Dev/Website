import React from 'react'
import {Drawer,DrawerBody,DrawerContent,DrawerOverlay,DrawerHeader, Button, useDisclosure, DrawerCloseButton, VStack, HStack } from '@chakra-ui/react'
import "react-icons/bi"
import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {

    const {isOpen,onClose,onOpen}=useDisclosure()
  return (
    <>
    <Button zIndex={'overlay'} pos={'fixed'} top={4} left={4} colorScheme='purple' p={0} width={10} height={10} borderRadius={100} onClick={onOpen}><BiMenuAltLeft size={20}/></Button>

    <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay/>
        <DrawerContent >
            <DrawerCloseButton></DrawerCloseButton>
            <DrawerHeader>MENU</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button colorScheme='purple' variant={'ghost'}><Link to='/'>Home</Link></Button>
                    <Button colorScheme='purple' variant={'ghost'}><Link to='/videos'>Videos</Link></Button>
                    <Button colorScheme='purple' variant={'ghost'}><Link to='/videos?category=free'>Free Videos</Link></Button>
                    <Button colorScheme='purple' variant={'ghost'}><Link to='/upload'>Upload</Link></Button>
                </VStack>

                <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                    <Button colorScheme='purple' ><Link to='/login'>Log In</Link></Button>
                    <Button colorScheme='purple'  variant={'ouline'}><Link to='/signUp'>Sign Up</Link></Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header