# Bookmarkd

**This app was created as a student project for [Founders and Coders](https://foundersandcoders.com/) 4 years ago. The code has not been touched since, which means it is probably outdated/buggy/confusing, since it was written by 4 people who had barely learned React/Redux at the time**

---

Choose from over 101 free ebooks and read them online or offline.

![](https://cloud.githubusercontent.com/assets/9408641/25997875/371a362e-3716-11e7-919d-0d40671f46fb.jpg)

## What?

We have made an ebook reader which works cross platform, on mobile, desktop and tablet. It's a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/), which means it is usable offline, fast and built to mimic a native application. It's installable to the home screen on mobile devices (although iOS does not have any offline support :worried:).

It currently exists entirely in the frontend app (except for the books hosted on Amazon S3). This is a deliberate architectural choice as it means the entire application can be downloaded and cached onto a phone, which enables us to provide an almost identical experience offline.

We currently cache all the HTML/CSS/JS required for the app to run when the page first loads. Books are cached once they're opened by the user. Opening a book also saves it to your local session, which allows us to show a 'My Library' section of only the books that user is reading.

We currently have about 90 ebooks for the MVP but would like to add the 16000 that are availabe on Project Gutenberg at some point.

### Scoping

When we initially planned our architecture we realised that we could do book browsing and reading could be done without a backend, whereas anything to do with file-uploading or user authentication would require a backend. Since the backend would still require a frontend we decided to focus on building the only the frontend for the MVP.

## Why?

We made this app as there is a huge amount of public ebooks out there, but no easy way to read them. Websites like Project Gutenberg are great, but frustrating to navigate and use. We wanted to take these free books and make them available in a user friendly format, with offline capabilities.

## How?

We are using:
- React
- Redux
- [react-reader](https://www.npmjs.com/package/react-reader) for rendering the epubs
- [redux-offline](https://github.com/jevakallio/redux-offline) for storing the state offline and thus retaining information about the session through multiple sessions.
- [sw-precache](https://github.com/GoogleChrome/sw-precache) for the creation and configuration of our service worker.
- [styled-components](https://github.com/styled-components/styled-components) for styling and writing our CSS in our JS (this way we do everything related to our HTML and CSS in our react components).

### How did you get the books/the info?

Without having knowledge of what was in the files we first downloaded the top 100 books from Project Gutenberg by hand.

We then used an NPM module called unzipper to unzip and loop through the files in the `.epub` (epubs are basically zipped CSS and XML files), getting to the content.opf which contains the metadata.

We used another NPM module called xml2json to turn the xml into a JSON. Through trial/error/research we then got then looped over our downloaded ebooks and made an array of objects containing information about each of them.

### How does the service worker work?

A service worker is effectively a server that lives in the browser. It runs in the background even when the webpage is closed and caches/serves resources.

Our service worker initially caches all the static resources (`index.html`, `bundle.js`, favicons) and then waits to intercept any requests to our Amazon S3 bucket containing the ebooks. If it sees a request for a book go out it first checks if the book is in the cache and serves it from there if it is, otherwise it sends the request out to Amazon and then caches the book when the request comes back so that next time it will be available offline.

Using sw-precache makes setting up the service worker quite doable as it generates the file automatically based on a config  file.

```js
{
stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map)',
    'build/icons/*',
  ],
  runtimeCaching: [
    {
      urlPattern: /amazonaws\.com\/all-the-epubs/,
      handler: 'cacheFirst',
      options: {
        cache: {
          name: 'books-cache',
        },
      },
    },
  ],
  swFilePath: 'build/service-worker.js',
};
```

The `staticFileGlobs` key is an array of thing to cache when they are first served (so we cache all of our static files).

Then in the `runtimeCaching` key we tell our service worker to cache intercept any requests to Amazon and put them into a cache called `books-cache`.

## User Testing

### Andrew

* Open a book and go through some of pages
  * What's the side bar? (some books not having contents is confusing)
  * Finds a lot of it self explanatory
  * Snackbar is oddly placed (not directly at the bottom of the screen
* Go offline, go to your library and open the book you just opened
  * Very nice.
* Find and open Metamorphosis by Franz Kafka
  * Scrolls up to search bar
  * Found it worked fine
* Install the app to your home screen and open it
* Do you like this functionality? Would you use it?
  * yeah, really likes adding to home screen, finds it really nice functionality

* Other thoughts
  * "So nice"
  * "Seems pretty robust"
  * Likes to logo, maybe make a bit more use of the logo?
  * "I can't break it"
  * Lack of difference between home and browse is confusing.
  * "Didn't realise could scroll left and right" - Dots to indicate that you can
  * scroll left and right?

### Malcolm: 30 year old man, describes himself as not a big "e-reader"

* "Books shouldn't be expected to scroll down"
* "Couldn't see the snackbar"


### Aveline: young woman 20s, 'techy'
* Attempted to scroll down as it felt more natural.

* "Chapter links are jarring and old school "

* "The alphabet genres are unclear, meaning she had to recount the alphabet to find title "

* "Snack bar does not register "

* "Library is kind of clear "


### Jennifer: 20s described herself as 'analogue' not techy
* "Laggy load for books"

* "Scroll down feels more natural" 

* "Check browse to find book"

* "Good google fuzzy search"

* "Library  apps view do that in general"


### Nick: Young man, mid-20s, 'techy'

* "Snackbar flashes too quickly and doesn’t give the user enough time to read the
message"

* "Bottom bar currently says Library rather than my library which is confusing"

* "The section titles are a unclear as the a-z etc. aren’t clearly by
authors or by title"

* "Adding to the home screen is an opaque process"

## Performance

Lighthouse is Google's performance/feature audit for PWAs — we did well! 80/100.

![](https://files.gitter.im/fac10/ebook-app/QLPL/Screen-Shot-2017-05-11-at-22.53.58.png)

## Future goals

We would like to create a Node backend that can server-render the React components, which means we can deliver static HTML/CSS to the browser on initial page load, then have React take over once the JS bundle finishes downloading. This would at least provide a minimal experience to users who don't receive our JS for some reason, and would speed up initial load/render.


The backend would also handle authentication so we can persist the user's settings/books across devices, as currently this only exists in local storage.
