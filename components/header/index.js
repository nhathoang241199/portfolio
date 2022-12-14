import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
  return (
    <Box
      id="header"
      h="100px"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
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
      <Flex>
        <Icon
          _hover={{
            cursor: "pointer",
            opacity: 0.8,
          }}
          as={BsGithub}
          color="#A7A7A7"
          w={6}
          h={6}
          mr={6}
        />
        <Icon
          _hover={{
            cursor: "pointer",
            opacity: 0.8,
          }}
          as={AiFillTwitterCircle}
          color="#A7A7A7"
          w={6}
          h={6}
          mr={6}
        />
        <Icon
          _hover={{
            cursor: "pointer",
            opacity: 0.8,
          }}
          as={BsLinkedin}
          color="#A7A7A7"
          w={6}
          h={6}
          mr={6}
        />
      </Flex>
    </Box>
  );
};

export default Header;
