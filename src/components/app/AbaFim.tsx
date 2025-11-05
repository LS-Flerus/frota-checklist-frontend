import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react/box";
import { Fieldset } from "@chakra-ui/react/fieldset";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react/checkbox";
import { For } from "@chakra-ui/react/for";
import { Grid, GridItem } from "@chakra-ui/react/grid";
import { Text, Textarea } from "@chakra-ui/react";

const AbaFim = () => {
    
    const [itensSelecionados, setItensSelecionados] = useState<string[]>([]);
    
    const handleCheckboxChange = (checked: boolean, value: string) => {
        setItensSelecionados((prev) =>
            checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
    };

    useEffect(() => {
            console.log("Itens defeituosos:", itensSelecionados);
            sessionStorage.setItem("itensFim", itensSelecionados.join(",")) 
    }, [itensSelecionados]);


    return (
        <Box mt={6} h="80vh">
            <Grid templateColumns={"1fr 1fr"} gap={4} mt={6}>
                <GridItem>
                    <Box bg={"green.900"} p={4} borderRadius="lg" h="100%" maxH={"50vh"} overflow={"auto"}>
                        <Fieldset.Root>
                            <Fieldset.Legend fontSize="sm" mb="2" color={"yellow"}>
                                Selecione itens defeituosos
                            </Fieldset.Legend>
                            <CheckboxGroup name="itensInicio">
                                <Fieldset.Content>
                                <For each={["Pneus", "Freios", "Luzes", "Suspensão"]}>
                                    {(value) => (
                                    <Checkbox.Root 
                                        key={value} 
                                        value={value} 
                                        onCheckedChange={(details) => handleCheckboxChange(details.checked === true, value)}
                                    >
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control cursor={"pointer"} borderColor={"white"}/>
                                        <Checkbox.Label color={"yellow"}>{value}</Checkbox.Label>
                                    </Checkbox.Root>
                                    )}
                                </For>
                                </Fieldset.Content>
                            </CheckboxGroup>
                        </Fieldset.Root>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={"green.900"} p={4} borderRadius="lg" h="100%" maxH={"50vh"} overflow={"auto"}>
                        <Text color={"yellow"}>Quais outros problemas foram encontrados ao longo da viagem?</Text>
                        <Textarea placeholder="Escreva aqui" mt={2} bg={"gray"}/>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default AbaFim;