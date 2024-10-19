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
  useColorMode,
  ScaleFade,
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
    <Center
      minH="100vh"
      bgImage="url('https://saiplatform.org/wp-content/uploads/2019/02/project-efs.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      <ScaleFade initialScale={0.9} in>
        <Box
          p={8}
          maxW="md"
          w="100%"
          mx="auto"
          bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"} // Increased transparency
          borderRadius="md"
          boxShadow="lg"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.2)"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            transform: "translateY(-10px) scale(1.05)",
            boxShadow: "0 12px 24px rgba(0, 128, 128, 0.4)",
          }}
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
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              color={colorMode === "dark" ? "teal.100" : "teal.600"}
              transform="scale(1.1)"
              transition="transform 0.3s ease"
              _hover={{
                transform: "scale(1.2)",
              }}
            >
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
                  _placeholder={{ color: "gray.500" }}
                  transition="0.2s ease"
                  _focus={{
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px teal.500",
                  }}
                  border="1px solid teal.300"
                  _hover={{
                    borderColor: "teal.400",
                  }}
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
                  _placeholder={{ color: "gray.500" }}
                  transition="0.2s ease"
                  _focus={{
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px teal.500",
                  }}
                  border="1px solid teal.300"
                  _hover={{
                    borderColor: "teal.400",
                  }}
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
                  _placeholder={{ color: "gray.500" }}
                  transition="0.2s ease"
                  _focus={{
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px teal.500",
                  }}
                  border="1px solid teal.300"
                  _hover={{
                    borderColor: "teal.400",
                  }}
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
                  _placeholder={{ color: "gray.500" }}
                  transition="0.2s ease"
                  _focus={{
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px teal.500",
                  }}
                  border="1px solid teal.300"
                  _hover={{
                    borderColor: "teal.400",
                  }}
                />
              </InputGroup>
            </FormControl>

            {/* Sign Up Button */}
            <Button
              onClick={handleSignUp}
              colorScheme="teal"
              isLoading={loading}
              size="lg"
              fontWeight="bold"
              boxShadow="0 0 10px teal.400"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 0 15px teal.600",
                backgroundColor: "teal.500",
              }}
            >
              {t("signUp.submit")}
            </Button>

            {/* Links */}
            <VStack spacing={4} align="center">
              <RouterLink
                to="/signin"
                style={{
                  color: colorMode === "dark" ? "teal.200" : "teal.500",
                  transition: "color 0.2s ease",
                }}
              >
                {t("signUp.signInPrompt")}
              </RouterLink>
            </VStack>
          </VStack>
        </Box>
      </ScaleFade>
    </Center>
  );
};