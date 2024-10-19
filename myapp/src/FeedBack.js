import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  RadioGroup,
  HStack,
  Radio,
  Text,
  Flex,
} from '@chakra-ui/react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    rating: 0,
    experience: '',
    useful: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({
      ...formData,
      rating: ratingValue,
    });
  };

  const handleUsefulChange = (value) => {
    setFormData({
      ...formData,
      useful: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobileNo) newErrors.mobileNo = 'Mobile Number is required';
    if (!formData.rating) newErrors.rating = 'Rating is required';
    if (!formData.useful) newErrors.useful = 'Please indicate if the experience was useful';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Feedback submitted:', formData);
    }
  };

  return (
    <Box
      bgImage="url('/assets/feedback.jpg')" // Make sure the image path is correct
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="400px"
        mx="auto"
        mt="20px"
        p="25px"
        borderRadius="10px"
        boxShadow="lg"
        bg="rgba(255, 255, 255, 0.3)" // Reduced opacity for better transparency
        backdropFilter="blur(5px)"
        width="90%"
      >
        <Heading as="h2" textAlign="center" mb="25px" color="teal.600" fontSize="24px">
          Feedback Form
        </Heading>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <FormControl mb="20px" isInvalid={errors.name}>
            <FormLabel>Name *</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              bg="white"
              borderColor="gray.300"
              focusBorderColor="blue.500"
            />
            {errors.name && <Text color="red.500">{errors.name}</Text>}
          </FormControl>

          {/* Mobile Number Field */}
          <FormControl mb="20px" isInvalid={errors.mobileNo}>
            <FormLabel>Mobile Number *</FormLabel>
            <Input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              bg="white"
              borderColor="gray.300"
              focusBorderColor="blue.500"
            />
            {errors.mobileNo && <Text color="red.500">{errors.mobileNo}</Text>}
          </FormControl>

          {/* Star Rating */}
          <FormControl mb="20px" isInvalid={errors.rating}>
            <FormLabel>Rating (out of 5) *</FormLabel>
            <Flex justify="center" gap="10px" fontSize="35px">
              {[1, 2, 3, 4, 5].map((star) => (
                <Box
                  key={star}
                  cursor="pointer"
                  color={formData.rating >= star ? 'yellow.400' : 'gray.300'}
                  onClick={() => handleRatingChange(star)}
                >
                  &#9733;
                </Box>
              ))}
            </Flex>
            {errors.rating && <Text color="red.500">{errors.rating}</Text>}
          </FormControl>

          {/* Useful Experience Field */}
          <FormControl mb="20px" isInvalid={errors.useful}>
            <FormLabel>Was the experience useful? *</FormLabel>
            <RadioGroup name="useful" value={formData.useful} onChange={handleUsefulChange}>
              <HStack spacing="24px">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </HStack>
            </RadioGroup>
            {errors.useful && <Text color="red.500">{errors.useful}</Text>}
          </FormControl>

          {/* Experience Field */}
          <FormControl mb="20px">
            <FormLabel>Tell us about your experience (optional)</FormLabel>
            <Textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              resize="vertical"
              bg="white"
              minH="100px"
              maxH="200px"
              fontSize="14px"
              borderColor="gray.300"
              focusBorderColor="blue.500"
            />
          </FormControl>

          <Button
            type="submit"
            bg="green.500"
            color="white"
            _hover={{ bg: 'green.400' }}
            width="100%"
            fontSize="16px"
          >
            Submit Feedback
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default FeedbackForm;
