// src/LanguageSwitcher.js
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuButton, MenuItem, MenuList, HStack, ChakraProvider, CSSReset } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <HStack spacing={4}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FaGlobe />}
            variant="outline"
            aria-label="Change Language"
            _hover={{ bg: "gray.200" }}
            _focus={{ outline: "none" }}
          />
          <MenuList zIndex="2000">
            <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('hi')}>हिंदी</MenuItem>
            <MenuItem onClick={() => changeLanguage('te')}>తెలుగు</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </ChakraProvider>
  );
};

export default LanguageSwitcher;