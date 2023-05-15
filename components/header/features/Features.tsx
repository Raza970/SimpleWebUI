import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  filter,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BiRocket } from "react-icons/bi";
import { RiMoonFoggyLine } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { RxCode } from "react-icons/rx";

export default function Feature() {
  const { colorMode } = useColorMode();
  return (
    <Box
      mb={"20px"}
      borderRadius={"16px"}
      overflow="hidden"
      boxShadow={
        " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
      }
      py="50"
      as="section"
      bg={colorMode == "dark" ? "blackAlpha.200" : "white"}
      // textColor={colorMode == "dark" ? "white" : "black"}
      color={colorMode == "dark" ? "white" : "black"}
    >
      {/* top headers */}
      <Box
        textAlign={{
          base: "center", // 0-48em
          lg: "center", // 48em-80em,
        }}
        px={{ base: "30", lg: "44" }}
      >
        <Heading
          fontSize={{
            base: "40px", // 0-48em
            lg: "52px", // 48em-80em,
          }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontStyle={"italic"}
          // fontSize="52px"
          fontWeight="extrabold"
        >
          What you can expect?
        </Heading>
        <Text fontSize={"20"} fontWeight={"bold"} fontStyle={"italic"} py="3">
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files.
        </Text>
      </Box>
      <Container maxW={1200} mt="10">
        {/* 6 features  */}
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* feature 1 */}
            <Box>
              <HStack>
                <Box color={"gray.400"}>
                  <StarIcon w={10} h={10} />
                </Box>
                <Box>
                  <Heading fontSize={18}>220+ Components</Heading>
                  <Text fontWeight={"semibold"} color={"gray.500"}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 1 ends */}
            </Box>

            {/* feature 2 */}
            <Box>
              <HStack>
                {/* <StarIcon w={10} h={10} /> */}
                <Box color={"gray.400"}>
                  <BiRocket size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Themable</Heading>
                  <Text fontWeight={"semibold"} color={"gray.500"}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 2 ends */}
            </Box>

            {/* feature 3 */}
            <Box>
              <HStack>
                <Box color={"gray.400"}>
                  <RiMoonFoggyLine size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Light & Dark</Heading>
                  <Text fontWeight={"semibold"} color={"gray.500"}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 3 ends */}
            </Box>

            {/* feature 4 */}
            <Box>
              <HStack>
                <Box color={"gray.400"}>
                  <FaPaintBrush size="50" />
                </Box>
                <Box>
                  <Heading fontSize={18}>Themable</Heading>
                  <Text fontWeight={"semibold"} color={"gray.500"}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 4 ends */}
            </Box>

            {/* feature 5 */}
            <Box>
              <HStack>
                <Box color={"gray.400"}>
                  <RxCode size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Developer Friendly</Heading>
                  <Text fontWeight={"semibold"} color={"gray.500"}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 5 ends */}
            </Box>

            {/* feature 6 */}
            <Box>
              <HStack>
                <Box color={"gray.400"}>
                  <StarIcon w={10} h={10} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Accessible</Heading>
                  <Text fontWeight={"semibold"} color={"gray.500"}>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 6 ends */}
            </Box>
          </SimpleGrid>

          {/* 6 features ends */}
        </Box>
      </Container>
    </Box>
  );
}
