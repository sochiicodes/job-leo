export const formatCurrency = (amount: number): string => {
    if (amount >= 1_000_000) {
        return `${(amount / 1_000_000).toFixed(1).replace(".0", "")}m`;
    }

    if (amount >= 1_000) {
        return `${(amount / 1_000).toFixed(1).replace(".0", "")}k`;
    }

    return amount.toString();
};