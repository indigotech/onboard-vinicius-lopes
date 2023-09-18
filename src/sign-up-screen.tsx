import { useState } from "react";
import { InputSimple } from "./input-simple";
import { Button } from "react-native";



export function SignUpScreen(): JSX.Element {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState<Date>();
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    

    return (
        <>
            <InputSimple 
                inputHeader="ID"
                value={id}
                onTextChange={setId}
            />
            <InputSimple 
                inputHeader="Nome"
                value={name}
                onTextChange={setName}
            />
            <InputSimple 
                inputHeader="Telefone"
                value={phone}
                onTextChange={setPhone}
            />
            {/* <InputSimple 
                inputHeader=""
                value={birth}
                onTextChange={setBirth}
            /> */}
            <InputSimple 
                inputHeader="E-mail"
                value={email}
                onTextChange={setEmail}
            />
            <InputSimple 
                inputHeader="Função"
                value={role}
                onTextChange={setRole}
            />
            <Button title="Adicionar Usuário"/>
        </>
    );
}