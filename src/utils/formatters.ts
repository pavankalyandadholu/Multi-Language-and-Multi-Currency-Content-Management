type PhoneNumberFormatter = (num: string) => string;

interface PhoneFormatPatterns {
  [key: string]: PhoneNumberFormatter;
}

const phonePatterns: PhoneFormatPatterns = {
  'en-US': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `+1 (${match[1]}) ${match[2]}-${match[3]}` : num;
  },
  'en-GB': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);
    return match ? `+44 ${match[1]} ${match[2]} ${match[3]}` : num;
  },
  'fr': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    return match ? `+33 ${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}` : num;
  },
  'de': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    return match ? `+49 ${match[1]} ${match[2]} ${match[3]}` : num;
  },
  'es': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
    return match ? `+34 ${match[1]} ${match[2]} ${match[3]}` : num;
  },
  'it': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `+39 ${match[1]} ${match[2]} ${match[3]}` : num;
  },
  'ja': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    return match ? `+81 ${match[1]}-${match[2]}-${match[3]}` : num;
  },
  'zh': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    return match ? `+86 ${match[1]}-${match[2]}-${match[3]}` : num;
  },
  'ko': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    return match ? `+82 ${match[1]}-${match[2]}-${match[3]}` : num;
  },
  'ru': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `+7 ${match[1]} ${match[2]}-${match[3]}` : num;
  },
  'ar': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `+971 ${match[1]} ${match[2]} ${match[3]}` : num;
  },
  'hi': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `+91 ${match[1]} ${match[2]} ${match[3]}` : num;
  },
  'pt': (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    return match ? `+351 ${match[1]} ${match[2]} ${match[3]}` : num;
  }
};

export const formatPhoneNumber = (phoneNumber: string, locale: string = 'en-US'): string => {
  // Get the base locale (e.g., 'en' from 'en-US')
  const baseLocale = locale.split('-')[0];
  
  // Try to find formatter first by full locale, then by base locale
  const formatter = phonePatterns[locale] || phonePatterns[baseLocale] || phonePatterns['en-US'];
  
  try {
    return formatter(phoneNumber);
  } catch (error) {
    console.error('Error formatting phone number:', error);
    return phoneNumber; // Return original number if formatting fails
  }
};

// Helper function to validate phone numbers
export const isValidPhoneNumber = (phoneNumber: string, locale: string = 'en-US'): boolean => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  const lengthPatterns: { [key: string]: number } = {
    'en-US': 10, // +1 XXXXXXXXXX
    'en-GB': 11, // +44 XXXXXXXXXXX
    'fr': 9,    // +33 XXXXXXXXX
    'de': 11,   // +49 XXXXXXXXXXX
    'es': 9,    // +34 XXXXXXXXX
    'it': 10,   // +39 XXXXXXXXXX
    'ja': 10,   // +81 XXXXXXXXXX
    'zh': 11,   // +86 XXXXXXXXXXX
    'ko': 11,   // +82 XXXXXXXXXXX
    'ru': 10,   // +7 XXXXXXXXXX
    'ar': 10,   // +971 XXXXXXXXX
    'hi': 10,   // +91 XXXXXXXXXX
    'pt': 10,   // +351 XXXXXXXXX
    default: 10
  };

  const requiredLength = lengthPatterns[locale] || lengthPatterns.default;
  return cleaned.length === requiredLength;
};

// Format date according to locale
export const formatDate = (date: Date, locale: string): string => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};