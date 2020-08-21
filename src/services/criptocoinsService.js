import axios from "axios";

class CriptocoinsService {
  constructor() {
    this.axios = axios.create({
      baseURL:
        'https://min-api.cryptocompare.com/data/',
    });
  }

  consultAPI() {
    return this.axios
      .get('top/mktcapfull?limit=10&tsym=USD')
      .then(({ data: criptocoins }) => criptocoins);
  }

  getFullData(coin, criptocoin){
    return this.axios
    .get(`pricemultifull?fsyms=${criptocoin}&tsyms=${coin}`)
    .then(({ data: criptocoins }) => criptocoins);
  }
}

const criptocoinsService = new CriptocoinsService();

export default criptocoinsService;