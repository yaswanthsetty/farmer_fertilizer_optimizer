// src/LanguageSwitcher.js
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuButton, MenuItem, MenuList, HStack } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
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
        <MenuList>
          <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage('hi')}>हिंदी</MenuItem>
          <MenuItem onClick={() => changeLanguage('te')}>తెలుగు</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default LanguageSwitcher;
