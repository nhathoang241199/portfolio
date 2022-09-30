import { Box, Heading, Flex, Image } from "@chakra-ui/react";

const Technical = () => {
  return (
    <Box w="full" paddingX={40} paddingY={40} alignItems="center">
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
      <Flex mb={20} mt={40} w="full" justifyContent="space-between">
        <Image w={120} h={120} src="html-icon.png" alt="html" />
        <Image w={120} h={120} src="css-icon.png" alt="css" />
        <Image w={120} h={120} src="js-icon.png" alt="js" />
        <Image w={120} h={120} src="react-icon.png" alt="react" />
        <Image w={120} h={120} src="nextjs-icon.png" alt="nextjs" />
        <Image w={120} h={120} src="chakra-icon.png" alt="chakra" />
      </Flex>
      <Flex w="full" justifyContent="space-between">
        <Image w={120} h={120} src="nodejs-icon.png" alt="nodejs" />
        <Image w={120} h={120} src="mongodb-icon.svg" alt="mongodb" />
        <Image w={120} h={120} src="express-icon.png" alt="express" />
        <Image w={120} h={120} src="nestjs-icon.png" alt="nestjs" />
        <Image w={120} h={120} src="postgresql-icon.png" alt="postgresql" />
        <Image w={120} h={120} src="django-icon.png" alt="django" />
      </Flex>
    </Box>
  );
};

export default Technical;
