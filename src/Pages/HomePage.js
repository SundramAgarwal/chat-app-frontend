import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="2xl" fontFamily="work sans" color="black">
          Welcome to Live-Chat
        </Text>
      </Box>
      <Box
        p={4}
        bg="white"
        w="100%"
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1rem">
            <Tab
              width={"100%"}
              m="0 3px 0 10rem"
              css={{
                "@media (max-width: 576px)": {
                  width: "100%",
                  margin: "0",
                },
              }}
            >
              Login
            </Tab>
            <Tab
              width={"100%"}
              m="0 10rem 0 2px"
              css={{
                "@media (max-width: 576px)": {
                  width: "100%",
                  margin: "0",
                },
              }}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
