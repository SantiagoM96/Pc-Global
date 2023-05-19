
export const isValidProduct = (product) =>
  product.name &&
  !isNaN(product.price) &&
  product.category &&
  product.pictureUrl &&
  !isNaN(product.stock) &&
  product.description;
