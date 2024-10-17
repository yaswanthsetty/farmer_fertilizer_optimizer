import React from 'react';
import { Box, Heading, Image, Text, List, ListItem, Button, VStack, HStack, Container, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Idea2() {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={6} align="stretch">
        <MotionBox
          as="section"
          p={6}
          borderRadius="lg"
          boxShadow="md"
          bg="white"
          textAlign="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading size="2xl" color="green.600" mb={4}>Organic Fertilizers</Heading>
          <Image
            src="https://th.bing.com/th/id/OIP.j289Hj9LeYOi-CNm3oRDawHaEo?rs=1&pid=ImgDetMain"
            alt="Organic Fertilizers"
            borderRadius="md"
            boxShadow="md"
            mb={4}
            maxW="100%"
            mx="auto"
          />
          <Text fontSize="lg" mb={4}>
            Organic fertilizers, such as compost, manure, and other natural substances, are derived from plant or animal matter.
            They enhance the biological activity in the soil, improve soil structure, increase nutrient availability, and reduce environmental pollution compared to chemical fertilizers.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box
            p={6}
            borderRadius="lg"
            boxShadow="md"
            bg="gray.50"
          >
            <Heading size="lg" color="green.600" mb={4}>How to Make Organic Fertilizers</Heading>
            <Text fontSize="lg" mb={4}>
              <strong>1. Compost:</strong> Collect kitchen scraps (fruits, vegetables) and yard waste (leaves, grass clippings).
              Layer them in a compost bin, turning regularly to aerate and speed up decomposition. After a few months, the compost is ready to use.
            </Text>
            <Image
              src="https://th.bing.com/th/id/OIP.-O_5oWepNvaV3KBcnYRY4gHaHa?rs=1&pid=ImgDetMain"
              alt="Composting Process"
              borderRadius="md"
              boxShadow="md"
              mb={4}
              maxW="100%"
              mx="auto"
            />
            <Text fontSize="lg" mb={4}>
              <strong>2. Manure:</strong> Gather aged manure from herbivores (e.g., cows, horses) and apply it in gardens.
              Ensure it's well-composted to prevent pathogens and odor.
            </Text>
            <Image
              src="https://th.bing.com/th/id/OIP.aUVjH3IBdibglHXeM7GoLwHaEU?rs=1&pid=ImgDetMain"
              alt="Manure"
              borderRadius="md"
              boxShadow="md"
              mb={4}
              maxW="100%"
              mx="auto"
            />
          </Box>

          <Box
            p={6}
            borderRadius="lg"
            boxShadow="md"
            bg="gray.50"
          >
            <Heading size="lg" color="green.600" mb={4}>Uses of Organic Fertilizers</Heading>
            <Image
              src="https://th.bing.com/th/id/R.9decdb4798d66a31d3d3c77c321c9a61?rik=d%2fWvZpmguwgBpg&riu=http%3a%2f%2fwww.greenfarmlive.com%2fassets%2fimages%2forganic-fertilizer.jpg&ehk=HgVP5SHn7cGfJG%2b%2fCWlqEPsHpqlWLAqTF%2bKytJ82R60%3d&risl=&pid=ImgRaw&r=0"
              alt="Uses of Organic Fertilizers"
              borderRadius="md"
              boxShadow="md"
              mb={4}
              maxW="100%"
              mx="auto"
            />
            <List spacing={3} fontSize="lg">
              <ListItem>Improves soil structure and fertility.</ListItem>
              <ListItem>Enhances microbial activity in the soil.</ListItem>
              <ListItem>Increases water retention capacity.</ListItem>
              <ListItem>Reduces chemical runoff into waterways.</ListItem>
              <ListItem>Provides slow-release nutrients for long-term soil health.</ListItem>
              <ListItem>Supports sustainable farming practices and reduces dependency on chemical fertilizers.</ListItem>
            </List>
          </Box>
        </SimpleGrid>

        <Box
          p={6}
          borderRadius="lg"
          boxShadow="md"
          bg="gray.50"
        >
          <Heading size="lg" color="green.600" mb={4}>Watch These Videos</Heading>
          <VStack spacing={6}>
            <HStack spacing={4} align="center" justify="center" mb={4}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_K25WjjCBuw?si=EiGBZhS5zMShhO3T"
                title="How to Make Compost"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Text fontSize="md" maxW="300px">How to Make Compost</Text>
            </HStack>
            <HStack spacing={4} align="center" justify="center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/A3GpilPuQTs?si=VVCNhZKmWwGf1gRW"
                title="Using Organic Fertilizers"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Text fontSize="md" maxW="300px">Using Organic Fertilizers Effectively</Text>
            </HStack>
          </VStack>
        </Box>

        <Button
          colorScheme="green"
          variant="solid"
          size="lg"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </VStack>
    </Container>
  );
}

export default Idea2;