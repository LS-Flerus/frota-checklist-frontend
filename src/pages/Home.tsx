import { Button } from "@chakra-ui/react/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { Tabs } from "@chakra-ui/react/tabs";
import AbaInicio from "../components/app/AbaInicio";
import AbaFim from "../components/app/AbaFim";

const Home = () => {
    
    const navigate = useNavigate();

    const [passwordValue,setPasswordValue] = useState("");
    const [userValue,setUserValue] = useState("");

    const handleLogout = () => {
        navigate("/login/")
    }

    return (
        <Box h={"100vh"} overflowY={"auto"}>
            <Box pl="15vh" pt="5vh" pr="15vh">
                <Flex justify="space-between" align="center">
                    <Tabs.Root defaultValue="inicio" variant="plain" w="100%">
                        <Flex justify="space-between" align="center" mb={0}>
                            <Tabs.List
                                display="flex"
                                gap={2}
                                p={1}
                                rounded="l3"
                                bgColor={"green.900"}
                                color={"white"}
                            >
                                <Tabs.Trigger value="inicio">
                                Início
                                </Tabs.Trigger>
                                <Tabs.Trigger value="fim">
                                Fim
                                </Tabs.Trigger>
                                <Tabs.Indicator rounded="l2" bgColor={"green.900"} />
                            </Tabs.List>

                            <Button
                                bg={"green.900"}
                                size="xl"
                                color={"white"}
                                onClick={handleLogout}
                                ml={5}
                            >
                                Sair
                            </Button>
                        </Flex>

                        <Tabs.Content value="inicio" mt={0}>
                            <AbaInicio/>
                        </Tabs.Content>
                        <Tabs.Content value="fim" mt={0}>
                            <AbaFim/>
                        </Tabs.Content>
                    </Tabs.Root>
                </Flex>
            </Box>
        </Box>
    )
}

export default Home;