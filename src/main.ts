export type Ticket = { source: string; destination: string };

export const travelAgencyConvertor = (tikets: Ticket[]): string => {
  const result = new Set();
  for (let i = 0; i < tikets.length; i++) {
    result.add(tikets[i].destination);
    result.add(tikets[i].source);
  }

  return Array.from(result).join(', ');
};
