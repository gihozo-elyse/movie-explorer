const API_BASE_URL = 'https://api.tvmaze.com';

export async function searchShows(query) {
  try {
    const response = await fetch(`${API_BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to fetch shows');
    const data = await response.json();
    return data.map(item => item.show);
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
}

export async function getShowDetails(showId) {
  try {
    const [show, cast] = await Promise.all([
      fetch(`${API_BASE_URL}/shows/${showId}`).then(res => res.json()),
      fetch(`${API_BASE_URL}/shows/${showId}/cast`).then(res => res.json())
    ]);

    return {
      ...show,
      cast: cast.slice(0, 10).map(person => ({
        id: person.person.id,
        name: person.person.name,
        character: person.character?.name || 'N/A',
        image: person.person.image?.medium || null
      }))
    };
  } catch (error) {
    console.error('Error fetching show details:', error);
    throw error;
  }
}

export async function getPopularShows() {
  try {
    const response = await fetch(`${API_BASE_URL}/shows`);
    if (!response.ok) throw new Error('Failed to fetch popular shows');
    return await response.json();
  } catch (error) {
    console.error('Error fetching popular shows:', error);
    throw error;
  }
}
