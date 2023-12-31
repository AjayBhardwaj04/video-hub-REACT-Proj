import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p={'16'} color={'white'} >
        <Stack direction={['column','row']}>

            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={"md"} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscibe to get updates
                </Heading>
              
                <HStack 
                borderBottom={'2px solid white'} py={'2'}
                >
                <Input placeholder='Enter Email Here...' border={'none'} borderRadius='none' outline={'none'} focusBorderColor='none'/>
                    <Button 
                    p={'0'}
                    colorScheme={"purple"}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}>
                    
                       <AiOutlineSend size={20}/> 
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}>
            <Heading textTransform={'uppercase'} textAlign={'center'} >
                Video Hub
            </Heading>
            <Text>All right received</Text>
            </VStack>

            <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'}>
                Socil Midia
            </Heading>
            <Button variant={'link'} colorScheme={'white'}>
                <a  target={'blank'} href="https://youtube.com/@ajaybhardwaj5850">YouTube</a>
            </Button>
             <Button variant={'link'} colorScheme={'white'}>
                <a  target={'blank'} href="https://www.instagram.com/">Instagram</a>
            </Button>
             <Button variant={'link'} colorScheme={'white'}>
                <a target={'blank'} href="https://www.linkedin.com/in/ajay-bhardwaj-26a735243/">LinkDin</a>
            </Button>
            
            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer