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

export const calcTotal = (products: { originalPrice: number; currentPrice: number }[]) => {
    return {
        total: products.reduce((total, product) => total + product.currentPrice, 0)
    };
}