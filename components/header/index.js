import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
  return (
    <Box
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
        Home
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
        About
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
        Tech Stack
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
        Projects
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
        Contact
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
