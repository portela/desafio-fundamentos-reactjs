const formatValue = (value: number | string): string => {
  const valueNumber = typeof value === 'number' ? value : Number(value);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(valueNumber);
};

export default formatValue;
