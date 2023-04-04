import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
// import { IoIosSpeedometer } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { TbBooks } from "react-icons/tb";

export default function Highlights() {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode == "dark" ? "blackAlpha.500" : "white"}
      color={colorMode == "dark" ? "white" : "black"}
      boxShadow={
        " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
      }
      mt={"15px"}
      py="50"
      as="section"
    >
      {/* top headers */}
      <Box textAlign={"center"}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontStyle={"italic"}
          fontSize="25px"
          fontWeight="extrabold"
        >
          Core Courses <br /> (Common in All Specializations)
        </Heading>
        <Text fontSize={"20"} fontWeight={"bold"} fontStyle={"italic"} py="3">
          Every participant of the program will start by completing the
          following three core courses.
        </Text>
      </Box>
      <Container maxW={1000}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
          <Card
            align="center"
            boxShadow={
              " 0px 20px 25px -5px rgba(0, 0, 0, 0.5), 10px 10px 10px -5px rgba(0, 0, 0, 0.09);"
            }
          >
            <CardHeader>
              <Center color={"gray.400"}>
                <TbBooks size={80} />
              </Center>
              <Heading size="lg" mt="5">
                {" "}
                Quarter 1
              </Heading>
            </CardHeader>
            <CardBody>
              <Text
                
                align={"center"}
                fontWeight={"semibold"}
                color={"gray.500"}
              >
                CS-101: Object-Oriented Programming using TypeScript
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                colorScheme={"gray"}
              >
                View here
              </Button>
            </CardFooter>
          </Card>
          <Card
            align="center"
            boxShadow={
              " 0px 20px 25px -5px rgba(0, 0, 0, 0.5), 10px 10px 10px -5px rgba(0, 0, 0, 0.09);"
            }
          >
            <CardHeader>
              <Center color={"gray.400"}>
                <ImBooks size={80} />
              </Center>
              <Heading size="lg" mt="5">
                Quarter 2
              </Heading>
            </CardHeader>
            <CardBody>
              <Text
                textAlign="center"
                fontWeight={"semibold"}
                color={"gray.500"}
              >
                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
                Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
                for Terraform
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                colorScheme={"gray"}
              >
                View here
              </Button>
            </CardFooter>
          </Card>
          <Card
            align="center"
            boxShadow={
              " 0px 20px 25px -5px rgba(0, 0, 0, 0.5), 10px 10px 10px -5px rgba(0, 0, 0, 0.09);"
            }
          >
            <CardHeader>
              <Center color={"gray.400"}>
                <IoBookSharp size={80} />
              </Center>
              <Heading size="lg" mt="5">
                Quarter 3
              </Heading>
            </CardHeader>
            <CardBody>
              <Text
                textAlign="center"
                fontWeight={"semibold"}
                color={"gray.500"}
              >
                $-101: Dollar Making Bootcamp - Full-Stack Template and API
                Product Development
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                colorScheme={"gray"}
              >
                View here
              </Button>
            </CardFooter>
          </Card>
          {/* <Card
            align="center"
            boxShadow={
              " 0px 20px 25px -5px rgba(0, 0, 0, 0.5), 10px 10px 10px -5px rgba(0, 0, 0, 0.09);"
            }
          >
            <CardHeader>
              <Center color={"gray.400"}>
                <MdSupportAgent size={80} />
              </Center>
              <Heading size="md" mt="5">
                Support Us
              </Heading>
            </CardHeader>
            <CardBody>
              <Text
                textAlign="center"
                fontWeight={"semibold"}
                color={"gray.500"}
              >
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                colorScheme={"gray"}
              >
                View here
              </Button>
            </CardFooter>
          </Card> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
