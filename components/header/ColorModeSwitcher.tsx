import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "white");
  const SwitchIcon = useColorModeValue<typeof FaMoon, typeof FaSun>(FaMoon, FaSun);

  return (
    <IconButton
      fontSize="lg"
      variant="ghost"
      color="current"
      marginRight="1"
      onClick={toggleColorMode}
      alignItems="center"
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
      alignSelf="flex-end"
      rounded={50}
      bgColor="gray.100"
    />
  );
};







// import {
//     useColorMode,
//     useColorModeValue,
//     IconButton,
//     IconButtonProps,
//   } from "@chakra-ui/react";
//   import { FaMoon, FaSun } from "react-icons/fa";
  
//   type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;
  
//   export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
//     const { toggleColorMode } = useColorMode();
//     const text = useColorModeValue("dark", "white");
//     // const SwitchIcon = useColorModeValue(FaMoon, FaSun);
//     const SwitchIcon = useColorModeValue<typeof FaMoon, typeof FaSun>(FaMoon, FaSun);
  
//     return (
//       <IconButton
//         // size="md"
//         // size={"md" as "sm" | "md" | "lg"}
//         fontSize="lg"
//         variant="ghost"
//         color="current"
//         marginRight="1"
//         onClick={toggleColorMode}
//         alignItems="center"
//         icon={<SwitchIcon />}
//         aria-label={`Switch to ${text} mode`}
//         {...props}
//         alignSelf="flex-end"
//         rounded={50}
//         bgColor="gray.100"
//         // color="red"
//         // mt="4"
//       />
//     );
//   };