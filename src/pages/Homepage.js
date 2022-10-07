import React, { useState } from "react";
import {
  Flex,
  Container,
  Link,
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Heading,
  Avatar,
  Stack,
  Center,
  useColorModeValue,
  createIcon,
  IconProps,
  Image,
  Icon,
  IconButton,
  Grid,
  GridItem,
  Select,
  Square,
  Input,
  Wrap,
  WrapItem,
  AspectRatio,
  toggleColorMode,
  colorMode,
  useColorMode,
} from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import "../css/navbar.css";
import Body_Jobpost from "../components/Body_Jobpost";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Homepage(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal", "whiteAlpha.50");
  const [data, setData] = useState([
    { title: "Sales Lady", company: "KCC Mall de Zamboanga" },
    { title: "Cashier", company: "SM Mindpro" },
  ]);

  return (
    <div>
      <Flex
        as="header"
        className="header"
        position="fixed"
        w="100%"
        bg={bgcolor}
        height="60px"
        minH={"60px"}
        px={20}
        boxShadow="md"
        p="6"
        pb="10"
      >
        <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          w="fit-content"
          {...props}
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
        <Text fontSize="xl" color="white" ml="10px" pl="50px">
          DSWD-PWD.
        </Text>
        <Box className="nav-list">
          <Link className="nav-items" color="white">
            Home
          </Link>
          <Link className="nav-items" color="white">
            About
          </Link>
          <Link className="nav-items" color="white">
            Jobs
          </Link>
          <Link className="nav-items" color="white">
            Contact
          </Link>
          <Link className="nav-items" color="white">
            Login
          </Link>
        </Box>
      </Flex>

      <Container bg={bgcolor} maxW={"100%"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text as={"span"} color={"orange.400"} ml="10%">
                PWD DSWD
              </Text>
              <br />
              <Text as={"span"} color={"orange.400"} ml="10%">
                Job Hunting!
              </Text>
            </Heading>
            <Text ml="10%" pl={"60px"}>
              PWD Job Hunting!! PWD Job Hunting!!PWD Job Hunting!!PWD Job
              Hunting!!PWD Job Hunting!!PWD Job Hunting!!PWD Job Hunting!!PWD
              Job Hunting!!PWD Job Hunting!!PWD Job Hunting!!PWD Job
              Hunting!!PWD Job Hunting!!PWD Job Hunting!!
            </Text>
            <Stack
              ml="10%"
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                px={9}
                colorScheme={"red"}
                bg={"orange"}
                color="white"
                _hover={{ bg: "green.500" }}
                boxShadow="lg"
                p="6"
                ml={"60px"}
              >
                Get started
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                //leftIcon={<PlayIcon h={4} w={4} color={"red.400"} />}
                _hover={{ bg: "green.500" }}
                boxShadow="lg"
                px={6}
              >
                Watch Signing Up Tutorial!
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <AspectRatio maxW="full" ratio={4 / 2}>
                <iframe
                  title="Tutorial"
                  src="https://youtu.be/mtixdJuLuRI"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Container maxW={"100%"} bg={useColorModeValue("gray.300", "gray.900")}>
        <VStack>
          <Stack maxW={"100%"} spacing="5px">
            <Text
              className="nav-items"
              color={"gray.600"}
              align={"center"}
              pt="50px"
              pb="50px"
              fontSize={"20px"}
            >
              Job Post
            </Text>
            <Wrap>
              <Box>
                <Select shadow="2xl" placeholder="Job type" w="*px">
                  <ption value="option1">Full type</ption>
                  <option value="option2">Contract</option>
                  <option value="option3">Permanent</option>
                  <option value="option4">Temporary</option>
                </Select>
              </Box>
              <Box>
                <Select placeholder="Company" w="*px">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box float="right">
                <Input
                  placeholder="Search"
                  w="*px"
                  color={"black"}
                  pl="3"
                  bg={"white"}
                />
              </Box>
            </Wrap>
          </Stack>
          <Wrap>
            <Container justify="center">
              {data.map((element, key) => {
                return (
                  <>
                    <Body_Jobpost
                      title={element.title}
                      company={element.company}
                    />
                  </>
                );
              })}
              <Center>
                <Stack direction={["column", "row"]} spacing="24px" pb="20px">
                  <Box>
                    <Button
                      size={"lg"}
                      px={9}
                      colorScheme={"red"}
                      bg={"orange"}
                      color="white"
                      _hover={{ bg: "green.500" }}
                      boxShadow="lg"
                      p="6"
                    >
                      1
                    </Button>
                  </Box>
                  <Button
                    size={"lg"}
                    px={9}
                    colorScheme={"red"}
                    bg={"gray"}
                    color="white"
                    _hover={{ bg: "green.500" }}
                    boxShadow="lg"
                    p="6"
                    ml={"60px"}
                  >
                    2
                  </Button>
                  <Button
                    size={"lg"}
                    px={9}
                    colorScheme={"red"}
                    bg={"gray"}
                    color="white"
                    _hover={{ bg: "green.500" }}
                    boxShadow="lg"
                    p="6"
                    ml={"60px"}
                  >
                    3
                  </Button>
                </Stack>
              </Center>
            </Container>

            <WrapItem>
              <Container
                mt="50px"
                h="500px"
                w="500px"
                bg="gray.200"
              ></Container>
            </WrapItem>
          </Wrap>
        </VStack>
      </Container>
      <Contact />
      <Footer />
      {/* <Wrap>
        <WrapItem bg="black">
          <Box>
            {data.map((element, key) => {
              return (
                <>
                  <JobPosting title={element.title} company={element.company} />
                </>
              );
            })}
          </Box>
        </WrapItem>
        <WrapItem bg="green" h="500px">
          <Box>
            <Stack pt="20px" spacing={1} align="right"></Stack>
            {data.map((element, key) => {
              return (
                <>
                  <JobPosting title={element.title} company={element.company} />
                </>
              );
            })}
          </Box>
        </WrapItem>
      </Wrap> */}
    </div>
  );
}

export default Homepage;
