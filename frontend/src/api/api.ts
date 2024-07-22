import { env } from "@/env"

export async function fetchData(): Promise<
  { result: string } | { status: number; error?: string }
> {
  const url = `${env.VITE_BACKEND_HOST}/foo`
  try {
    const results = await fetch(url)
    const jsonObject = await results.json()
    if (results.status >= 200 && results.status <= 299) {
      return jsonObject
    } else {
      return { status: results.status, error: jsonObject.error }
    }
  } catch (error) {
    return { status: 500, error: `Can't connect to backend or otherwise failed error: ${error}` }
  }
}
