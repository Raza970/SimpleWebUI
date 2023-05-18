import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  Show,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function NavMenu({ horizontal = true }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <List
        fontWeight={"bold"}
        color={colorMode == "light" ? "#4A5568" : "white"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "left", md: "center" }}
        >
          <Link href="/" target={"_blank"}>
            Home
          </Link>
          {/* <ListItem></ListItem> */}
          <Link href="https://www.piaic.org/" target={"_blank"}>
            About
          </Link>

          <Link href="https://www.facebook.com/groups/piaic/posts/332460671001718/" target={"_blank"}>
            Contact
          </Link>

          <Show below="md">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Courses
              </MenuButton>
              <MenuList>
              <Link color='teal.500' href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem fontWeight={"bold"}>Web 3.0 and Metaverse Developer</MenuItem>
              </Link>
              <Link color='teal.500' href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem fontWeight={"bold"}>Artificial Intelligence </MenuItem>
              </Link>
              <Link color='teal.500' href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem fontWeight={"bold"}>Cloud-native Computing</MenuItem>
              </Link>
              <Link color='teal.500' href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem fontWeight={"bold"}>Ambient Computing and IoT</MenuItem>
              </Link>
              <Link color='teal.500' href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem fontWeight={"bold"}>Genomics and Bioinformatics</MenuItem>
              </Link>
              <Link color='teal.500' href="https://panaverse-dao-staging.vercel.app/core-track/q1" target={"_blank"}>
              <MenuItem fontWeight={"bold"}>Network Programmability and Automation</MenuItem>
              </Link>
              </MenuList>
            </Menu>
          </Show>
        </Stack>
      </List>
    </>
  );
}
