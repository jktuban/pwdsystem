import {
  Flex,
  Text,
  Center,
  SimpleGrid,
  Box,
  Link,
  IconButton,
  VStack,
  Feature,
  Heading,
  HStack,
  Spacer,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import AdminPwdComponents from "../components/AdminPwdComponents";
import AdminCompanyComponents from "../components/AdminCompanyComponents";
import AddJobPost from "../components/AddJobPost";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [user, setUser] = useState([]);

  const getUsers = () => {
    axios.get('http://localhost/pwd-backend/get_users.php').then((response) => {setUser(response.data)})
}

useEffect(()=> {
    getUsers();
}, [user])

  return (
    <div>
      <Flex w="100%">
        <Sidebar />
        <VStack p="20px" w="100%">
          <Flex>
            <Center>
              <Box w={500} minW={1155} maxW="full" ml="16%" mr="">
                <SimpleGrid
                  bg="gray.50"
                  columns={{ sm: 3, md: 1 }}
                  spacing="8"
                  p="10"
                  textAlign="center"
                  rounded="lg"
                  color="gray.400"
                >
                  <Box boxShadow="md" p="50" rounded="md" bg="white">
                    <HStack>
                      <Heading>PWD records</Heading>
                      <Spacer />
                      <AddJobPost />
                    </HStack>
                        
          <Table>
            <Thead>
              <Th>ID</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Role</Th>
            </Thead>
            <Tbody>
                {user.map((el) => {
                    return (
                        <> 
                        <Tr>
                          <Td>{el.id}</Td><Td>{el.email}</Td>
                            <Td>{el.password}</Td>
                            <Td>{el.role}</Td></Tr>
                            
                        </>
                    )
                })}
               
            </Tbody>
          </Table>
       
                  </Box>
                  <Box w="full" boxShadow="md" p="50" rounded="md" bg="white">
                    <AdminPwdComponents />
                  </Box>

                  <Box boxShadow="md" p="50" rounded="md" bg="white"></Box>
                </SimpleGrid>
              </Box>
            </Center>
          </Flex>
          PWD
          <Flex></Flex>
        </VStack>
      </Flex>
    </div>
  );
}
