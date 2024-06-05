import { useState, useEffect } from "react"

// Helper function to set delay.
function sleep(timeMS) {
  return new Promise((resolve) => setTimeout(resolve, timeMS))
}

// Fetch hook including retry logic.
const useRetryingFetch = (url, options, retryTimes = 3, retryTimeMS = 300) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  // Fetch data function.
  const fetchRetry = async (retriesRemain = retryTimes) => {
    // Nested retry function.
    async function retry(error, retriesLeft) {
      if (!retriesLeft) {
        setIsLoading(false)
        setError(error)
      }
      // Wait if error, retry after delay, subtract retry attempt.
      return sleep(retryTimeMS).then(() => fetchRetry(--retriesRemain))
    }
    
    setIsLoading(true)

    // Fetch Data from API
    const data = await fetch(url, options)
      .then(async (response) => await response.json())
      .catch((error) => retry(error, retryTimes)) // Retry if error

    setIsLoading(false) // Set loading to false after fetch is completed 
    setResult(data) // Store fetched data
  }

  useEffect(() => {
    fetchRetry()
  }, [url, options])

  // Return fetched data, loading, or errors
  return [result, isLoading, error]
}
  
export default useRetryingFetch;