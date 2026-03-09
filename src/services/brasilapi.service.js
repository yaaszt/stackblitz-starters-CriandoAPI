const BASE_URL = 'https://brasilapi.com.br/api';

async function httpGetJson(url) {
  const resp = await fetch(url);

  if (!resp.ok) {
    const text = await resp.text();

    const err = new Error(`Upstream error: ${resp.status} ${resp.statusText}`);
    err.status = 502;
    err.details = text;

    throw err;
  }

  return resp.json();
}

export async function fetchFeriados(ano) {
  // https://brasilapi.com.br/api/feriados/v1/2026
  return httpGetJson(`${BASE_URL}/feriados/v1/${ano}`);
}

export async function fetchBancos() {
  // https://brasilapi.com.br/api/banks/v1
  return httpGetJson(`${BASE_URL}/banks/v1`);
}
