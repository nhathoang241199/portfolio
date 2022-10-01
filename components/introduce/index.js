import { Box, Heading, Flex, Avatar, Text } from "@chakra-ui/react";

const Introduce = () => {
  return (
    <Box id="about" h="740px" w="full" paddingX={40} paddingY={20}>
      <Flex
        w="full"
        h="full"
        justifyContent="space-between"
        alignItems="flex-start"
        direction="column"
      >
        <Heading fontSize={58} color="#D9D9D9" as="h1">
          Hi 👋,
          <br />
          We are
          <br />
          <Text
            fontWeight={700}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            SG TEAM
          </Text>
          We build things for web
        </Heading>
        <Flex w={800} alignSelf="center" justifyContent="space-between">
          <Avatar
            size="2xl"
            w={200}
            h={200}
            name="Segun Adebayo"
            src="nhat-avatar.jpeg"
          />
          <Avatar
            size="2xl"
            w={200}
            h={200}
            name="Segun Adebayo"
            src="jake-avatar.png"
          />
          <Avatar
            size="2xl"
            w={200}
            h={200}
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Introduce;
