import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Center,
  useColorMode
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useTranslation } from 'react-i18next'; // Import translation hook

const api = "http://localhost:5000/api/auth"; // Your backend URL

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const { colorMode } = useColorMode();
  const navigate = useNavigate(); // Initialize navigate
  const { t } = useTranslation(); // Initialize translation hook

  const handleSignUp = async () => {
    if (password !== reenterPassword) {
      alert(t("signUp.passwordMismatch"));
      return;
    }

    setLoading(true); // Show loading state
    try {
      const response = await axios.post(`${api}/signup`, { email, name, password });
      alert(response.data.message || t("signUp.success"));
      navigate("/signin"); // Redirect to Sign-In page after successful sign-up
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert(t("signUp.error"));
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <Center minH="100vh">
      <Box
        p={6}
        maxW="md"
        w="100%"
        mx="auto"
        bg={colorMode === "dark" ? "gray.800" : "gray.100"}
        borderRadius="md"
        boxShadow="lg"
      >
        <IconButton
          aria-label={t("goBack")}
          icon={<FaArrowLeft />}
          as={RouterLink}
          to="/"
          mb={6}
          colorScheme="gray"
          variant="outline"
        />

        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            {t("signUp.title")}
          </Text>

          {/* Name Input */}
          <FormControl id="name">
            <FormLabel>{t("signUp.name")}</FormLabel>
            <InputGroup>
              <InputRightElement children={<FaUser />} />
              <Input
                type="text"
                placeholder={t("signUp.name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          {/* Email Input */}
          <FormControl id="email">
            <FormLabel>{t("signUp.email")}</FormLabel>
            <InputGroup>
              <InputRightElement children={<FaEnvelope />} />
              <Input
                type="email"
                placeholder={t("signUp.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          {/* Password Input */}
          <FormControl id="password">
            <FormLabel>{t("signUp.password")}</FormLabel>
            <InputGroup>
              <InputRightElement children={<FaLock />} />
              <Input
                type="password"
                placeholder={t("signUp.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          {/* Reenter Password Input */}
          <FormControl id="reenter-password">
            <FormLabel>{t("signUp.reenterPassword")}</FormLabel>
            <InputGroup>
              <InputRightElement children={<FaLock />} />
              <Input
                type="password"
                placeholder={t("signUp.reenterPassword")}
                value={reenterPassword}
                onChange={(e) => setReenterPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          {/* Sign Up Button */}
          <Button onClick={handleSignUp} colorScheme="teal" isLoading={loading}>
            {t("signUp.submit")}
          </Button>

          {/* Links */}
          <VStack spacing={4} align="center">
            <RouterLink to="/signin">
              {t("signUp.signInPrompt")}
            </RouterLink>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};
