import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, Button, Input, VStack, FormControl, FormLabel, Select, Text, Heading, Alert, AlertIcon, Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
  const [error, setError] = useState('');

  const handlePrediction = async () => {
    if (!nitrogen || !phosphorus || !potassium || !temperature || !humidity || !moisture || !soilType || !cropType) {
      setError('All fields are required');
      return;
    }

    if (isNaN(nitrogen) || isNaN(phosphorus) || isNaN(potassium) || isNaN(temperature) || isNaN(humidity) || isNaN(moisture)) {
      setError('Please enter valid numbers');
      return;
    }

    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/predict', {
        Nitrogen: nitrogen,
        Phosphorous: phosphorus,
        Potassium: potassium,
        SoilType: soilType,
        CropType: cropType,
        Temperature: temperature,
        Humidity: humidity,
        Moisture: moisture,
      });
      

      setPredictedFertilizer(response.data.predictedFertilizer);
    } catch (error) {
      setError('Error making prediction');
    }
  };

  return (
    <Box position="relative" minHeight="100vh" p={8} overflow="hidden">
      {/* Background Image */}
      <Image
        src="https://th.bing.com/th/id/OIP.VhNdMvn9RpBQ9B6JMxZE4gHaE8?w=3840&h=2561&rs=1&pid=ImgDetMain"
        alt="Agriculture Background"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        objectFit="cover"
        zIndex={-1}
        filter="brightness(50%)"
      />

      {/* Form Box */}
      <MotionBox
        bg="rgba(255, 255, 255, 0.8)"
        p={10}
        borderRadius="md"
        boxShadow="xl"
        maxW="lg"
        mx="auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={8}>
          <Heading size="lg" color="green.600" textShadow="0 2px 4px rgba(0, 0, 0, 0.2)">Fertilizer Prediction</Heading>

          {/* Nitrogen Input */}
          <FormControl isRequired>
            <FormLabel _focus={{ color: 'green.500' }}>Nitrogen</FormLabel>
            <Input
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              placeholder="Enter Nitrogen level"
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            />
          </FormControl>

          {/* Phosphorus Input */}
          <FormControl isRequired>
            <FormLabel _focus={{ color: 'green.500' }}>Phosphorus</FormLabel>
            <Input
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
              placeholder="Enter Phosphorus level"
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            />
          </FormControl>

          {/* Potassium Input */}
          <FormControl isRequired>
            <FormLabel _focus={{ color: 'green.500' }}>Potassium</FormLabel>
            <Input
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
              placeholder="Enter Potassium level"
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            />
          </FormControl>

          {/* Soil Type Select */}
          <FormControl isRequired>
            <FormLabel>Soil Type</FormLabel>
            <Select
              placeholder="Select Soil Type"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            >
              <option value="sandy">Sandy</option>
              <option value="clay">Clay</option>
              <option value="loamy">Loamy</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </Select>
          </FormControl>

          {/* Crop Type Select */}
          <FormControl isRequired>
            <FormLabel>Crop Type</FormLabel>
            <Select
              placeholder="Select Crop Type"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            >
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="corn">Corn</option>
              <option value="maize">Maize</option>
              <option value="sugarcane">Sugarcane</option>
              <option value="cotton">Cotton</option>
              <option value="paddy">Paddy</option>
              <option value="barley">Barley</option>
              <option value="ground nuts">Ground Nuts</option>
              <option value="oil seeds">Oil Seeds</option>
              <option value="pulses">Pulses</option>
              <option value="millets">Millets</option>
            </Select>
          </FormControl>

          {/* Temperature, Humidity, and Moisture Inputs */}
          <FormControl isRequired>
            <FormLabel>Temperature (°C)</FormLabel>
            <Input
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Enter temperature in °C"
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Humidity (%)</FormLabel>
            <Input
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              placeholder="Enter humidity in %"
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Moisture (%)</FormLabel>
            <Input
              value={moisture}
              onChange={(e) => setMoisture(e.target.value)}
              placeholder="Enter moisture in %"
              focusBorderColor="green.500"
              _hover={{ transform: 'scale(1.03)' }}
              transition="transform 0.2s ease"
            />
          </FormControl>

          {/* Predict Button */}
          <Button
            onClick={handlePrediction}
            colorScheme="green"
            size="lg"
            width="full"
            _hover={{
              bg: 'green.400',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(0, 128, 0, 0.5)',
            }}
            _focus={{ boxShadow: 'outline' }}
            transition="all 0.2s ease"
          >
            Predict Fertilizer
          </Button>

          {/* Error Handling */}
          {error && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}

          {/* Prediction Output */}
          {predictedFertilizer && (
            <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} mt={4}>
              <MotionText fontSize="2xl" color="teal.700" textAlign="center" fontWeight="bold" textShadow="0 1px 2px rgba(0, 128, 0, 0.5)">
                Predicted Fertilizer: {predictedFertilizer}
              </MotionText>
            </MotionBox>
          )}
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default SoilTestForm;
