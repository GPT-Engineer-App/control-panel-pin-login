import React, { useState } from "react";
import { Box, Button, Container, Input, VStack, Text, useToast, Heading } from "@chakra-ui/react";
import { FaLock, FaUnlock } from "react-icons/fa";

const Index = () => {
  const [pin, setPin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const handleLogin = () => {
    if (pin === "1234") {
      // Assuming '1234' is the correct PIN
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: "You have successfully logged in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid PIN",
        description: "Please enter the correct 4-digit PIN.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPin("");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt="20">
        <Heading as="h1" size="xl">
          Control Panel
        </Heading>
        {!isLoggedIn ? (
          <>
            <Input placeholder="Enter 4-digit PIN" value={pin} onChange={(e) => setPin(e.target.value)} maxLength={4} type="password" />
            <Button leftIcon={<FaLock />} colorScheme="blue" onClick={handleLogin} isDisabled={pin.length !== 4}>
              Login
            </Button>
          </>
        ) : (
          <>
            <Text>Welcome to your control panel!</Text>
            <Button leftIcon={<FaUnlock />} colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
