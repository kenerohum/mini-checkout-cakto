'use client';

import Input from "@/components/input";
import Product from "@/components/product";
import useCostumerData from "@/contexts/useCostumerData";
import useOrder from "@/contexts/useOrder";
import usePayment from "@/contexts/usePayment";
import { calcTotal, formatCurrency } from "@/utils/calcAmount";
import validateCPF from "@/utils/cpfValidator";
import { useState } from "react";

interface UserData {
    email: string;
    cpf: string;
}

export default function Form() {

    const { costumerData, error, inputChange, setError } = useCostumerData();

    return (
        <div className="w-full  ">
            <h1 className="mb-3 text-lg font-bold">Informações pessoais</h1>
            <div className="bg-secondary-background border-border-background border rounded-xl p-5 gap-4 flex flex-col">
                <Input
                    id="email"
                    placeholder="@"
                    label="E-mail"
                    type="email"
                    name="email"
                    value={costumerData.email}
                    onChange={(e) => {
                        if (!e.target.value || !/\S+@\S+\.\S+/.test(e.target.value)) {
                            setError("email", 'Por favor, insira um e-mail válido.')
                        }
                        else{
                            setError("email", '')
                        }
                        inputChange("email", e.target.value)
                    }}
                    error={error?.email}
                />
                <Input
                    id="cpf"
                    placeholder="___.___.___-__"
                    label="CPF"
                    mask="cpf"
                    name="cpf"
                    value={costumerData.cpf}
                    onChange={(e) => {
                        if (validateCPF(e.target.value) === false) {
                            setError("cpf", 'Por favor, insira um CPF válido.')
                        }
                        else{
                            setError("cpf", '')
                        }
                        inputChange("cpf", e.target.value)
                    }}
                    error={error?.cpf}
                />
            </div>

        </div>
    );
}