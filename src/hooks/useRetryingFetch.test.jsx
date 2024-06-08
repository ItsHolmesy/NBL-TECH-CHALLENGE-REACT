import useRetryingFetch from "./useRetryingFetch";
import { renderHook, act } from "@testing-library/react";
const testUrl = 'example.com';
const retryTime = 10;

describe('#useRetryingFetch', () => {
    describe('when making a request', () => {
        beforeEach(() => {
            fetch.resetMocks()
          })
          
        it('sets the loading state', async () => {
            fetch.mockResponse(new Promise(() => {}))

            let result;
            await act(async () => {
              result = renderHook(() => useRetryingFetch(testUrl, {}, 1, retryTime))
            })
      
            const isLoading = result?.current?.[1]
      
            vi.waitFor(() => expect(isLoading).toBe(true))
        })
        
        describe('when the request is successful', () => {
            it('provides the resulting data', async () => {
                fetch.mockResponse(Promise.resolve('test'))

                let result;
                await act(async () =>{
                    result = renderHook(() => useRetryingFetch(testUrl, {}, retryTime, ))
                })
                
                const setResult = result?.current?.[0]

                vi.waitFor(() => expect(setResult).toBe('test'))
            })
        })

        describe('when the request is unsuccessful', () => {
            it('retries the request a specified number of times', async () => {
                fetch.mockResponse(Promise.reject())

                await act(async () => {
                  renderHook(() => useRetryingFetch(testUrl, {}, 1, retryTime))
                })
        
                vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(3))

            describe('when a subsequent request succeeds', () => {
                it('provides the resulting data', async () => {
                    fetch.mockResponses([
                        Promise.reject(),
                        'test'
                      ])
            
                      let result;
                      await act(async () => {
                        result = renderHook(() => useRetryingFetch(testUrl, {}, 1, retryTime))
                      })
            
                      const data = result.current?.[0]
            
                      vi.waitFor(() => expect(data).toBe('test'))
                })
            })

            describe('when all retries are unsuccessful', () => {
                it('provides the encountered error', async () => {
                    fetch.mockResponses([
                        Promise.reject(),
                        Promise.reject('error')
                      ])
            
                      let result;
                      await act(async () => {
                        result = renderHook(() => useRetryingFetch(testUrl, {}, 1, retryTime))
                      })
            
                      const error = result.current?.[2]
            
                      vi.waitFor(() => expect(error).toBe('error'))
                })
            })
        })
    })
})
})