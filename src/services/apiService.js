export default class ApiService {
  async getId() {
    const response = await fetch('https://front-test.beta.aviasales.ru/search/searchId="48zsy"')
    if (response.status >= 200 && response.status < 300) {
      response.json().then((data) => data)
    } else {
      console.log(777)
    }
  }
}
