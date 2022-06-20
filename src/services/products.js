const API_URL = "https://api.mercadolibre.com/";

export async function getProducts(param) {
  try {
    const response = await fetch(`${API_URL}sites/MLA/search?q=:${param}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsById(param) {
  try {
    const promise1 = await fetch(`${API_URL}items?ids=${param}`);
    const data1 = await promise1.json();
    const promise2 = await fetch(`${API_URL}items/${param}/description`);
    const data2 = await promise2.json();

    return {product:data1[0].body, description: data2};
  } catch (error) {
    console.error(error);
  }
}
