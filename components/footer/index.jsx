import {Box, Text, Flex, Icon} from '@chakra-ui/react';
import {CgMail} from 'react-icons/cg'


const Footer = () => { 
    return <Box
    h="100px"
    w="full"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    paddingX={40} paddingY={20}
    borderTop='1px solid #42446E'
  >
    <Flex id='footer' >
    <Text
        fontFamily="DM Sans"
        _hover={{
          cursor: "pointer",
          opacity: 0.8,
        }}
        fontWeight={500}
        fontSize={20}
        color="#A7A7A7"
        mr={16}
      >
        <a href="#header">Home</a>
      </Text>
      <Text
        fontFamily="DM Sans"
        _hover={{
          cursor: "pointer",
          opacity: 0.8,
        }}
        fontWeight={500}
        fontSize={20}
        color="#A7A7A7"
        mr={16}
      >
        <a href="#about">About</a>
      </Text>
      <Text
        fontFamily="DM Sans"
        _hover={{
          cursor: "pointer",
          opacity: 0.8,
        }}
        fontWeight={500}
        fontSize={20}
        color="#A7A7A7"
        mr={16}
        href="#tech"
      >
        <a href="#tech">Tech Stack</a>
      </Text>
      <Text
        fontFamily="DM Sans"
        _hover={{
          cursor: "pointer",
          opacity: 0.8,
        }}
        fontWeight={500}
        fontSize={20}
        color="#A7A7A7"
        mr={16}
        href="#project"
      >
        <a href="#project">Projects</a>
      </Text>
      <Text
        fontFamily="DM Sans"
        _hover={{
          cursor: "pointer",
          opacity: 0.8,
        }}
        fontWeight={500}
        fontSize={20}
        color="#A7A7A7"
        mr={16}
        href="#contact"
      >
        <a href="#footer">Contact</a>
      </Text>
    </Flex>
    <Flex _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }} alignItems='center'>
        <Icon color="#CCCCCC" mr={1} as={CgMail}/> 
        <Text href="mailto:nhathoang241199@gmail.com" color="#CCCCCC">nhathoang241199@gmail.com</Text>
    </Flex>
  </Box>
}

export default Footer;