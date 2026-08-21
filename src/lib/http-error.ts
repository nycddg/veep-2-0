/** Throw an error h3/Nitro will serialize with the given HTTP status. */
export function httpError(status: number, message: string): never {
  const err = new Error(message) as Error & {
    status: number;
    statusCode: number;
    statusText: string;
  };
  err.name = "HTTPError";
  err.status = status;
  err.statusCode = status;
  err.statusText =
    status === 401 ? "Unauthorized" : status === 403 ? "Forbidden" : "Error";
  throw err;
}
