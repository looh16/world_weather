const CountriesData = () => Promise.resolve({
  data: [
    {
      common: 'Finland',
      official: 'Republic of Finland',
      nativeName: {
        fin: {
          official: 'Suomen tasavalta',
          common: 'Suomi',
        },
        swe: {
          official: 'Republiken Finland',
          common: 'Finland',
        },
      },
    },
  ],
});

export default CountriesData;
