import React, { useState } from "react";
import {
  Link,
  Box,
  Text,
  Button,
  Heading,
  Avatar,
  Stack,
  Center,
  useColorModeValue,
  Badge,
  Wrap,
  Select,
  Input,
  Flex,
  VStack,
} from "@chakra-ui/react";
import kcc from "../images/kcc.png";

function Body_Jobpost(props) {
  const [data, setData] = useState([
    { title: "Sales Lady", company: "KCC Mall de Zamboanga" },
    { title: "Cashier", company: "SM Mindpro" },
  ]);

  return (
    <div>
      <VStack>
        <Stack pt="20px" spacing={1}></Stack>
        <Stack>
          <Center py={5} w="100%">
            <Box
              w="100%"
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={""}
            >
              <Avatar
                size={"xl"}
                src={kcc}
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {props.title}
              </Heading>
              <Text fontWeight={600} pt="10px" color={"gray.600"} mb={4}>
                {props.company}
              </Text>
              <Text
                textAlign={""}
                color={useColorModeValue("gray.700", "gray.400")}
                px={2}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or Actress, musician, songwriter and artist. PM for work
                inquires or{" "}
                <Link href={"#"} color={"blue.400"}>
                  #tag
                </Link>{" "}
                me in your posts
                <br></br>
                <br></br>
              </Text>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("yellow.400", "yellow.800")}
                fontWeight={"400"}
              >
                15,000 php - 20,000 php / month
              </Badge>

              <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
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

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  View
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Apply
                </Button>
              </Stack>
            </Box>
          </Center>
        </Stack>
      </VStack>
    </div>
  );
}

export default Body_Jobpost;
