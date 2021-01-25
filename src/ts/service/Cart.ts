import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        let result = this._items.reduce((sum, item) => sum += item.price, 0);
        return result;
      }
  
      totalPriceWithDiscount(discount: number): number {
        return this.totalPrice() - (this.totalPrice() / 100 * discount);
      }
  
      deleteItem(id: number): void{
        let shoppingCartId = this._items.findIndex(item => item.id === id);
        this._items.splice(shoppingCartId, 1);
      }
}