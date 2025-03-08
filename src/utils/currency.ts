import { currencies } from '../config/currencies';

export async function formatCurrency(amount: number, currencyCode: string, prevCurrencyCode: string = "USD"): Promise<string> {
  const prevCurrency = currencies.find(c => c.code === prevCurrencyCode);
  const targetCurrency = currencies.find(c => c.code === currencyCode);

  if (!prevCurrency || !targetCurrency) return `${amount}`;

  try {
    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${prevCurrencyCode}&to=${currencyCode}`);
    const data = await response.json();
    if (!data.rates || !data.rates[currencyCode]) {
      throw new Error("Conversion rate not found");
    }

    const convertedAmount = data.rates[currencyCode];

    // Format the converted amount
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
    });

    return formatter.format(convertedAmount);
  } catch (error) {
    console.error("Currency conversion error:", error);
    return `${amount} ${prevCurrencyCode}`; // Fallback to original amount
  }
}
