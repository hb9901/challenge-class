export type GetCartData = {
  error: null;
  success: true;
  result: { id: number; items: CartItem[] };
};

export type CartItem = {
  cartId: number;
  createdAt: string;
  id: number;
  product: any;
  productId: number;
  quantity: number;
  updatedAt: string;
};
