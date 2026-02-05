import Button from "@/components/button";
import useCostumerData from "@/contexts/useCostumerData";

export default function Payment() {
    const { validate } = useCostumerData();

    const handlePayment = () => {
        const isValid = validate();
        if (!isValid) {
            return;
        }
        // Proceed with payment processing
    }
    return (
        <div className="mb-20">
            <Button className="mt-5" onClick={handlePayment}>
                Pagar
            </Button>
        </div>
    )
}