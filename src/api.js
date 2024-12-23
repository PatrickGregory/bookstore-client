const API_URL = import.meta.env.VITE_API_URL;

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/api/books`);
    if (!response.ok) throw new Error('Failed to fetch books');
    return response.json();
  } catch (error) {
    console.error(error);
  }
};