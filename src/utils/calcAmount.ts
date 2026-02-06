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

    const installmentValue = amount / installmentNumber;
    return {
        amount,
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
    
    const totalProducts = data.products.reduce((total, product) => total + product.currentPrice, 0);
    const pixTax =  calcPercent(totalProducts, data.pixTaxPercent);
    const installmentTax =  calcPercent(totalProducts, data.installmentTax);
    const extraInstallmentTax = calcPercent(totalProducts, data.installmentTaxExtra);

    let taxCakto = 0;
    if (data.paymentMethod === "pix") {
        taxCakto = pixTax;
    } else if (data.paymentMethod === "card") {
        taxCakto = installmentTax + extraInstallmentTax;
    }

    const sellerReceive = totalProducts - taxCakto;
    return {
        totalProducts,
        sellerReceive,
        taxCakto,
        pixTax,
        installmentTax,
    };
}