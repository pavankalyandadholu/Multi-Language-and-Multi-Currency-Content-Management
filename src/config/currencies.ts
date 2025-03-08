import { Currency } from '../types';

export const currencies: Currency[] = [
  { code: 'USD', symbol: '$', position: 'before' },
  { code: 'EUR', symbol: '€', position: 'after' },
  { code: 'GBP', symbol: '£', position: 'before' },
  { code: 'JPY', symbol: '¥', position: 'before' },
  { code: 'INR', symbol: '₹', position: 'before' },
  { code: 'AUD', symbol: 'A$', position: 'before' },
  { code: 'CAD', symbol: 'C$', position: 'before' },
  { code: 'CHF', symbol: 'CHF', position: 'before' },
  { code: 'CNY', symbol: '¥', position: 'before' },
  { code: 'RUB', symbol: '₽', position: 'after' },
  { code: 'KRW', symbol: '₩', position: 'before' },
  { code: 'BRL', symbol: 'R$', position: 'before' },
];