import { Button, Container, Heading, Input, VStack , HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form >
            <VStack  spacing={'8'} w={['full','96']} m={'auto'} my={'16'}
            >
                <Heading>Welcome Back</Heading>
                <Input type='email' placeholder='Enter your gmail' focusBorderColor={'purple.600'} required/>
                <Input type='password' placeholder='Enter your password' focusBorderColor={'purple.600'} required/>
                <HStack spacing={'100'}>
                <Button variant={'link'} alignSelf={'flex-start'}><Link to={'/signup'} >New User?</Link></Button>
                <Button variant={'link'} alignSelf={'flex-end'}><Link to={'/forgotpassword'} >Forgot password</Link></Button></HStack>
                <Button colorScheme='purple' type='submit' w={'full'}>Login</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default Login