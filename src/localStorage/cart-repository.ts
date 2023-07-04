import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO) {
  const string = JSON.stringify(cart);
  return localStorage.setItem(CART_KEY, string);
}

export function get(): OrderDTO {
  const string = localStorage.getItem(CART_KEY) || '{"items":[]}';
  const obj = JSON.parse(string) as OrderDTO;
  const cart = new OrderDTO();
  obj.items.forEach((x) => {
    cart.items.push(
      new OrderItemDTO(x.productId, x.quantity, x.name, x.price, x.imgUrl)
    );
  });
  return cart;
}

export function clear() {
  localStorage.setItem(CART_KEY, '{"items":[]}');
}
