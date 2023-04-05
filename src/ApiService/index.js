import { BASE_URL, DEFAULT_HEADERS } from "./config";

const getPeople = async () => {
  // const url = `${BASE_URL}/people/`;
  // const response = await fetch(url)  
  // const json = await response.json();  
  // ,{
  //   headers:DEFAULT_HEADERS
  // }
  // return JSON.parse(response)

  const response = await fetch('http://swapi.dev/api/people/');
        const json = await response.json();
        const result = [...json.results]
  return result
}
export default getPeople();