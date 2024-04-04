import React from "react";
import {
    Link,
    useColorModeValue,
    useDisclosure,
    useColorMode,
    chakra,
    Box,
    Flex,
    Button,
    IconButton,
    HStack,
    Spacer,
    Image,
    VStack,
    CloseButton,
    Avatar,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Header from "../assets/header.png";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";

const handleLogout = () => {
    signOut(auth).then(() => {
        console.log("User signed out");
        window.location.reload();
    });
};

export const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const cl = useColorModeValue("gray.800", "white");
    const mobileNav = useDisclosure();
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const { user } = useAuth();
    console.log(user);

    const MobileNavContent = (
        <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
            />
            <Link href="/">
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                    Home
                </Button>
            </Link>
            <Link href="/about">
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                    About
                </Button>
            </Link>
        </VStack>
    );

    return (
        <React.Fragment>
            <chakra.header
                h="full"
                bg={bg}
                w="full"
                px={{
                    base: 2,
                    sm: 4,
                }}
                py={4}
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Link display="flex" alignItems="center" href="/">
                        <Image src={Header} alt="Resume Builder" maxH={14} />
                    </Link>
                    <Box
                        display={{
                            base: "none",
                            md: "inline-flex",
                        }}
                    >
                        <HStack spacing={1}>
                            <Link href="/">
                                <Button
                                    bg={bg}
                                    color="gray.500"
                                    display="inline-flex"
                                    alignItems="center"
                                    fontSize="md"
                                    _hover={{
                                        color: cl,
                                    }}
                                    _focus={{
                                        boxShadow: "none",
                                    }}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    bg={bg}
                                    color="gray.500"
                                    display="inline-flex"
                                    alignItems="center"
                                    fontSize="md"
                                    _hover={{
                                        color: cl,
                                    }}
                                    _focus={{
                                        boxShadow: "none",
                                    }}
                                >
                                    About
                                </Button>
                            </Link>
                        </HStack>
                    </Box>
                    <Spacer />
                    <Box display="flex" alignItems="center">
                        {user ? (
                            <HStack spacing={3}>
                                <Avatar name={user?.displayName} src={user?.photoURL} size="sm" />
                                <Button variant="ghost" size="sm" onClick={handleLogout}>
                                    Log Out
                                </Button>
                            </HStack>
                        ) : (
                            <HStack spacing={3}>
                                <Link href="/auth/login">
                                    <Button variant="ghost" size="sm">
                                        Sign in
                                    </Button>
                                </Link>
                                <Link href="/auth/register">
                                    <Button colorScheme="green" variant="solid" size="sm">
                                        Sign up
                                    </Button>
                                </Link>
                            </HStack>
                        )}
                        <IconButton
                            size="md"
                            fontSize="lg"
                            aria-label={`Switch to ${text} mode`}
                            variant="ghost"
                            color="current"
                            ml={{
                                base: "0",
                                md: "3",
                            }}
                            onClick={toggleMode}
                            icon={<SwitchIcon />}
                        />
                        <IconButton
                            display={{
                                base: "flex",
                                md: "none",
                            }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color="gray.800"
                            _dark={{
                                color: "inherit",
                            }}
                            variant="ghost"
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />
                    </Box>
                </Flex>

                {MobileNavContent}
            </chakra.header>
        </React.Fragment>
    );
};
