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
  useColorMode,
  useToast,
  ScaleFade,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import translation hook

const api = "http://localhost:5000/api/auth";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation hook
  const toast = useToast();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/signin`, { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast({
          title: t("signIn.success"),
          status: "success",
          duration: 3000,
          position: "top-right",
        });
        navigate("/home");
      } else {
        toast({
          title: response.data.message || t("signIn.error"),
          status: "error",
          duration: 3000,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast({
        title: t("signIn.error"),
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center
      minH="100vh"
      bgImage="url('https://img.freepik.com/premium-photo/3d-illustration-agriculture-field-isolated-white-background-farming-concept_439318-516.jpg')" // Replace with your preferred background
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      <ScaleFade initialScale={0.9} in>
        <Box
          p={8}
          maxW="lg"
          w="100%"
          mx="auto"
          bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
          borderRadius="lg"
          boxShadow="2xl"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.2)"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 12px 24px rgba(0, 128, 128, 0.4)",
          }}
        >
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
              {t("signIn.title")}
            </Text>

            {/* Email Input */}
            <FormControl id="email">
              <FormLabel color={colorMode === "dark" ? "teal.100" : "teal.600"}>
                {t("signIn.email")}
              </FormLabel>
              <InputGroup>
                <InputRightElement children={<FaEnvelope />} />
                <Input
                  type="email"
                  placeholder={t("signIn.email")}
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
              <FormLabel color={colorMode === "dark" ? "teal.100" : "teal.600"}>
                {t("signIn.password")}
              </FormLabel>
              <InputGroup>
                <InputRightElement children={<FaLock />} />
                <Input
                  type="password"
                  placeholder={t("signIn.password")}
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

            {/* Sign In Button */}
            <Button
              onClick={handleSignIn}
              colorScheme="teal"
              isLoading={loading}
              size="lg"
              fontSize="lg"
              fontWeight="bold"
              borderRadius="full"
              boxShadow="0 0 10px teal.400"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 0 15px teal.600",
                backgroundColor: "teal.500",
              }}
            >
              {t("signIn.submit")}
            </Button>

            <VStack spacing={4} align="center">
              <RouterLink
                to="/forgot"
                style={{
                  color: colorMode === "dark" ? "teal.200" : "teal.500",
                  transition: "color 0.2s ease",
                }}
              >
                {t("signIn.forgotPassword")}
              </RouterLink>
              <RouterLink
                to="/sign-up"
                style={{
                  color: colorMode === "dark" ? "teal.200" : "teal.500",
                  transition: "color 0.2s ease",
                }}
              >
                {t("signIn.signUpPrompt")}
              </RouterLink>
            </VStack>
          </VStack>
        </Box>
      </ScaleFade>
    </Center>
  );
};
