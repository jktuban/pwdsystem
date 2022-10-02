import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
  Badge,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Square,
} from "@chakra-ui/react";

import Footer from "../components/Footer";
import { SmallCloseIcon } from "@chakra-ui/icons";
import "../css/navbar.css";
import Body_Jobpost from "./Body_Jobpost";

function PwdProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"left"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          ml={10}
          spacing={6}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.900")}
          rounded={"xl"}
          boxShadow={"lg"}
          pl={2}
          my={12}
        >
          <Heading
            pt="20px"
            pl="20px"
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl" }}
          >
            My Profile
          </Heading>
          <FormControl id="userName">
            <FormLabel></FormLabel>
            <Stack pl="22px" direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar
                  size="2xl"
                  src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/301128542_3292773417674320_4769438194347416596_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3RuYqzC7zlgAX9rNpKp&_nc_ht=scontent.fmnl4-1.fna&oh=00_AT9_FwKmxLHOfj8TIUg81RrcVAQsQ1FR0xCyHypo02cbwg&oe=633A4F6E"
                ></Avatar>
              </Center>
              <Center w="full">
                <Box borderRadius="md" px={4}>
                  <FormControl id="userName">
                    <FormLabel>Tuban, James Karl, C.</FormLabel>
                    <FormLabel>Age: 20</FormLabel>
                    <FormLabel>Address: Guiwan Z.C.</FormLabel>
                  </FormControl>
                </Box>
              </Center>
            </Stack>
          </FormControl>
          <Center>
            <Text fontStyle={"italic"} color={"gray.700"} maxW={"80%"}>
              Hi, I’m James and I’m a software engineer. My current focus is
              optimizing customer experience. Nice to meet you all. My name is
              Michael and I’m the creative director. I work in the Brooklyn
              office.
            </Text>
          </Center>
          <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
              ml={20}
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #music
            </Badge>
          </Stack>

          <FormControl id="email">
            <FormLabel>Contact Information</FormLabel>
            <Box borderRadius="md" px={4}>
              <FormControl id="userName">
                <FormLabel>Jtuban4@gmail.com</FormLabel>
                <FormLabel>09673890231</FormLabel>
                <FormLabel>87000</FormLabel>
              </FormControl>
              <Button ref={btnRef} onClick={onOpen}>
                My Documents
              </Button>
            </Box>
          </FormControl>

          <Stack spacing={6} direction={["column", "row"]} pb="20px">
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Edit
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
        <Stack w="500px" mt="-24" ml={10}>
          <Box
            mt="20"
            ml={10}
            spacing={6}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.900")}
            rounded={"xl"}
            boxShadow={"lg"}
            pl={2}
            my={12}
          >
            <Text
              pt="20px"
              pl="20px"
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl" }}
            >
              Job Match
            </Text>
            <Body_Jobpost />
          </Box>
        </Stack>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
export default PwdProfile;
