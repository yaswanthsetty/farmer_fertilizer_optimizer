import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Container, Flex, Heading, Text, VStack, useColorMode, useColorModeValue, IconButton, ScaleFade,
} from '@chakra-ui/react';
import { ArrowForwardIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import './landing.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

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
      {/* Toggle Color Mode Button */}
      <IconButton
        position="absolute"
        top="1"
        right="4"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle Color Mode"
        colorScheme={colorMode === "light" ? "teal" : "yellow"}
        size="sm"
        variant="outline"
        _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.600" }}
      />

      {/* Header */}
      <Flex
        as="header"
        bg={useColorModeValue("lightblue", "teal.700")}
        color="white"
        py={4}
        px={6}
        align="center"
        justify="space-between"
        boxShadow="md"
      >
        <Heading as="h1" size="lg" color={useColorModeValue("white", "lightyellow")} animation="fadeIn 2s ease-in-out">
          AgroAssist
        </Heading>
        <Button colorScheme="teal" variant="outline" onClick={handleLoginClick}>
          {t("landing.loginSignUpButton")}
        </Button>
      </Flex>

      {/* Hero Section with Background Image */}
      <Box
        bg={useColorModeValue("lightgreen", "teal.800")}
        color="white"
        py={16}
        px={6}
        backgroundImage={'url("https://c1.wallpaperflare.com/preview/205/779/579/buffalo-farmer-cultivating-agriculture.jpg")'}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Container maxW="container.lg">
          <VStack spacing={8} align="center">
            <ScaleFade in>
              <Heading as="h2" size="2xl" textAlign="center">
                Sustainable Fertilizer Optimizer
              </Heading>
              <Text fontSize="lg" textAlign="center">
                {t("landing.heroSubtitle")}
              </Text>
              <Button
                colorScheme="teal"
                size="lg"
                rightIcon={<ArrowForwardIcon />}
                onClick={handleLearnMoreClick}
                className="center-learnmore"
              >
                {t("landing.learnMoreButton")}
              </Button>
            </ScaleFade>
          </VStack>
        </Container>
      </Box>

      {/* About Section without Background Image */}
      <Container maxW="container.md" py={16} px={6}>
        <VStack spacing={6} align="start" className="spaced-text">
          <Heading as="h2" size="xl">{t("landing.aboutTitle")}</Heading>
          <Text>{t("landing.aboutDescription")}</Text>
        </VStack>
      </Container>

      {/* Features Section with New Background Color */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={16} px={6}>
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

      {/* Footer */}
      <Box bg={useColorModeValue("lightyellow", "teal.700")} color="white" py={4} textAlign="center">
        <Text>{t("landing.footerText")}</Text>
      </Box>
    </Box>
  );
};

export default LandingPage;