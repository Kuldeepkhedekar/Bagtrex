import { useCartStore } from "@/store/cart.store";

export function useCart() {
  const store = useCartStore();

  return {
    items: store.items,
    totalItems: store.totalItems(),
    totalPrice: store.totalPrice(),

    addItem: store.addItem,
    removeItem: store.removeItem,
    increaseQuantity: store.increaseQuantity,
    decreaseQuantity: store.decreaseQuantity,
    clearCart: store.clearCart,
  };
}