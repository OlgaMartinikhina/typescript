import Movie from '../domain/Movie';


test('new card should be empty', () => {
  const resiver = new Movie(5678, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', 137, 300);

  expect(resiver).toEqual({
    country: "США",
    duration: 137,
    genre: "фантaстика, боевик, фэнтези, приключения",
    id: 5678,
    name: "Мстители",
    price: 300,
    slogan: "Avengers Assemble!",
    year: 2012
  });
});