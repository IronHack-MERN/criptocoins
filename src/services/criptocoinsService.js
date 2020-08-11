import axios from "axios";

class CriptocoinsService {
  constructor() {
    this.axios = axios.create({
      baseURL:
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",
    });
  }

  consultAPI() {
    return this.axios
      .get()
      .then(({ data: criptocoins }) => criptocoins);
  }
}

const CriptocoinsService = new CriptocoinsService();
