import { useQuery } from '@tanstack/react-query'

type QuoteResult = {
  outputAmount: number
  source: string
}

/**
 * Gets estimated swap result
 * @param {string} inputAsset - Input Asset Address
 * @param {string} outputAsset - Output Asset Address
 * @param {number} inputAmount - Amount of Input Token (e.g. 1.01)
 */
export const useQuote = (
  inputAsset: string,
  outputAsset: string,
  inputAmount: number,
) => {
  return useQuery({
    queryKey: [
      "quotes",
      inputAsset,
      outputAsset,
      inputAmount,
    ],
    queryFn: ({ queryKey }) =>
      fetch(`http://localhost:3008/quote/${queryKey[1]}/${queryKey[2]}?input_amount=${queryKey[3]}`).then((res) =>
        res.json(),
      ),
    select: (response): QuoteResult => ({
      outputAmount: response.outputAmount,
      source: response.source,
    }),
  })
}
