// API fetch helper function to make requests with headers and body
export async function fetchApi(apiUrl: string) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
    })


    if (!response.ok) {
      throw new Error(`Erro na requisição da API`);
    }

    const responseJson = await response.json()
    
    console.log( await responseJson)
    return await responseJson;
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
}
