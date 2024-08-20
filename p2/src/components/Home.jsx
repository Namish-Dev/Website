import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Container, Heading, Image,Stack,Text } from '@chakra-ui/react'

const headingOptions= {
    pos:'absolute',
    left:'50%',
    top:'50%' ,
    w:'80%',
    transform:'translate(-50%,-50%)' ,
    textTransform:'uppercase' ,
    p:'4' ,
    size:'4xl'

}

const Home = () => {
  return <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading  w={'fit-content'} py='2' m={'auto'} borderBottom={'2px solid'}>Explain</Heading>
        <Stack   h='full' p='4' alignItems={'center'} direction={['column','row']}>
            <Image src='https://images3.wikia.nocookie.net/__cb20101012010958/fairytail/images/thumb/7/76/Happy_Anime_S2.png/290px-Happy_Anime_S2.png' h={['40','400']} />

            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit illo sint maxime quisquam corporis doloremque iure eum voluptatum qui, assumenda eveniet, atque non magni aliquam sed unde perspiciatis dolorem? Eligendi voluptate necessitatibus asperiores est ratione inventore reiciendis placeat voluptatum pariatur, possimus molestias alias culpa qui vel labore laborum molestiae id officiis obcaecati aperiam maiores ut iure tempore! Magnam architecto ut aliquid at laborum illum! Eos, illum, sed dignissimos temporibus repellat facere aliquam cumque tenetur, pariatur incidunt voluptatibus neque! Assumenda!Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sint temporibus perferendis quae cum, facilis, odio facere quibusdam ipsum, deleniti eos excepturi corporis repellendus amet corrupti cumque voluptate quis veritatis unde. Culpa, consectetur harum? Cum unde ab delectus eos culpa.
            </Text>
            
        </Stack>
    </Container>
    </Box>;
  
};

const MyCarousel=()=>(
    <Carousel infiniteLoop autoPlay interval={1000} showArrows={false} stopOnHover={false} showStatus={false} showThumbs={false}>
        <Box w='full' h={'100vh'}>
            <Image src='https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112842.jpg'/>
            <Heading bgColor={'blackAlpha.600' } color={'white'} {...headingOptions}>Wada wau wau wau</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src='https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg'/>
            <Heading bgColor={'blackAlpha.600' } color={'white'} {...headingOptions}>Wada wau wau wau</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src='https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112835.jpg'/>
            <Heading bgColor={'blackAlpha.600' } color={'white'} {...headingOptions}>Wada wau wau wau</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src='https://img.freepik.com/premium-photo/stunning-4k-wallpaper-set-whimsical-anime-dreamscape-generated-by-ai_943405-906.jpg'/>
            <Heading bgColor={'blackAlpha.600' } color={'white'} {...headingOptions}>Wada wau wau wau</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src='https://wallpapers-clan.com/wp-content/uploads/2024/06/one-punch-man-genos-blast-desktop-wallpaper-cover.jpg'/>
            <Heading bgColor={'blackAlpha.600' } color={'white'} {...headingOptions}>Wada wau wau wau</Heading>
        </Box>
    </Carousel>
)

export default Home