import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, FormLabel, Heading, VStack, Text } from '@chakra-ui/react';

const SoilTestForm = () => {
    const [formData, setFormData] = useState({
        phosphorus: '',
        nitrogen: '',
        potassium: '',
        pH: '',
        organicMatter: '',
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/soil-analysis', formData);
            setResult(response.data);
        } catch (error) {
            console.error('Error fetching ML results:', error);
        }
    };

    return (
        <Box
            bg="teal.300" // Solid color instead of gradient
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                maxW="600px"
                w="100%"
                p="8"
                bg="white"
                boxShadow="2xl"
                borderRadius="md"
                border="1px solid"
                borderColor="gray.200"
            >
                <Heading as="h2" size="lg" mb="6" textAlign="center" color="teal.600">
                    Soil Test Input
                </Heading>
                <VStack spacing="4" as="form" onSubmit={handleSubmit}>
                    <Box w="100%">
                        <FormLabel color="gray.700">Phosphorus</FormLabel>
                        <Input
                            type="number"
                            name="phosphorus"
                            value={formData.phosphorus}
                            onChange={handleChange}
                            focusBorderColor="teal.400"
                            required
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel color="gray.700">Nitrogen</FormLabel>
                        <Input
                            type="number"
                            name="nitrogen"
                            value={formData.nitrogen}
                            onChange={handleChange}
                            focusBorderColor="teal.400"
                            required
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel color="gray.700">Potassium</FormLabel>
                        <Input
                            type="number"
                            name="potassium"
                            value={formData.potassium}
                            onChange={handleChange}
                            focusBorderColor="teal.400"
                            required
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel color="gray.700">pH Level</FormLabel>
                        <Input
                            type="number"
                            name="pH"
                            value={formData.pH}
                            onChange={handleChange}
                            focusBorderColor="teal.400"
                            required
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel color="gray.700">Organic Matter</FormLabel>
                        <Input
                            type="number"
                            name="organicMatter"
                            value={formData.organicMatter}
                            onChange={handleChange}
                            focusBorderColor="teal.400"
                            required
                        />
                    </Box>
                    <Button
                        colorScheme="teal"
                        type="submit"
                        w="100%"
                        _hover={{ bg: 'teal.500', transform: 'scale(1.05)' }}
                    >
                        Submit
                    </Button>
                </VStack>

                {result && (
                    <Box mt="6" p="4" bg="teal.100" borderRadius="md">
                        <Heading as="h3" size="md" mb="4" color="teal.700">
                            Fertilizer Recommendation
                        </Heading>
                        <Text color="gray.700">{result.recommendation}</Text>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default SoilTestForm;
