import { ChangeEvent, useState } from "react";
import { Box, Text, Input, Button, Container, VStack, Link } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, Flex } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../libs/firebase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { BsGoogle } from "react-icons/bs";

interface errorFields {
    name?: boolean;
    email?: boolean;
    password?: boolean;
}

export const Register = () => {
    const [endUser, setEndUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState<errorFields>({});
    const navigate = useNavigate();
    const toast = useToast();

    const handleRegister = () => {
        const { email, password } = endUser;

        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async ({ user }) => {
                    toast({
                        title: "Success, You're Officially In!",
                        description: "You're in! Your registration is complete",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });

                    if (user) navigate("/");
                })
                .catch((error) => {
                    toast({
                        title: "Oh No, Registration Failed!",
                        description: JSON.stringify(error.message),
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    });
                    console.log(error);
                });
        } else {
            setError({
                email: email === "",
                password: password === "",
            });
        }
    };

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                if (user) {
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEndUser({
            ...endUser,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Flex alignItems="center" minH="100vh">
            <Container maxW={{ base: "sm", md: "lg" }} my={6}>
                <Box p={6} shadow="md" rounded="md" display="flex" flexDirection="column">
                    <Box display="flex" justifyContent="center">
                        <Button
                            colorScheme="blue"
                            alignSelf="flex-start"
                            leftIcon={<BsGoogle />}
                            onClick={handleGoogle}
                            _hover={{ bg: "#1F4CB9" }}
                            mb={{ base: 10, md: 8 }}
                        >
                            Sign Up with Google
                        </Button>
                    </Box>
                    <VStack spacing={6} align="stretch">
                        <FormControl id="username" isRequired isInvalid={error.name}>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                focusBorderColor="brand"
                                value={endUser.name}
                                onChange={handleChange}
                            />
                            {error.name && (
                                <FormErrorMessage>Username is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl id="email" isRequired isInvalid={error.email}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                focusBorderColor="brand"
                                value={endUser.email}
                                onChange={handleChange}
                            />
                            {error.email && <FormErrorMessage>Email is required.</FormErrorMessage>}
                        </FormControl>
                        <FormControl id="password" isRequired isInvalid={error.password}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                name="password"
                                focusBorderColor="brand"
                                value={endUser.password}
                                onChange={handleChange}
                            />
                            {error.password && (
                                <FormErrorMessage>Password is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <Button
                            colorScheme="green"
                            mt={6}
                            alignSelf="flex-start"
                            onClick={handleRegister}
                        >
                            Sign Up
                        </Button>
                        <Text fontSize="sm" my={3}>
                            Already have an account?{" "}
                            <Link color="green" href="/auth/login">
                                Sign In
                            </Link>
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Flex>
    );
};
