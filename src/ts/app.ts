import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(9054, 'Harry Potter', 'J. K. Rolling', 550, 2010));
cart.add(new MusicAlbum(3009, 'On Stage', 'Elvis Presley', 200));
cart.add(new Movie(5678, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', 137, 300));

console.log(cart.items);
