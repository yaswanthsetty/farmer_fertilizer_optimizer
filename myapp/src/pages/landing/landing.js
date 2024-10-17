import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Container, Flex, Heading, Text, VStack,Input,Textarea, useBreakpointValue, useColorMode
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './landing.css';



const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation hook
  const { colorMode } = useColorMode();

  // Function to handle navigation to the login page
  const handleLearnMoreClick = () => {
    navigate('/signin');
  };

  // Function to handle login/sign-up button click
  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <Box>
      {/* Header */}
      <Flex
        as="header"
        bg={colorMode === "dark" ? "teal.500" : "teal.500"}
        color="white"
        py={4}
        px={6}
        align="center"
        justify="space-between"
      >
        <Heading as="h1" size="lg">{t("landing.headerTitle")}</Heading>
        <Button colorScheme="teal" variant="outline" onClick={handleLoginClick}>
          {t("landing.loginSignUpButton")}
        </Button>
      </Flex>

      {/* Hero Section */}
      <Box bg="teal.600" color="white" py={16} px={6}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="center">
            <Heading as="h2" size="2xl" textAlign="center">
              {t("landing.heroTitle")}
            </Heading>
            <Text fontSize="lg" textAlign="center">
              {t("landing.heroSubtitle")}
            </Text>
            <Button colorScheme="teal" size="lg" rightIcon={<ArrowForwardIcon />} onClick={handleLearnMoreClick}>
              {t("landing.learnMoreButton")}
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxW="container.md" py={16} px={6}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">{t("landing.aboutTitle")}</Heading>
          <Text>{t("landing.aboutDescription")}</Text>
        </VStack>
      </Container>

      {/* Features Section */}
<Box bg="gray.100" py={16} px={6}>
  <Container maxW="container.lg">
    <VStack spacing={8} align="center">
      <Heading as="h2" size="xl">{t("landing.featuresTitle")}</Heading>
      <Box className="features-grid">
        <Box className="feature-item">
          <img src="assets/image1.png" alt="Feature 1" />
          <Heading as="h3" size="lg" mb={4}>{t("landing.feature1.title")}</Heading>
          <Text>{t("landing.feature1.description")}</Text>
        </Box>
        <Box className="feature-item">
          <img src="assets/image2.png" alt="Feature 2" />
          <Heading as="h3" size="lg" mb={4}>{t("landing.feature2.title")}</Heading>
          <Text>{t("landing.feature2.description")}</Text>
        </Box>
        <Box className="feature-item">
          <img src="assets/image3.png" alt="Feature 3" />
          <Heading as="h3" size="lg" mb={4}>{t("landing.feature3.title")}</Heading>
          <Text>{t("landing.feature3.description")}</Text>
        </Box>
      </Box>
    </VStack>
  </Container>
</Box>


      {/* Contact Section */}
      <Container maxW="container.md" py={16} px={6}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">{t("landing.contactTitle")}</Heading>
          <Text>{t("landing.contactDescription")}</Text>
          <Box as="form" w="full" maxW="lg">
            <VStack spacing={4}>
              <Input placeholder={t("landing.contactName")} isRequired />
              <Input placeholder={t("landing.contactEmail")} type="email" isRequired />
              <Textarea placeholder={t("landing.contactMessage")} isRequired />
              <Button colorScheme="teal" type="submit">{t("landing.sendMessageButton")}</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="teal.500" color="white" py={4} textAlign="center">
        <Text>{t("landing.footerText")}</Text>
      </Box>
    </Box>
  );
};

export default LandingPage;