export function errorMiddleware(err, req, res, next) {
  const status = err.status || 500;

  const payload = {
    error: {
      message: err.message || 'Erro interno',
      code:
        status === 400
          ? 'BAD_REQUEST'
          : status === 404
          ? 'NOT_FOUND'
          : status === 502
          ? 'UPSTREAM_ERROR'
          : 'INTERNAL_ERROR',
      details: err.details ?? null,
    },
  };

  res.status(status).json(payload);
}
