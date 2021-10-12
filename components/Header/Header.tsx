import useToggleTheme from "../../hooks/toggle-theme/useToggleTheme";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";

function Header() {
  const { colorMode, onToggleTheme } = useToggleTheme();
  return (
    <header>
      <Flex justifyContent="flex-end" alignItems="center">
        <Box p="5">
          <IconButton
            colorScheme="twitter"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </Box>
      </Flex>
    </header>
  );
}

export default Header;
