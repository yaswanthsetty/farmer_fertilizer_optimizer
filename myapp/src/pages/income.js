import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Icon, Button } from '@chakra-ui/react';
import { FaSeedling, FaHandHoldingUsd, FaLeaf } from 'react-icons/fa';

function Income() {
  return (
    <Box 
      maxW="1200px" 
      mx="auto" 
      textAlign="center" 
      p={5} 
      bg="#f5f5f5" // Light grey background for a professional look
    >
      <Heading 
        as="h1" 
        size="2xl" 
        mb={6} 
        color="teal.700" // Teal color for a fresh, modern look
        fontFamily="'Roboto', sans-serif"
        fontWeight="bold"
      >
        Enhanced Crop Yield and Farmer Income
      </Heading>
      <Text 
        fontSize="lg" 
        mb={10} 
        color="gray.700"
        fontFamily="'Roboto', sans-serif"
      >
        Increased crop productivity and improved farmer earnings through optimized fertilizer application.
      </Text>

      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={8} 
        mb={10}
        px={{ base: 4, md: 6 }} // Responsive padding
      >
        {/* Section 1 */}
        <Box 
          bg="white" 
          p={5} 
          borderRadius="lg" 
          shadow="md" 
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.03)' }} 
          position="relative"
          border="1px solid #e2e8f0" // Subtle border for a cleaner look
        >
          <Icon 
            as={FaSeedling} 
            boxSize={12} 
            color="teal.500" 
            mx="auto" // Centering the icon
          />
          <Heading 
            as="h3" 
            size="lg" 
            mt={5} 
            mb={3}
            color="teal.800"
            fontFamily="'Roboto', sans-serif"
            fontWeight="bold"
          >
            Increased Crop Yield
          </Heading>
          <Text 
            color="gray.600"
            fontFamily="'Roboto', sans-serif"
          >
            By applying the right amount and type of fertilizers based on soil conditions, crop productivity can increase significantly. It ensures the optimal use of nutrients, leading to healthier and higher yields.
          </Text>
          <Image 
            src="https://images.unsplash.com/photo-1578200944670-b3edac9b16f4" // High-quality image
            alt="Crop Yield" 
            mt={5} 
            borderRadius="md" 
            objectFit="cover"
            height="200px" // Fixed height to keep images consistent
          />
          {/* <Button 
            colorScheme="teal" 
            size="sm" 
            mt={4} 
            position="absolute" 
            bottom="5" 
            left="50%" 
            transform="translateX(-50%)"
          >
            Learn More
          </Button> */}
        </Box>

        {/* Section 2 */}
        <Box 
          bg="white" 
          p={5} 
          borderRadius="lg" 
          shadow="md" 
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.03)' }} 
          position="relative"
          border="1px solid #e2e8f0"
        >
          <Icon 
            as={FaHandHoldingUsd} 
            boxSize={12} 
            color="blue.500" 
            mx="auto"
          />
          <Heading 
            as="h3" 
            size="lg" 
            mt={5} 
            mb={3}
            color="blue.800"
            fontFamily="'Roboto', sans-serif"
            fontWeight="bold"
          >
            Increased Farmer Income
          </Heading>
          <Text 
            color="gray.600"
            fontFamily="'Roboto', sans-serif"
          >
            Optimizing fertilizer application reduces waste and lowers costs, resulting in better profitability for farmers. With higher yields, farmers can sell more produce and increase their earnings.
          </Text>
          <Image 
            src="https://images.unsplash.com/photo-1602527419753-6c4072a6c761" // High-quality image
            alt="Farmer Income" 
            mt={5} 
            borderRadius="md" 
            objectFit="cover"
            height="200px"
          />
          {/* <Button 
            colorScheme="blue" 
            size="sm" 
            mt={4} 
            position="absolute" 
            bottom="5" 
            left="50%" 
            transform="translateX(-50%)"
          >
            Learn More
          </Button> */}
        </Box>

        {/* Section 3 */}
        <Box 
          bg="white" 
          p={5} 
          borderRadius="lg" 
          shadow="md" 
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.03)' }} 
          position="relative"
          border="1px solid #e2e8f0"
        >
          <Icon 
            as={FaLeaf} 
            boxSize={12} 
            color="green.500" 
            mx="auto"
          />
          <Heading 
            as="h3" 
            size="lg" 
            mt={5} 
            mb={3}
            color="green.800"
            fontFamily="'Roboto', sans-serif"
            fontWeight="bold"
          >
            Sustainable Fertilizer Use
          </Heading>
          <Text 
            color="gray.600"
            fontFamily="'Roboto', sans-serif"
          >
            Proper fertilizer management improves soil health and reduces environmental pollution. Sustainable practices not only benefit the farm but also contribute to long-term soil fertility and sustainability.
          </Text>
          <Image 
            src="https://images.unsplash.com/photo-1579760897997-20c03a33da35" // High-quality image
            alt="Sustainable Fertilizer Use" 
            mt={5} 
            borderRadius="md" 
            objectFit="cover"
            height="200px"
          />
          {/* <Button 
            colorScheme="green" 
            size="sm" 
            mt={4} 
            position="absolute" 
            bottom="5" 
            left="50%" 
            transform="translateX(-50%)"
          >
            Learn More
          </Button> */}
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Income;
