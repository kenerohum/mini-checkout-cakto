'use client';

import Input from "@/components/input";
import Product from "@/components/product";
import useOrder from "@/contexts/use-order";
import usePayment from "@/contexts/use-payment";
import { calcTotal, formatCurrency } from "@/utils/calcAmount";
import { useState } from "react";

interface UserData {
    email: string;
    cpf: string;
}

export default function Form() {
    const { order } = useOrder();
    const { paymentMethod, installment } = usePayment();

    const [userData, setUserData] = useState<UserData>({
        email: '',
        cpf: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="w-full  ">
            <h1 className="mb-3 text-lg font-bold">Informações pessoais</h1>
            <div className="bg-secondary-background border-border-background border rounded-xl p-5 gap-4 flex flex-col">
                <Input
                    placeholder="E-mail"
                    type="email" name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                />
                <Input
                    placeholder="CPF"
                    mask="cpf" name="cpf"
                    value={userData.cpf}
                    onChange={handleInputChange}
                />
            </div>

        </div>
    );
}