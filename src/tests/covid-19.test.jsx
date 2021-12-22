import covidAFReducer, { addCountry } from '../redux/covid-19/covid-19';

test('it should return initialstate of the app', () => {
  expect(covidAFReducer(undefined, {})).toEqual({
    countries: [],
    totalConfirmed: 0,
  });
});

test('it should handle adding countries covid record to the store', () => {
  const previousState = {
    countries: [],
    totalConfirmed: 0,
  };

  const newState = covidAFReducer(
    previousState,
    addCountry({
      name: 'Nigeria',
      id: 'Nig',
      total_confirmed: 100,
    })
  );
  expect(newState).toEqual({
    countries: [
      {
        name: 'Nigeria',
        id: 'Nig',
        total_confirmed: 100,
      },
    ],
    totalConfirmed: 0,
  });
});
