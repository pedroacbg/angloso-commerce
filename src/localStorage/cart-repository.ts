import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
  const string = JSON.stringify(cart);
  return localStorage.setItem("com.angloso.angloso-commerce/Cart", string);
}

export function get(): OrderDTO {
  const string =
    localStorage.getItem("com.angloso.angloso-commerce/Cart") || '{"items"=[]}';
  return JSON.parse(string);
}
