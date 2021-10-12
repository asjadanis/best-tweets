import { ColorMode, useColorMode } from "@chakra-ui/color-mode";

interface ToggleTheme {
  onToggleTheme: () => void;
  colorMode: ColorMode;
}

const useToggleTheme = (): ToggleTheme => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onToggleTheme = () => {
    toggleColorMode();
  };

  return {
    onToggleTheme,
    colorMode,
  };
};

export default useToggleTheme;
