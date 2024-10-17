// src/Water.js
import React from 'react';
//import './water.css' // Import the CSS file
import { Box, Heading, Text, Image, Grid, GridItem, Flex, Stack,VStack, Button } from '@chakra-ui/react';

const Water = () => {
  return (
    <Box className="water-page">
      {/* Header Section */}
      <Flex className="water-header">
        <Heading as="h1" size="xl">Water Conservation in Agriculture</Heading>
        <Button colorScheme="teal" variant="solid" bg="white" color="teal.500" _hover={{ bg: "teal.200" }}>
          Learn More
        </Button>
      </Flex>

      {/* Hero Section */}
      <Box className="water-hero">
        <Image
          src="https://example.com/water-conservation.jpg"
          alt="Water Conservation"
        />
        <Text className="water-hero-text">
          Effective water management is crucial for sustainable agriculture. Discover methods to conserve water while maintaining crop productivity.
        </Text>
      </Box>

      {/* Techniques Section */}
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="lg" mb={4}>Water Conservation Techniques</Heading>
          <Grid className="water-technique-grid">
            <GridItem className="water-technique-item">
              <Image src="https://example.com/drip-irrigation.jpg" alt="Drip Irrigation" />
              <Heading as="h3" size="md" mt={4}>Drip Irrigation</Heading>
              <Text mt={2}>Drip irrigation provides water directly to the roots, minimizing evaporation and runoff.</Text>
            </GridItem>
            <GridItem className="water-technique-item">
              <Image src="https://example.com/rainwater-harvesting.jpg" alt="Rainwater Harvesting" />
              <Heading as="h3" size="md" mt={4}>Rainwater Harvesting</Heading>
              <Text mt={2}>Collecting and storing rainwater for agricultural use to reduce dependence on groundwater.</Text>
            </GridItem>
            <GridItem className="water-technique-item">
              <Image src="https://example.com/smart-irrigation.jpg" alt="Smart Irrigation" />
              <Heading as="h3" size="md" mt={4}>Smart Irrigation Systems</Heading>
              <Text mt={2}>Using sensors and technology to optimize irrigation schedules and water usage.</Text>
            </GridItem>
          </Grid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Benefits of Water Conservation</Heading>
          <Stack spacing={4}>
            <Text>💧 Reduces water wastage and increases efficiency.</Text>
            <Text>🌍 Promotes environmental sustainability and resource conservation.</Text>
            <Text>🌾 Ensures long-term viability of agricultural practices.</Text>
          </Stack>
        </Box>
      </VStack>

      {/* Footer Section */}
      <Box className="water-footer">
        <Text>© 2024 Sustainable Agriculture Initiative</Text>
      </Box>
    </Box>
  );
};

export default Water;
