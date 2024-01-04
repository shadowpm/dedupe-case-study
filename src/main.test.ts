import { travelAgencyConvertor, Ticket } from './main';

describe('Travel agency convertor function', () => {
  it('In case the returned value is an string of unique cities', () => {
    const tikets: Ticket[] = [
      { source: 'Amsterdam', destination: 'Berlin' },
      { source: 'Paris', destination: 'London' },
      { source: 'London', destination: 'Amsterdam' },
    ];

    const result = travelAgencyConvertor(tikets);
    expect(result.split(', ').sort()).toEqual(
      ['Amsterdam', 'Berlin', 'Paris', 'London'].sort(),
    );
  });
  it('In case the input value is an empty array', () => {
    const tikets: Ticket[] = [];

    const result = travelAgencyConvertor(tikets);
    expect(result).toEqual('');
  });
});
