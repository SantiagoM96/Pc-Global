
export const isValidProduct = (product) => {
    return (
      product.name &&
      !isNaN(product.price) &&
      product.category &&
      product.pictureUrl &&
      !isNaN(product.stock) &&
      product.description
    );
  };