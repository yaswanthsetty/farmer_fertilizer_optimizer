import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Select,
  VStack,
  StackDivider,
  theme,
} from '@chakra-ui/react';
import { FaLeaf } from 'react-icons/fa';
import axios from 'axios';

const DataOpti = () => {
  const [soilPH, setSoilPH] = useState('');
  const [cropType, setCropType] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null); // Reset error before making the request
    try {
      const response = await axios.post('http://localhost:5000/api/recommend', {
        soilPH,
        cropType,
        weatherCondition,
      });
      
      if (response.data && response.data.recommendation) {
        setRecommendation(response.data.recommendation);
      } else {
        setError('Invalid response from server.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error getting recommendation. Please check the console for more details.');
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="green.50"
        minH="100vh"
        py={10}
        px={5}
        textAlign="center"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/green-dust.png')",
          backgroundSize: 'cover',
        }}
      >
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Heading as="h1" size="2xl" mb={6} color="green.700">
            Data-driven Solution for Optimal Fertilizer Use
          </Heading>
          <Text fontSize="xl" mb={8} color="green.600">
            Utilizes agricultural data to recommend suitable fertilizer types and quantities
            based on soil health, crop type, and weather conditions.
          </Text>

          <VStack
            spacing={4}
            divider={<StackDivider borderColor="green.200" />}
            width="80%"
            maxWidth="500px"
          >
            <Input
              placeholder="Enter Soil pH Level"
              size="lg"
              value={soilPH}
              onChange={(e) => setSoilPH(e.target.value)}
            />
            <Select
              placeholder="Select Crop Type"
              size="lg"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
            >
              <option value="Wheat">Wheat</option>
              <option value="Corn">Corn</option>
              <option value="Rice">Rice</option>
            </Select>
            <Select
              placeholder="Select Weather Condition"
              size="lg"
              value={weatherCondition}
              onChange={(e) => setWeatherCondition(e.target.value)}
            >
              <option value="Sunny">Sunny</option>
              <option value="Rainy">Rainy</option>
              <option value="Cloudy">Cloudy</option>
            </Select>
            <Button
              leftIcon={<FaLeaf />}
              colorScheme="green"
              variant="solid"
              size="lg"
              width="100%"
              onClick={handleSubmit}
            >
              Get Recommendation
            </Button>
          </VStack>

          {/* Display recommendation or error */}
          {recommendation && (
            <Box mt={8} p={5} bg="green.100" borderRadius="md" maxWidth="500px">
              <Text fontSize="lg" color="green.700">
                <strong>Recommended Fertilizer:</strong> {recommendation}
              </Text>
            </Box>
          )}

          {error && (
            <Box mt={8} p={5} bg="red.100" borderRadius="md" maxWidth="500px">
              <Text fontSize="lg" color="red.700">
                <strong>Error:</strong> {error}
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default DataOpti;
