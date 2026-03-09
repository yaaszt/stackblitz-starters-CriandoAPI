const store = new Map();

/**
 * Salva um valor com TTL (ms)
 */
export function setCache(key, value, ttlMs = 10 * 60 * 1000) {
  const expiresAt = Date.now() + ttlMs;

  store.set(key, { value, expiresAt });
}

/**
 * Retorna valor se não expirou
 */
export function getCache(key) {
  const entry = store.get(key);

  if (!entry) return null;

  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    return null;
  }

  return entry.value;
}
