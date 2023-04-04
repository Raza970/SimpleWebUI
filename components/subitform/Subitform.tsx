import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function Newsletter() {
  const { colorMode } = useColorMode();

  return (
    <Box mb={"20px"}>
      <Container
        overflow="hidden"
        boxShadow={
          " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
        }
        borderRadius={"10px"}
        bg={colorMode == "light" ? "#b9d7d9" : "blackAlpha.600"}
        maxW={1200}
        p="14"
      >
        <Flex
          justifyContent={"space-around"}
          flexDirection={{ base: "column", md: "row" }}
          // alignItems={{ base:"center"}}
        >
          <Box flex={3}>
            <Heading fontWeight={"bold"}>Join our Newletter</Heading>
            <Text fontSize={"20px"} fontWeight={"semibold"} color={"gray.500"}>
              Dont miss any more news and subscribe to our newsletter today.
            </Text>
          </Box>
          <Box>
            <HStack pt={"70px"}>
              <Input placeholder="Enter your email" />
              <Button
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                colorScheme={"gray"}
                width={150}
              >
                Subscribe
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
