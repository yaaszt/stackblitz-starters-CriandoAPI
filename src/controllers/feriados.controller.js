import { getCache, setCache } from '../cache/memoryCache.js';
import { fetchFeriados } from '../services/brasilapi.service.js';

function parseAno(anoStr) {
  const ano = Number(anoStr);

  if (!Number.isInteger(ano) || ano < 1900 || ano > 2100) {
    const err = new Error(
      "Parâmetro 'ano' inválido. Use um inteiro entre 1900 e 2100."
    );
    err.status = 400;
    throw err;
  }

  return ano;
}

export async function getFeriadosByAno(req, res, next) {
  try {
    const ano = parseAno(req.params.ano);
    const key = `feriados:${ano}`;

    const cached = getCache(key);

    if (cached) {
      return res.json({ source: 'cache', year: ano, data: cached });
    }

    const raw = await fetchFeriados(ano);

    // Normalização (sua API define o formato)
    const normalized = raw.map((f) => ({
      date: f.date,
      name: f.name,
      type: f.type,
    }));

    res.json({ source: 'upstream', year: ano, data: normalized });
  } catch (e) {
    next(e);
  }
}
