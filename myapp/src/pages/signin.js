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
  Center,
  useColorMode
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import translation hook

const api = "http://localhost:5000/api/auth"; 

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation hook

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/signin`, { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); 
        alert(t("signIn.success"));
        navigate("/home");
      } else {
        alert(response.data.message || t("signIn.error"));
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert(t("signIn.error"));
    } finally {
      setLoading(false);
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
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            {t("signIn.title")}
          </Text>

          {/* Email Input */}
          <FormControl id="email">
            <FormLabel>{t("signIn.email")}</FormLabel>
            <InputGroup>
              <InputRightElement children={<FaEnvelope />} />
              <Input
                type="email"
                placeholder={t("signIn.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          {/* Password Input */}
          <FormControl id="password">
            <FormLabel>{t("signIn.password")}</FormLabel>
            <InputGroup>
              <InputRightElement children={<FaLock />} />
              <Input
                type="password"
                placeholder={t("signIn.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          {/* Sign In Button */}
          <Button onClick={handleSignIn} colorScheme="teal" isLoading={loading}>
            {t("signIn.submit")}
          </Button>

          {/* Links */}
          <VStack spacing={4} align="center">
            <RouterLink to="/forgot">
              {t("signIn.forgotPassword")}
            </RouterLink>
            <RouterLink to="/sign-up">
              {t("signIn.signUpPrompt")}
            </RouterLink>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};
