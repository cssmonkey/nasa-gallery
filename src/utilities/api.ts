const apiKey = process.env.NASA_API_KEY ?? "";
const baseUrl = process.env.NASA_API_URI ?? '';

type MakeRequest = {
  path: string;
  options?: RequestInit;
  queryParams?: Record<string, unknown>
}

export const makeRequest = async <T,>({ path, options, queryParams }: MakeRequest) => {

  const params = new URLSearchParams({
    ...queryParams,
    "api_key": apiKey
  });

  const url = new URL(`${baseUrl}${path}?${params}`);

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<T>;
}