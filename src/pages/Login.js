import {
  Button,
  Input,
  Center,
  Box,
  FormLabel,
  Text,
  useDisclosure,
  Image,
  Grid,
  GridItem,
  Circle,
  Link,
} from "@chakra-ui/react";
import "../css/login.css";
import loginLogo from "../images/login.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import api from "../restapi/api";

import React, { useEffect, useState } from "react";

function Login(props) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    let response = await api.get("users.php");

    setUsers(response.data);
    console.log(response.data);
  };

  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={3}>
          <Center>
            <Box style={{ marginTop: "150px" }}>
              <Image src={loginLogo} w="400px" />
            </Box>
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Box py={10} px={20} className="login-container">
            <form>
              <Center>
                <Circle
                  size="100px"
                  bgGradient="linear(to-b, blue.200, teal.200, teal.50)"
                  color="white"
                ></Circle>
              </Center>
              <Text fontSize="2xl" textAlign="center" my={5}>
                WELCOME
              </Text>
              <Box mb={3}>
                <Text>Username</Text>
                <Input type="email" bg="white" size="sm" required />
              </Box>

              <Text>Password</Text>
              <Input type="password" bg="white" size="sm" required />
              <Link href="/signup" fontSize="xs" float="left" mt={1}>
                Create Account
              </Link>
              <Link fontSize="xs" float="right" mt={1}>
                Forgot Password?
              </Link>
              <Box w="80%" style={{ margin: " 0 auto" }}>
                <Button
                  type="submit"
                  colorScheme="teal"
                  mt={10}
                  w="100%"
                  onClick={onOpen}
                  borderRadius="full"
                >
                  LOGIN
                </Button>
                <Button
                  leftIcon={<FcGoogle />}
                  variant="outline"
                  mt={5}
                  w="100%"
                  onClick={onOpen1}
                  colorScheme="red"
                >
                  Login with Google
                </Button>
                <Button
                  leftIcon={<FaFacebookF />}
                  variant="outline"
                  mt={5}
                  w="100%"
                  onClick={onOpen1}
                  colorScheme="blue"
                >
                  Login with Facebook
                </Button>

                <Button onClick={fetchUsers} colorScheme="blue">
                  Fetch
                </Button>
              </Box>

              {/* <Center mt={10}>
              <Stack direction="row">
                <Switch colorScheme="red" />
                <Switch colorScheme="teal" />
              </Stack>
            </Center> */}
            </form>
          </Box>
        </GridItem>
      </Grid>

      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {/* {JSON.stringify(users)} */}
          {users.length === 0 ? "No data available" : "Yes"}
        </tbody>
      </table>

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>MODAL</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen1} onClose={onClose1}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Header111</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>MODAL1</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose1}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </div>
  );
}

export default Login;
