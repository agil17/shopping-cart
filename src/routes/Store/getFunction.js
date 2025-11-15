export const fetcherWithFetch = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

		if (!response.ok) {
			throw new Error(`HTTP error: Status ${response.status}`)
		}

		return await response.json();
		
  } catch (err) {
    console.log(err.message);
  }
};