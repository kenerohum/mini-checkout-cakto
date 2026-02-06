import useCostumerData from "@/contexts/useCostumerData";
import Input from "../components/input";

export default function Card() {

    const { costumerData, inputChange, error, setError } = useCostumerData();

    return (
        <div className="gap-4 flex flex-col mb-4">
            <Input
                label="Número do cartão"
                placeholder="0000 0000 0000 0000"
                mask="card-number"
                name="cardNumber"
                maxLength={19}
                value={costumerData.cardNumber}
                onChange={(e) => {
                    if (e.target.value.replace(/\s/g, '').length < 16) {
                        setError("cardNumber", 'Número do cartão incompleto.')
                    }
                    else{
                        setError("cardNumber", '')
                    }
                    inputChange("cardNumber", e.target.value)
                }}
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
                    onChange={(e) => {
                        if (e.target.value.replace(/\s/g, '').length < 5) {
                            setError("cardExpiry", 'Data de validade incompleta.')
                        }
                        else{
                            setError("cardExpiry", '')
                        }
                        inputChange("cardExpiry", e.target.value)
                    }}
                    error={error?.cardExpiry}
                />
                <Input
                    label="CVC"
                    placeholder="000"
                    maxLength={3}
                    className="w-24"
                    name="cardCVC"
                    value={costumerData.cardCVC}
                    onChange={(e) => {
                        if (e.target.value.replace(/\s/g, '').length < 3) {
                            setError("cardCVC", 'CVC incompleto.')
                        }
                        else{
                            setError("cardCVC", '')
                        }
                        inputChange("cardCVC", e.target.value)
                    }}
                    error={error?.cardCVC}
                />
            </div>
        </div>
    );
}