# Matt's Notes

## STEPS TAKEN
	1. Import Wouter for use with React
	2. Created baseline files and directories
	3. Built error testing & Retry System
	4. Migrated Retry System into a Hook.
	5. Implement Unit Testing

## EXPLANATIONS

### Build application/Wouter Usage

First thing out of the way: React doesn't come with a router out of the box, and the ones offered differ from version to version. As such I opted for a fairly low-impact router known as wouter, lightweight and reliant on hooks - which also prompted another decision down the line in development.

I relied mainly on react since that's where most of my knowledge stems from, as much as I'd love to give vue a try, my knowledge isn't as strong with it. Along with that, I utilised vite to create this react app, due to the npx method being outdated and no longer supported.

### Baseline Files & Directories

Fairly straight forward, I like to split most of my components pretty heavily so splitting css files, making scss variable files and so on was my first course of action after installing the necessary files such as Sass, React and Wouter.

### Build Error Testing

Initially I built out some tests for the API fetching and display. Given the time constraints, I opted to only write tests for the main Home and Details sections as that seemed to be where the majority of functionality was due to go. With more time I would have added tests for pretty much everything within reason.

### Built Hook System

Wouter works off of Hooks, which was a tool I wanted to really demonstrate here, by combining the API fetching and retry system I was able to remove a lot of the workload from the 'front end' of the app itself.

### Implement Unit Testing

Opting for vitest, a testing framework designed specifically for vite, featuring seamless integration with it and its ease of use - also its syntax is incredibly similar to that of jest, and is compatible with it as well. Vitest is also more efficient, as it uses Vite's fast building and transformation functionality. 
On Unit Test Number 3, there was an error being presented that I was unable to capture properly, though the test was passing. The code I did use was as follows:

```
fetch.mockResponse(Promise.reject())

          await act(async () => {
            try {
              renderHook(() => useRetryingFetch(testUrl, {}, 1, retryTime))
            } catch { }
          })

          vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(3))
```
Other tests are throwing errors as well, however this is expected behaviour, and I'm unsure of how to catch the ones the tests are complaining about - they at least put out passing data that I can verify is correct.


## FURTHER IMPROVEMENTS

Given unlimited time etc, (and also if I hadn't have been sick during the entire timeframe) there are a number of improvements that could be made to the codebase:

 - Rewrite in typescript and use Babel - This would remove the need to append .js to all imports and would make for a much nicer experience as typescript would provide type hinting and safety throughout the application

 - Extend more error types - Currently I've just used some basic error types, but error handling could be much improved by adding unique error types that can be caught and handled. This could then allow reintroduction of an error map using the error type as keys.

- Implement device variability - I had intended to use Sass to help with getting the website ready for mobile devices and varying screen sizes. However, given time constraints I was unable to do so. You can see the basic setup for it within the _variables.scss file contained within the styles folder.

- Further functionality - I'd love, if granted further time to implement an optional font that makes the website easier to read for those who are dyslexic, and properly implement keyboard controls. Also high on my list would be a search function and sort by category.


## HOW-TO/DEPENDENCIES
Please download the file as a zip, and run via commandline as ```npm run build.```