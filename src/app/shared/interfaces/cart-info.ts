import ListingProduct from './listing-product';

interface CartInfo {
  "total_items": number,
  "sub_total": number,
  "shipping_amount": number|string,
  "coupon_code": string[],
  "product_list": ListingProduct[],
  "total_qty": number,
  "currency_code": string
}

export default CartInfo;
