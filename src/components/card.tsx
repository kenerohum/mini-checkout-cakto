import useCostumerData from "@/contexts/useCostumerData";
import Input from "./input";

export default function Card() {

    const { costumerData, handleInputChange, error } = useCostumerData();

    return (
        <div className="gap-4 flex flex-col mb-4">
            <Input
                label="Número do cartão"
                placeholder="0000 0000 0000 0000"
                mask="card-number"
                name="cardNumber"
                maxLength={19}
                value={costumerData.cardNumber}
                onChange={handleInputChange}
                error={error?.cardNumber}
            />
            <div className="flex gap-3">
                <Input
                    label="Validade"
                    placeholder="MM/AA"
                    mask="card-data"
                    maxLength={5}
                    className="flex-1"
                    name="cardExpiry"
                    value={costumerData.cardExpiry}
                    onChange={handleInputChange}
                    error={error?.cardExpiry}
                />
                <Input
                    label="CVC"
                    placeholder="000"
                    maxLength={3}
                    className="w-24"
                    name="cardCVC"
                    value={costumerData.cardCVC}
                    onChange={handleInputChange}
                    error={error?.cardCVC}
                />
            </div>
        </div>
    );
}