const palindrome = (str) => str === str.split('').reverse().join('');
const pal = 'шалаш';
console.log(palindrome(pal));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const searchMatches = (str) => {
  return data
    .filter(
      (item) =>
        item.country.toLowerCase().includes(str.toLowerCase()) ||
        item.city.toLowerCase().includes(str.toLowerCase()) ||
        item.hotel.toLowerCase().includes(str.toLowerCase()),
    )
    .map((item) => `${item.country}, ${item.city}, ${item.hotel}`);
};
console.log(searchMatches('germ'));
