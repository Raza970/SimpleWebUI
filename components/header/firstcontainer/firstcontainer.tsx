"use client";
import React from "react";
import { LayoutProps } from "../../../.next/types/app/layout";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  HStack,
  Heading,
  Hide,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export default function FirstContainer() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        boxShadow={
          " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
        }
        color={colorMode == "dark" ? "blackAlpha.200" : "white"}
      >
        {/* LEFT BOX */}
        <HStack>
          <Box
            w={{ base: "100%", lg: "100%" }}
            color={"white"}
            px={{ base: "30", lg: "44" }}
            // pt={"20px"}
            pt={{ base: "10px", lg: "20px" }}
            // bg={"red.400"}
            boxSize={"100%"}
            // mr={"150px"}
            // pl={"70px"}
          >
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontStyle={"italic"}
              fontSize="16px"
              fontWeight="extrabold"
            >
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </Text>
            <Heading
            pt={{ base: "35px",lg:"40px"}}
              // pt={"40px"}
              // color={"black"}
              fontWeight={"extrabold"}
              fontSize="30px"
              textColor={"black"}
            >
              Certified Web 3.0 and Metaverse Developer
            </Heading>
            <Text fontWeight={"semibold"} pt={{ base: "35px",lg:"50px"}} color={"gray.500"}>
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </Text>
            <Text fontWeight={"semibold"} pt={"20px"} color={"gray.500"}>
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </Text>

            <AvatarGroup pb={"10px"} pt={"30px"} size="md" max={3}>
              <Avatar
                name="Zia Khan"
                src="https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_800_800/0/1638368405154?e=2147483647&v=beta&t=Y2ESnL7WajFCydNTJL3gcxKbO-5jF6Y0Ci0ZlN47M4E"
              />
              <Avatar
                name="Hira Khan"
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*R8W0HWur3Vt2mKGLRSj7JQ.jpeg"
              />
              <Avatar
                name="Adil Altaf"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
              />
              {/* <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />

              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" /> */}
            </AvatarGroup>
            <Link href="https://portal.piaic.org/signup" target={"_blank"}>
              <Button
                // variant={"outline"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                colorScheme={"gray"}
                // fontWeight={"bold"}
              >
                Enroll Now
              </Button>
            </Link>
          </Box>
          {/* RIGHT BOX */}
          <Hide below="lg">
            <Box pt={"10px"} pl={"60px"} boxSize={"100%"}>
              <Image
                w={"100%"}
                // alignItems={"center"}
                filter={"blur(0.6px)"}
                src="https://panaverse-dao-ultra.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbackground.476aa753.png&w=750&q=75"
              />
            </Box>
          </Hide>
        </HStack>
      </Box>
    </>
  );
}
