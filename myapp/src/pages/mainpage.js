import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
  Heading,
  Text,
  Grid,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChatIcon } from '@chakra-ui/icons';
import { MdWork } from 'react-icons/md'; // Profession icon
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Translation hook

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    email: '',
    profession: 'Agronomist',
  });

  const [showChatbot, setShowChatbot] = useState(false); // Chatbot state

  useEffect(() => {
    const fetchUserData = async () => {
      // Simulate fetching user data
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve({ email: 'johndoe@example.com' }), 1000)
      );
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const boxData = [
    {
      title: t('box1.title'),
      description: t('box1.description'),
      imageUrl: 'https://tracextech.com/wp-content/uploads/2023/07/data-driven-solutions-for-agriculture.jpeg',
      path: 'data-driven-solution',
    },
    {
      title: t('box2.title'),
      description: t('box2.description'),
      imageUrl: 'https://th.bing.com/th/id/OIP.Uc1E8owcNl0nuO88XjWRAgHaDn?rs=1&pid=ImgDetMain',
      path: 'machine-learning-analysis',
    },
    {
      title: t('box3.title'),
      description: t('box3.description'),
      imageUrl: 'https://th.bing.com/th/id/OIP.Gb_u9w0L4TMwCojDps3gWQHaE7?rs=1&pid=ImgDetMain',
      path: 'crop-yield',
    },
    {
      title: t('box4.title'),
      description: t('box4.description'),
      imageUrl: 'https://th.bing.com/th/id/OIP.6dKxxxrqTTwwZLaURxD79QHaFj?pcl=1b1a19&pid=ImgDetMain',
      path: 'sustainable-agriculture',
    },
  ];

  const teamData = [
    {
      name: 'John Doe',
      role: 'Lead Agronomist',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Soil Scientist',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Johnson',
      role: 'Water Conservation Specialist',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const handleBoxClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <Box minHeight="100vh" backgroundColor="gray.50" fontFamily="Roboto, sans-serif">
      {/* Navbar */}
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 2rem"
        background="linear-gradient(90deg,#319795, #2c5282)"
        color="white"
        boxShadow="lg"
        position="sticky"
        top="0"
        zIndex="1000"
      >
        <Flex alignItems="center" gap="2rem" fontWeight="bold">
          <Link href="/about" _hover={{ color: 'yellow.300' }} transition="color 0.3s">
            {t('navbar.about')}
          </Link>
          <Link href="/contacts" _hover={{ color: 'yellow.300' }} transition="color 0.3s">
            {t('navbar.contacts')}
          </Link>
          <Link href="/help" _hover={{ color: 'yellow.300' }} transition="color 0.3s">
            {t('navbar.help')}
          </Link>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="assets/your-logo-url.png"
            alt={t('logo.alt')}
            height="50px"
            marginRight="1.5rem"
            cursor="pointer"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s ease"
          />

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" name="John Doe" src="https://via.placeholder.com/100" />
            </MenuButton>
            <MenuList backgroundColor="white" boxShadow="lg">
              <MenuItem _hover={{ backgroundColor: 'teal.100' }} color="gray.700">
                {userData.email}
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.100' }} color="gray.700">
                <Icon as={MdWork} marginRight="1rem" />
                {userData.profession}
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.100' }} color="gray.700">
                {t('profile')}
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.100' }} color="gray.700">
                {t('logout')}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box
        backgroundImage="url('https://www.rishabhsoft.com/wp-content/uploads/2022/04/RSPL-Std-Case-Farming-Equipment-Hiring-Platform-Development-.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        height={{ base: '300px', md: '450px', lg: '600px' }}
        position="relative"
      >
        <Box position="absolute" top="0" left="0" right="0" bottom="0" backgroundColor="rgba(0, 0, 0, 0.5)">
          <Flex justify="center" height="100%" alignItems="center" color="white" textAlign="center">
            <Heading size={{ base: 'xl', md: '2xl', lg: '4xl' }} fontFamily="Poppins, sans-serif">
              {t('hero.title')}
            </Heading>
          </Flex>
        </Box>
      </Box>

      {/* Services Grid */}
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8} padding="60px 20px">
        {boxData.map((box, index) => (
          <Box
            key={index}
            backgroundColor="white"
            padding="50px"
            borderRadius="lg"
            boxShadow="lg"
            _hover={{
              transform: 'scale(1.07)',
              boxShadow: '2xl',
              background: 'teal.50',
            }}
            transition="transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease"
            textAlign="center"
            cursor="pointer"
            onClick={() => handleBoxClick(box.path)}
          >
            <Image
              src={box.imageUrl}
              alt={box.title}
              borderRadius="lg"
              marginBottom="1rem"
              boxSize="150px"
              objectFit="cover"
              loading="lazy" // Lazy-load images
            />
            <Heading as="h3" size="md" fontFamily="Poppins, sans-serif" color="teal.700">
              {box.title}
            </Heading>
            <Text color="gray.700">{box.description}</Text>
            <Button colorScheme="teal" borderRadius="lg" mt="1rem">
              {t('learn_more')}
            </Button>
          </Box>
        ))}
      </Grid>

      {/* Team Members */}
      <Box padding="2rem" marginTop="2rem" backgroundColor="gray.100">
        <Heading as="h2" size="lg" textAlign="center" marginBottom="1rem" fontFamily="Poppins, sans-serif">
          {t('team.title')}
        </Heading>
        <Flex wrap="wrap" justifyContent="center">
          {teamData.map((member, index) => (
            <Box
              key={index}
              backgroundColor="white"
              padding="1rem"
              borderRadius="lg"
              boxShadow="md"
              margin="1rem"
              maxWidth="200px"
              textAlign="center"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                marginBottom="1rem"
                loading="lazy" // Lazy-load images
              />
              <Heading as="h4" size="sm" fontFamily="Poppins, sans-serif" color="teal.700">
                {member.name}
              </Heading>
              <Text color="gray.700">{member.role}</Text>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Chatbot */}
      <IconButton
        aria-label="Chatbot"
        icon={<ChatIcon />}
        position="fixed"
        bottom="4"
        right="4"
        size="lg"
        colorScheme="teal"
        onClick={() => setShowChatbot(!showChatbot)}
        zIndex="1000"
        transition="transform 0.3s ease"
        _hover={{ transform: 'scale(1.1)' }}
      />

      {showChatbot && (
        <Box
          position="fixed"
          bottom="20px"
          right="20px"
          width="300px"
          height="400px"
          backgroundColor="white"
          boxShadow="xl"
          borderRadius="md"
          overflow="hidden"
          zIndex="1000"
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ub6Pbma8-ut4taYsPGAz7"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Chatbot"
          />
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
