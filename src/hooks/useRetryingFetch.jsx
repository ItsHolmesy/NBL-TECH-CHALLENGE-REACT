import { useState, useEffect } from "react"
function sleep(timeMS) {
  return new Promise((resolve) => setTimeout(resolve, timeMS))
}

const useRetryingFetch = (url, options, retryTimes = 3, retryTimeMS = 300) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const fetchRetry = async (retriesRemain = retryTimes) => {
    async function retry(error, retriesLeft) {
      if (!retriesLeft) {
        setIsLoading(false)
        setError(error)
      }

      return sleep(retryTimeMS).then(() => fetchRetry(--retriesRemain))
    }
    
    setIsLoading(true)
    const data = await fetch(url, options)
      .then(async (response) => await response.json())
      .catch((error) => retry(error, retryTimes))
    setIsLoading(false)
    setResult(data)
  }

  useEffect(() => {
    fetchRetry()
  }, [url, options])

  return [result, isLoading, error]
}
  
export default useRetryingFetch;