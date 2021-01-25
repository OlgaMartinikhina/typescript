import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('checking method totalPrice', () => {
  const cart = new Cart();
  cart.add(new Book(9054, 'Harry Potter', 'J. K. Rolling', 550, 2010));
  cart.add(new MusicAlbum(3009, 'On Stage', 'Elvis Presley', 200));
  cart.add(new Movie(5678, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', 137, 300));
  expect(cart.totalPrice()).toBe(1050);
});

test('checking method totalPriceWithDiscount', () => {
  const cart = new Cart();
  cart.add(new Book(9054, 'Harry Potter', 'Joann Rolling', 550, 2010));
  cart.add(new MusicAlbum(3009, 'On Stage', 'Elvis Presley', 200));
  cart.add(new Movie(5678, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', 137, 300));
  expect(cart.totalPriceWithDiscount(10)).toBe(945);
});

test('checking method deleteItem', () => {
  const cart = new Cart();
  cart.add(new Book(9054, 'Harry Potter', 'J. K. Rolling', 550, 2010));
  cart.add(new MusicAlbum(3009, 'On Stage', 'Elvis Presley', 200));
  cart.add(new Movie(5678, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', 137, 300));
  cart.deleteItem(5678);

  expect(cart.items).toEqual([new Book(9054, 'Harry Potter', 'J. K. Rolling', 550, 2010), new MusicAlbum(3009, 'On Stage', 'Elvis Presley', 200) ]);
});