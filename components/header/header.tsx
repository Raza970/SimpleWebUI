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
          <Link href="http://piaic.org/" target={"_blank"}>
            <Button
              // variant={"outline"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              colorScheme={"gray"}
            >
              Go to Piaic
            </Button>
          </Link>

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
              <MenuItem>Web 3.0 and Metaverse Developer</MenuItem>
              <MenuItem>Artificial Intelligence </MenuItem>
              <MenuItem>Cloud-native Computing</MenuItem>
              <MenuItem>Ambient Computing and IoT</MenuItem>
              <MenuItem>Genomics and Bioinformatics</MenuItem>
              <MenuItem>Network Programmability and Automation</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
