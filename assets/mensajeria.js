/* class HttpService {
    static #instance = null;
    #baseUrl = "";
  
    constructor(baseUrl = undefined) {
      this.#baseUrl = baseUrl || "https://gestor-de-mesajeria-via-whatsapp-g5hc.onrender.com/"; // link del servidor de la mensajeria
    }
  
    static getInstance(baseUrl = undefined) {
      if (!HttpService.#instance) {
        HttpService.#instance = new HttpService(baseUrl);
      }
      return HttpService.#instance;
    }
  
    async fetch(url, options = {}) {
      try {
        const response = await fetch(`${this.#baseUrl}${url}`, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        
        console.error(`Fetch error with url: ${this.#baseUrl}${url}`, error);
        throw error;
      }
    }
  
    get(url) {
      return this.fetch(url);
    }
  
    post(url, data = {}) {
      return this.fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  
    // Implement PUT, DELETE, etc., in a similar manner
}
 */