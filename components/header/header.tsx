"use client";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Show,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import Burger from "./Burger";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function Header() {
  const { colorMode } = useColorMode();

  return (
    <Box as="header" position={"sticky"} top="0" zIndex={1}>
      {/* left area */}
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        bg={colorMode == "dark" ? "black" : "white"}
        py="5"
      >
        <Box>
          <HStack>
            <Image src="/images/panalogo.webp" alt="logo" w={"100px"} />
            <Hide below="md">
              <HStack spacing={10} pl="10">
                <NavMenu />
              </HStack>
            </Hide>
          </HStack>
        </Box>
        {/* right area */}
        
        <HStack>
        <Hide below="lg">
          <Box pl="15">
            <SearchIcon w="25" h="25" />
          </Box>
          </Hide>

          <ColorModeSwitcher />

          <Show below="md">
            <Burger />
          </Show>
          <Hide below="lg">
          <Link href="http://piaic.org/" target={"_blank"}>
            <Button
              // variant={"outline"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              colorScheme={"gray"}
            >
              Go to Piaic
            </Button>
          </Link>
          </Hide>

          <Hide below="lg">
          <Menu>
            <MenuButton
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              colorScheme={"gray"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Courses
            </MenuButton>
            <MenuList>
              <Link href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem>Web 3.0 and Metaverse Developer</MenuItem>
              </Link>
              <Link href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem>Artificial Intelligence </MenuItem>
              </Link>
              <Link href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem>Cloud-native Computing</MenuItem>
              </Link>
              <Link href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem>Ambient Computing and IoT</MenuItem>
              </Link>
              <Link href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem>Genomics and Bioinformatics</MenuItem>
              </Link>
              <Link href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem>Network Programmability and Automation</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          </Hide>
        </HStack>
      </Flex>
    </Box>
  );
}
