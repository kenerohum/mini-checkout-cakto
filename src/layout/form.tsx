'use client';

import Input from "@/components/input";
import Product from "@/components/product";
import useCostumerData from "@/contexts/useCostumerData";
import useOrder from "@/contexts/useOrder";
import usePayment from "@/contexts/usePayment";
import { calcTotal, formatCurrency } from "@/utils/calcAmount";
import { useState } from "react";

interface UserData {
    email: string;
    cpf: string;
}

export default function Form() {

    const { costumerData, error } = useCostumerData();


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        useCostumerData.setState((prev) => ({
            ...prev,
            costumerData: {
                ...prev.costumerData,
                [name]: value
            }
        }));
    };

    return (
        <div className="w-full  ">
            <h1 className="mb-3 text-lg font-bold">Informações pessoais</h1>
            <div className="bg-secondary-background border-border-background border rounded-xl p-5 gap-4 flex flex-col">
                <Input
                    id="email"
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={costumerData.email}
                    onChange={handleInputChange}
                    error={error?.email}
                />
                <Input
                    id="cpf"
                    placeholder="CPF"
                    mask="cpf"
                    name="cpf"
                    value={costumerData.cpf}
                    onChange={handleInputChange}
                    error={error?.cpf}
                />
            </div>

        </div>
    );
}