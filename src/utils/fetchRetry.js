function sleep(timeMS) {
  return new Promise((resolve) => setTimeout(resolve, timeMS))
}
// Using Recursion Method
const fetchRetry = async (url, options = {}, retryTimes = 3, retryTimeMS = 1000) => {
  // Retry handler
    async function retry(error, retriesRemain) {
      // If no retries left, throw error
      if (!retriesRemain) {
        throw error
      }
// Wait for a set time (1000) before trying again. Then recursively call, counting down retry times
      return sleep(retryTimeMS).then(() => fetchRetry(url, options, --retryTimes, retryTimeMS))
    }

    return fetch(url, options).catch((error) => retry(error, retryTimes))
  };
  
  export default fetchRetry;
  