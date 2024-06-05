# Matt's Notes

## STEPS TAKEN
	1. Import Wouter for use with React
	2. Created baseline files and directories
	3. Built error testing & Retry System
	4. Migrated Retry System into a Hook.
	5. Implement Unit Testing
  6. Mobile Compatibility
  7. Implement Categorisation

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

### Mobile Compatibility

Mobile compatibility was a big goal from the start, having been absent from prior projects and code-tests I wanted to have somewhat decent mobile implementation. Using Sass's variable storage, I stored a number of screen size variables to make this process far more streamlined.

### Implement Categorisation

Seeing I had some spare time, I set about building an additional hook for categorising the products as they came in, relying on DummyJSON's own internal information. Also leveraging wouter's reliance on hooks for this. I'm pleased with how this came out, even if there are some improvements that could potentially be made.

## FURTHER IMPROVEMENTS

Given unlimited time etc, (and also if I hadn't have been sick during the entire timeframe) there are a number of improvements that could be made to the codebase:

 - Rewrite in typescript and use Babel - This would remove the need to append .js to all imports and would make for a much nicer experience as typescript would provide type hinting and safety throughout the application

 - Extend more error types - Currently I've just used some basic error types, but error handling could be much improved by adding unique error types that can be caught and handled. This could then allow reintroduction of an error map using the error type as keys.

 - Further functionality - I'd love, if granted further time to implement an optional font that makes the website easier to read for those who are dyslexic, and properly implement keyboard controls.

 - Code Improvements - I know that my second hook for categorisation could be improved, or even cleaned up further. Doing further reading, I could potentially utilise ```reduce```.

 - Increased Accessibility - There are a number of accessibility improvements that could be made, keyboard shortcutting is the big one. Though given time constraints I was unable to do so while focussing on the main features.

 - Internationalisation - Had I more time, I'd implement it, however i18n is time-consuming and as such couldn't commit to it in the time frame provided.

## KNOWN ISSUES
### Testing 
- Unit Test - Unit Test Number 3, there was an error being presented that I was unable to capture properly, though the test was passing. The code I did use was as follows:
```js
fetch.mockResponse(Promise.reject())

          await act(async () => {
            try {
              renderHook(() => useRetryingFetch(testUrl, {}, 1, retryTime))
            } catch { }
          })

          vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(3))
```
Other tests are throwing errors as well, however this is expected behaviour, and I'm unsure of how to catch the ones the tests are complaining about - they at least put out passing data that I can verify is correct.

### Visual
- Jitter - And incredibly minor pet-peeve. There is a small amount of jitter when changing categories for the first time. I'm unsure what could be causing this or how to fix this. Feedback or advice would be very much appreciated!

## HOW-TO/DEPENDENCIES
Please download the file as a zip, and run via commandline as ```npm run build.```