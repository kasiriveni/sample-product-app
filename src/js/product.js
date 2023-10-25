const getProduct = async (API_URL) => {
  const endpoint = API_URL;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
export { getProduct };
