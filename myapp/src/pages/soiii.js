import React, { useState } from 'react';
import {
  Box, Button, Input, VStack, FormControl, FormLabel, Select, Text, Heading, Alert, AlertIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';

// Animation for background elements
const MotionBox = motion(Box);
const MotionText = motion(Text);

const SoilTestForm = () => {
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [potassium, setPotassium] = useState('');
  const [soilType, setSoilType] = useState('');
  const [cropType, setCropType] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [moisture, setMoisture] = useState('');
  const [predictedFertilizer, setPredictedFertilizer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePrediction = async () => {
    console.log('handlePrediction called');
    console.log('Request data:', {
      Nitrogen: nitrogen,
      Phosphorous: phosphorus,
      Potassium: potassium,
      SoilType: soilType,
      CropType: cropType,
      Temperature: temperature,
      Humidity: humidity,
      Moisture: moisture,
    });
  
    try {
      const response = await axios.post('http://localhost:5001/api/predict', {
        Nitrogen: nitrogen,
        Phosphorous: phosphorus,
        Potassium: potassium,
        SoilType: soilType,
        CropType: cropType,
        Temperature: temperature,
        Humidity: humidity,
        Moisture: moisture,
      });
      console.log('Response:', response);
      setPredictedFertilizer(response.data.predicted_fertilizer);
    } catch (err) {
      console.error('Error during prediction:', err);
      setError('Error during prediction!');
    }
  };
  return (
    <Box
      position="relative"
      minHeight="100vh"
      background="linear-gradient(135deg, #e0f7fa, #fff3e0)"
      p={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Background Moving Elements */}
      <MotionBox
        position="absolute"
        top="-50px"
        left="-50px"
        boxSize="200px"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        borderRadius="50%"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        bottom="-50px"
        right="-50px"
        boxSize="200px"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        borderRadius="50%"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Form Container */}
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="lg"
        width="100%"
      >
        <VStack spacing={6}>
          <Heading size="lg" color="green.600">Fertilizer Prediction</Heading>

          {/* Nitrogen Input */}
          <FormControl>
            <FormLabel>Nitrogen</FormLabel>
            <Input
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              placeholder="Enter Nitrogen level"
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            />
          </FormControl>

          {/* Phosphorous Input */}
          <FormControl>
            <FormLabel>Phosphorous</FormLabel>
            <Input
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
              placeholder="Enter Phosphorous level"
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            />
          </FormControl>

          {/* Potassium Input */}
          <FormControl>
            <FormLabel>Potassium</FormLabel>
            <Input
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
              placeholder="Enter Potassium level"
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            />
          </FormControl>

          

          {/* Soil Type Input */}
          <FormControl>
            <FormLabel>Soil Type</FormLabel>
            <Select
              placeholder="Select Soil Type"
              onChange={(e) => setSoilType(e.target.value)}
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            >
              <option value="Sandy">Sandy</option>
              <option value="Clayey">Clayey</option>
              <option value="Loamy">Loamy</option>
            </Select>
          </FormControl>

          {/* Crop Type Input */}
          <FormControl>
            <FormLabel>Crop Type</FormLabel>
            <Select
              placeholder="Select Crop Type"
              onChange={(e) => setCropType(e.target.value)}
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            >
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
              <option value="Cotton">Cotton</option>
            </Select>
          </FormControl>
          {/* Temperature Input */}
          <FormControl>
            <FormLabel>Temperature (°C)</FormLabel>
            <Input
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Enter Temperature"
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            />
          </FormControl>

          {/* Humidity Input */}
          <FormControl>
            <FormLabel>Humidity (%)</FormLabel>
            <Input
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              placeholder="Enter Humidity level"
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            />
          </FormControl>

          {/* Moisture Input */}
          <FormControl>
            <FormLabel>Moisture (%)</FormLabel>
            <Input
              value={moisture}
              onChange={(e) => setMoisture(e.target.value)}
              placeholder="Enter Moisture level"
              focusBorderColor="green.400"
              borderColor="gray.300"
              _hover={{ borderColor: 'green.300' }}
              borderRadius="md"
              size="lg"
            />
          </FormControl>

          {/* Predict Button */}
          <Button
            onClick={handlePrediction}
            colorScheme="green"
            isLoading={loading}
            size="lg"
            width="full"
            borderRadius="md"
          >
            Predict Fertilizer
          </Button>

          {/* Error Message */}
          {error && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}

          {/* Predicted Fertilizer Display */}
          {predictedFertilizer && (
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
              <MotionText
                fontSize="xl"
                color="teal.700"
                textAlign="center"
                fontWeight="bold"
              >
                Predicted Fertilizer: {predictedFertilizer}
              </MotionText>
            </MotionBox>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default SoilTestForm;
