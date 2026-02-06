export const MASKS = {
    cpf: (value: string): string => {
        const numericValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

        let part1 = '';
        let part2 = '';
        let part3 = '';
        let part4 = '';

        if (numericValue.length > 9) {
            part1 = numericValue.substring(0, 3);
            part2 = numericValue.substring(3, 6);
            part3 = numericValue.substring(6, 9);
            part4 = numericValue.substring(9, 11);
            return `${part1}.${part2}.${part3}-${part4}`;
        } else if (numericValue.length > 6) {
            part1 = numericValue.substring(0, 3);
            part2 = numericValue.substring(3, 6);
            part3 = numericValue.substring(6, 9);
            return `${part1}.${part2}.${part3}`;
        } else if (numericValue.length > 3) {
            part1 = numericValue.substring(0, 3);
            part2 = numericValue.substring(3, 6);
            return `${part1}.${part2}`;
        } else {
            return numericValue;
        }
    },
    "card-number": (cardNumber: string): string => {
        // Remove caracteres não numéricos para padronizar a entrada
        const sanitized = cardNumber.replace(/\D/g, '');

        // Divide o número em grupos de 4 dígitos
        return sanitized.replace(/(\d{4})/g, '$1 ').trim();
    },
    "card-data": (date: string): string => {
        // Remove caracteres não numéricos para padronizar a entrada
        const sanitized = date.replace(/\D/g, '');

        // Formata a data como 'AA/MM'
        return sanitized.replace(/(\d{2})(\d{2})/, '$1/$2');
    },
};


