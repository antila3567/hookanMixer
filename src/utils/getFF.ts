type StyleFont = 100 | 200 | 300 | 400 | 500 | 700 | 'LOGO';

const getWeight = (str: StyleFont) => {
  switch (str) {
    case 100:
      return 'Thin';
    case 200:
      return 'UltraLight';
    case 300:
      return 'Light';
    case 400:
      return 'Regular';
    case 500:
      return 'Medium';
    case 700:
      return 'Bold';
    case 'LOGO':
      return 'LOGO';
  }
};

export const getFF = (style: StyleFont, head: boolean = false) => {
  const weight = getWeight(style);
  if (weight === 'LOGO') {
    head = true;
  }

  return `e-Ukraine${head ? 'Head' : ''}-${weight}`;
};
