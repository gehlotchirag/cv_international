interface ListingProduct {
  "regularPrice": number,
  "discountPercentage": number,
  "discountedPrice": number,
  "productName"?: string,
  "product_name"?: string,
  "imgUrl"?: string,
  "productId"?: number | string,
  "product_id"?: number | string,
  "IsInStock"?: number,
  "product_sku"?: string,
  "product_qty"?: number,
  "product_price": string,
  "product_image"?: string,
  "cod_available"?: string
}

export default ListingProduct;
