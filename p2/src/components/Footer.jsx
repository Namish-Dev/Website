import { Box,Stack,VStack,HStack,Heading,Button, Input,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box minH={40} bgColor={'black'} p={'16'} color={'white'}>

        <Stack direction={['column','row']}>
            <VStack w={'full'} alignItems={'stretch'}>
                <Heading  textTransform={'uppercase'} size={'md'}>Subscibe to Get updates</Heading>
                <HStack borderBottom={"2px solid white"} p={'4'}>
                <Input placeholder='Enter email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                <Button p={'0'} variant={"ghost"} colorScheme='purple' borderRadius={"0 200px 200px 0"}>
                    <AiOutlineSend size={'20'}/>
                </Button>
            </HStack>
            </VStack >

            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'}>
                    Anime
                </Heading>

                <Text>@all rights reserved</Text>
            </VStack>

            <VStack w='full'>
            <Heading size={'md'}>Social Media</Heading>
            <Button variant={'link'} colorScheme='white' ><a href="https://youtube.com"><AiFillYoutube/></a></Button>
            <Button variant={'link'} colorScheme='white' ><a href="https://instagram.com"><AiFillInstagram/></a></Button>
            <Button variant={'link'} colorScheme='white' ><a href="https://github.com"><AiFillGithub/></a></Button>
            </VStack>
            
        </Stack>

    </Box>
  )
}

export default Footer