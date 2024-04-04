import { Box, Text, Heading, Link, Icon } from "@chakra-ui/react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaTelegram } from "react-icons/fa";

// million-ignore
export const About = () => {
    const hostname = window.location.hostname;

    return (
        <main>
            <Box
                mx="auto"
                rounded="lg"
                shadow="md"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                maxW={800}
                p={6}
                gap={8}
            >
                <Box display="flex" flexDirection="column" gap={4}>
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontFamily="heading"
                        fontWeight="bold"
                        mb={4}
                    >
                        About Us
                    </Heading>
                    <Text fontSize={{ base: "15", md: "md" }}>
                        Welcome to <b>ResumeBuilder</b>: Your Online Destination for Professional
                        Resumes!
                    </Text>
                    <Text fontSize={{ base: "15", md: "md" }}>
                        <b>ResumeBuilder</b> is your ultimate online platform for crafting stunning,
                        professional resumes. With a wide array of templates to choose from, you can
                        easily create a resume that stands out. Whether you're a fresh graduate, an
                        experienced professional, or someone looking to switch careers,{" "}
                        <b>ResumeBuilder</b> offers a personalized approach to resume creation.
                    </Text>
                    <Text fontSize={{ base: "15", md: "md" }}>
                        At the heart of <b>ResumeBuilder</b> is the belief that a well-crafted
                        resume can open doors to new opportunities. We've designed our platform to
                        be user-friendly, ensuring that even those with little experience in resume
                        writing can create a resume that impresses. Our templates are customizable,
                        allowing you to tailor your resume to the job you're applying for,
                        highlighting your skills, experiences, and achievements in the best possible
                        light.
                    </Text>
                </Box>
                <Box display="flex" gap={3} flexDirection="column" alignItems="center">
                    <Text fontSize="sm">Share it with using</Text>
                    <Box display="flex" gap={2} mb={4} justifyContent="center" alignItems="center">
                        <Link href={`http://www.facebook.com/share.php?u=${hostname}`}>
                            <Icon boxSize={8} as={FaFacebook} />
                        </Link>
                        <Link href={`https://twitter.com/intent/tweet?url=${hostname}`}>
                            <Icon boxSize={8} as={AiFillTwitterCircle} />
                        </Link>
                        <Link href={`https://t.me/share/url?url=${hostname}`}>
                            <Icon boxSize={8} as={FaTelegram} />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </main>
    );
};
