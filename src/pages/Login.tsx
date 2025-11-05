import { Button } from "@chakra-ui/react/button";
import { Card } from "@chakra-ui/react/card";
import { Input } from "@chakra-ui/react/input";
import { Stack } from "@chakra-ui/react/stack";
import { PasswordInput } from "../components/ui/password-input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    
    const navigate = useNavigate();

    const [passwordValue,setPasswordValue] = useState("");
    const [userValue,setUserValue] = useState("");

    const handleLogin = () => {
        navigate("/home/")
    }

    return (
        <Stack gap="4" direction="row" wrap="wrap">
            <Card.Root width="320px">
                <Card.Body gap="2">
                <Card.Title mb="2">Login</Card.Title>
                    <Stack gap="4">
                        <Input placeholder="Usuário" variant="subtle" value={userValue} onChange={(e) => setUserValue(e.target.value)}/>
                        <PasswordInput placeholder="Senha" size="md" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}/>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline" onClick={handleLogin}>Entrar</Button>
                </Card.Footer>
            </Card.Root>
        </Stack>
    )
}

export default Login;