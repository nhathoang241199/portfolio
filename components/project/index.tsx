import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { VscLiveShare } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";

const Project = () => {
  return (
    <Box id="project" w="full" paddingX={40} paddingY={20} alignItems="center">
      <Heading
        textAlign="center"
        as="h1"
        color="#CCCCCC"
        fontWeight={700}
        fontSize={48}
      >
        My Tech Stack
      </Heading>
      <Heading mt={10} textAlign="center" as="h3" color="#A7A7A7" fontSize={32}>
        Technologies I’ve been working with recently
      </Heading>

      <SimpleGrid mt={20} columns={3} spacing={10}>
        <Box borderRadius={20} overflow="hidden" bg="tomato">
          <Image src="macbook-bg-2.jpeg" alt="bg" h={200} />
          <Flex
            direction="column"
            w="full"
            h="full"
            bg="#363636"
            paddingX={8}
            paddingY={8}
          >
            <Heading fontSize={28} color="#CCCCCC" as="h3">
              Project Tile goes here
            </Heading>
            <Text mt={4} fontSize={18} color="#CCCCCC">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </Text>
            <Text color="#CCCCCC" my={4}>
              Tech stack : HTML , JavaScript, SASS, React
            </Text>
            <Flex justifyContent="space-between" color="#CCCCCC">
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={VscLiveShare} />
                <Text textDecoration="underline">Live Preview</Text>
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={BsGithub} />
                <Text textDecoration="underline">View Code</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box borderRadius={20} overflow="hidden" bg="tomato">
          <Image src="macbook-bg-2.jpeg" alt="bg" h={200} />
          <Flex
            direction="column"
            w="full"
            h="full"
            bg="#363636"
            paddingX={8}
            paddingY={8}
          >
            <Heading fontSize={28} color="#CCCCCC" as="h3">
              Project Tile goes here
            </Heading>
            <Text mt={4} fontSize={18} color="#CCCCCC">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </Text>
            <Text color="#CCCCCC" my={4}>
              Tech stack : HTML , JavaScript, SASS, React
            </Text>
            <Flex justifyContent="space-between" color="#CCCCCC">
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={VscLiveShare} />
                <Text textDecoration="underline">Live Preview</Text>
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={BsGithub} />
                <Text textDecoration="underline">View Code</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box borderRadius={20} overflow="hidden" bg="tomato">
          <Image src="macbook-bg-2.jpeg" alt="bg" h={200} />
          <Flex
            direction="column"
            w="full"
            h="full"
            bg="#363636"
            paddingX={8}
            paddingY={8}
          >
            <Heading fontSize={28} color="#CCCCCC" as="h3">
              Project Tile goes here
            </Heading>
            <Text mt={4} fontSize={18} color="#CCCCCC">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </Text>
            <Text color="#CCCCCC" my={4}>
              Tech stack : HTML , JavaScript, SASS, React
            </Text>
            <Flex justifyContent="space-between" color="#CCCCCC">
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={VscLiveShare} />
                <Text textDecoration="underline">Live Preview</Text>
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={BsGithub} />
                <Text textDecoration="underline">View Code</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box borderRadius={20} overflow="hidden" bg="tomato">
          <Image src="macbook-bg-2.jpeg" alt="bg" h={200} />
          <Flex
            direction="column"
            w="full"
            h="full"
            bg="#363636"
            paddingX={8}
            paddingY={8}
          >
            <Heading fontSize={28} color="#CCCCCC" as="h3">
              Project Tile goes here
            </Heading>
            <Text mt={4} fontSize={18} color="#CCCCCC">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </Text>
            <Text color="#CCCCCC" my={4}>
              Tech stack : HTML , JavaScript, SASS, React
            </Text>
            <Flex justifyContent="space-between" color="#CCCCCC">
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={VscLiveShare} />
                <Text textDecoration="underline">Live Preview</Text>
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={BsGithub} />
                <Text textDecoration="underline">View Code</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box borderRadius={20} overflow="hidden" bg="tomato">
          <Image src="macbook-bg-2.jpeg" alt="bg" h={200} />
          <Flex
            direction="column"
            w="full"
            h="full"
            bg="#363636"
            paddingX={8}
            paddingY={8}
          >
            <Heading fontSize={28} color="#CCCCCC" as="h3">
              Project Tile goes here
            </Heading>
            <Text mt={4} fontSize={18} color="#CCCCCC">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </Text>
            <Text color="#CCCCCC" my={4}>
              Tech stack : HTML , JavaScript, SASS, React
            </Text>
            <Flex justifyContent="space-between" color="#CCCCCC">
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={VscLiveShare} />
                <Text textDecoration="underline">Live Preview</Text>
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={BsGithub} />
                <Text textDecoration="underline">View Code</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box borderRadius={20} overflow="hidden" bg="tomato">
          <Image src="macbook-bg-2.jpeg" alt="bg" h={200} />
          <Flex
            direction="column"
            w="full"
            h="full"
            bg="#363636"
            paddingX={8}
            paddingY={8}
          >
            <Heading fontSize={28} color="#CCCCCC" as="h3">
              Project Tile goes here
            </Heading>
            <Text mt={4} fontSize={18} color="#CCCCCC">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </Text>
            <Text color="#CCCCCC" my={4}>
              Tech stack : HTML , JavaScript, SASS, React
            </Text>
            <Flex justifyContent="space-between" color="#CCCCCC">
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={VscLiveShare} />
                <Text textDecoration="underline">Live Preview</Text>
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                alignItems="center"
              >
                <Icon mr={2} as={BsGithub} />
                <Text textDecoration="underline">View Code</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Project;
