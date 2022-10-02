import Sidebar from "../components/Sidebar";
import { Flex, Text, Box, Link, IconButton, VStack } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import AddJobPost from "../components/AddJobPost";
import AdminCompany from "../components/AdminCompany";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Flex w="100%">
        <Sidebar />
        <VStack p="20px" w="100%">
          <Flex>
            <AddJobPost />
          </Flex>
          <Flex>
            <AdminCompany />
          </Flex>
        </VStack>
      </Flex>
    </div>
  );
}
