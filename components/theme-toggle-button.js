import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Сменить тему"
      variant="outline"
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleButton;
