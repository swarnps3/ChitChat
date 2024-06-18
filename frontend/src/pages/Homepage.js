import React from "react";
import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
const Homepage = () => {
  return (
    //  Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid. i.e. Keep our page responsive
    <Container maxW="xl" color="white" centerContent>
      {/* We are using Box we can write css directly inside the Box */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text color={"black"} fontSize={"4xl"} fontFamily={"Work Sans"}>
          ChitChat
        </Text>
      </Box>
      <Box
        p={4}
        bg={"white"}
        w={"100%"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant='soft-rounded' color={"black"}>
  <TabList>
    <Tab width={"50%"}>Log in</Tab>
    <Tab width={"50%"}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
