export const formatCurrency = (value: number, locale = 'pt-BR', currency = 'BRL') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value);
}

export const calcDiscountPercent = (originalPrice: number, currentPrice: number, locale = 'pt-BR', currency = 'BRL') => {
    if (originalPrice <= 0 || currentPrice >= originalPrice) {
        return formatCurrency(0, locale, currency);
    }
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return `${discount.toFixed(0)}%`;
}

const calcPercent = (amount: number, percent: number) => {
    return (amount * percent) / 100;
}

export const calcInstallment = (amount: number, installmentNumber: number, installmentTaxExtra: number) => {
    const totalInstallmentTax = calcPercent(amount, installmentTaxExtra);
    const totalAmount = amount + totalInstallmentTax;
    const installmentValue = totalAmount / installmentNumber;
    return {
        totalAmount,
        installmentValue,
    };
}

export const calcTotal = (data: {
    products: { currentPrice: number }[],
    paymentMethod: "pix" | "card",
    pixTaxPercent: number,
    installmentNumber: number;
    installmentTax: number;
    installmentTaxExtra: number;
}) => {
    
    const total = data.products.reduce((total, product) => total + product.currentPrice, 0);
    const pixTax =  calcPercent(total, data.pixTaxPercent);
    const extraInstallmentTax = calcPercent(total, data.installmentTaxExtra);
    const installmentTax =  calcPercent(total, data.installmentTax);

    let taxCakto = 0;
    if (data.paymentMethod === "pix") {
        taxCakto = pixTax;
    } else if (data.paymentMethod === "card") {
        taxCakto = installmentTax ;
    }

    return {
        totalProducts: total,
        totalCostumer: total + (data.paymentMethod === "card" ? extraInstallmentTax : 0),
        taxCakto,
        sellerReceive: total - taxCakto,
        
        pixTax: pixTax,
        installmentTax: installmentTax,
    };
}