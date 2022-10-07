import Sidebar from "../components/Sidebar";
import { Flex, Text, Box, Link, IconButton, VStack } from "@chakra-ui/react";

import AdminPwdComponents from "../components/AdminPwdComponents";

export default function Home() {
  return (
    <div>
      <Flex w="100%">
        <Sidebar />
        <VStack p="20px" w="100%">
          <Flex>
            <AdminPwdComponents />
          </Flex>
          PWD
          <Flex></Flex>
        </VStack>
      </Flex>
    </div>
  );
}
