import React, { useState } from 'react';
import {
  Box, Button, Input, VStack, FormControl, FormLabel, Select, Heading, Alert, AlertIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Text as ChakraText } from '@chakra-ui/react';

// Animation for background elements
const MotionBox = motion(Box);
const MotionChakraText = motion(ChakraText);
const FertilizerQuantityForm = () => {
  const [fertilizerName, setFertilizerName] = useState('');
  const [cropName, setCropName] = useState('');
  const [weather, setWeather] = useState('');
  const [soilType, setSoilType] = useState('');
  const [acreSize, setAcreSize] = useState('');
  const [predictedQuantity, setPredictedQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePrediction = () => {
    setLoading(true);
    setError('');

    let quantity = 0;

    // Base fertilizer quantities per acre
    const baseQuantities = {
      'DAP 18-46-0': 100,   // Typical recommendation: 100-125 kg/acre
      'Urea 46-0-0': 50,    // Urea recommendation: 40-50 kg/acre
      'MOP 0-0-60': 50,     // MOP recommendation: 40-60 kg/acre
      'NPK 20-20-20': 60    // NPK recommendation: 50-70 kg/acre
    };

    // Adjustments based on weather and soil type
    const weatherFactor = {
      Sunny: 1.1,
      Rainy: 1.2,
      Cloudy: 1.0,
      Windy: 0.9,
    };

    const soilFactor = {
      Sandy: 1.1,
      Clayey: 1.0,
      Loamy: 1.05,
      Silty: 1.02,
    };

    const baseQuantity = baseQuantities[fertilizerName] || 0;
    const adjustedQuantity =
      baseQuantity *
      (weatherFactor[weather] || 1) *
      (soilFactor[soilType] || 1) *
      (acreSize ? parseFloat(acreSize) : 1);

    quantity = adjustedQuantity;

    if (quantity > 0) {
      setPredictedQuantity(`${quantity.toFixed(2)} kgs are required`);
    } else {
      setError('Please fill in all the fields correctly.');
    }

    setLoading(false);
  };

  return (
    <Box
      position="relative"
      minHeight="100vh"
      background="linear-gradient(135deg, #f5f7fa, #dfe1e5)"
      p={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="lg"
        width="100%"
      >
        <VStack spacing={6}>
          <Heading size="lg" color="blue.600">Fertilizer Quantity Prediction</Heading>

          <FormControl>
            <FormLabel>Fertilizer Name</FormLabel>
            <Select
              placeholder="Select Fertilizer"
              value={fertilizerName}
              onChange={(e) => setFertilizerName(e.target.value)}
              focusBorderColor="blue.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'blue.300' }}
              borderRadius="md"
              size="lg"
            >
              <option value="DAP 18-46-0">DAP 18-46-0</option>
              <option value="Urea 46-0-0">Urea 46-0-0</option>
              <option value="MOP 0-0-60">MOP 0-0-60</option>
              <option value="NPK 20-20-20">NPK 20-20-20</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Crop Name</FormLabel>
            <Select
              placeholder="Select Crop"
              value={cropName}
              onChange={(e) => setCropName(e.target.value)}
              focusBorderColor="blue.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'blue.300' }}
              borderRadius="md"
              size="lg"
            >
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
              <option value="Cotton">Cotton</option>
              <option value="Sugarcane">Sugarcane</option>
              <option value="Tomato">Tomato</option>
              <option value="Potato">Potato</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Weather Condition</FormLabel>
            <Select
              placeholder="Select Weather Condition"
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
              focusBorderColor="blue.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'blue.300' }}
              borderRadius="md"
              size="lg"
            >
              <option value="Sunny">Sunny</option>
              <option value="Rainy">Rainy</option>
              <option value="Cloudy">Cloudy</option>
              <option value="Windy">Windy</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Soil Type</FormLabel>
            <Select
              placeholder="Select Soil Type"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              focusBorderColor="blue.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'blue.300' }}
              borderRadius="md"
              size="lg"
            >
              <option value="Sandy">Sandy</option>
              <option value="Clayey">Clayey</option>
              <option value="Loamy">Loamy</option>
              <option value="Silty">Silty</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Acre Size</FormLabel>
            <Input
              type="number"
              placeholder="Enter Acre Size"
              value={acreSize}
              onChange={(e) => setAcreSize(e.target.value)}
              focusBorderColor="blue.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'blue.300' }}
              borderRadius="md"
              size="lg"
            />
          </FormControl>

          <Button
            onClick={handlePrediction}
            colorScheme="blue"
            isLoading={loading}
            size="lg"
            width="full"
            borderRadius="md"
          >
            Predict Quantity
          </Button>

          {error && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}

          {predictedQuantity && (
            <MotionBox
              p={6}
              mt={4}
              bg="teal.100"
              borderRadius="md"
              boxShadow="md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              width="100%"
            >
              <MotionChakraText
                fontSize="xl"
                color="teal.700"
                textAlign="center"
                fontWeight="bold"
              >
                Predicted Fertilizer Quantity: {predictedQuantity}
              </MotionChakraText>
            </MotionBox>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default FertilizerQuantityForm;
