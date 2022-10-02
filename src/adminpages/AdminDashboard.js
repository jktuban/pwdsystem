import Sidebar from "../components/Sidebar";
import { Flex, Text, Box, Link, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Flex w="100%">
        <Sidebar />
        <Flex
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        ></Flex>
        <div>Heys</div>
      </Flex>
    </div>
  );
}
