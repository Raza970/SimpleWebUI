import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function CTA() {
  const { colorMode } = useColorMode();

  return (
    <Box mb={"20px"}>
      <Container
        maxW={1200}
        borderRadius={"10px"}
        overflow="hidden"
        boxShadow={
          " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
        }
        bg={colorMode == "light" ? "#b9d7d9" : "blackAlpha.600"}
        p="10"
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Box flex={3}>
            <Heading fontStyle={"inherit"}>Try our free components</Heading>
            <Text fontSize={"20px"} fontWeight={"semibold"} color={"gray.500"}>
              You don&apos;t have to buy a pig in a poke - you can experience
              our free community components before making a purchase decision.
            </Text>
          </Box>

          <Box flex={1} alignSelf="flex-end">
            <Button
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              colorScheme={"gray"}
              float="right"
            >
              View Components
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
