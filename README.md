# Bookmarkd

Choose from over 101 free ebooks and read them online or offline.

We carry high quality ebooks that have been curated by digitized by 1000s of volunteers.

## What?

We have made an ebook reader for ePubs which works cross platform, on mobile, desktop and tablet. It has offline functionality, is a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) and thus is installable to the home screen on capable mobile devices (anything on modern android, iOS does not support PWAs sadly).

It currently exists as a completely front-end app, with AWS for hosting our ePub files, though we would like to make a back end and add authentication, we decided to prioritise the front end aspects of the app.

We currently have about 90 ebooks for the MvP but would like to add the 16000 that are availabe on Project Gutenberg at some point.

## Why?

We made this app as there is a huge amount of out of copyright .ePub ebooks out there, but no really easy way to read and view them. Websites like Project Gutenberg are great, but frustrating to navigate and use. We wanted to take these free books and make them available in a user friendly format, with offline ability.

The offline/PWA aspect came into play because only being able to read the ebooks when you are online could be somewhat frustrating.

## How?

We are using:
- React
- Redux
- [react-reader](https://www.npmjs.com/package/react-reader) for rendering the epubs
- [redux-offline](https://github.com/jevakallio/redux-offline) for storing the state offline and thus retaining information about the session through multiple sessions.
- [sw-precache](https://github.com/GoogleChrome/sw-precache) for the creation and configuration of our service worker.
- [styled-components](https://github.com/styled-components/styled-components) for styling and writing our CSS in our JS (this way we do everything related to our HTML and CSS in our react components).

### How did you get the books/the info?

Without having knowledge of what was in the ePub files we first downloaded around 100 books by hand from Project Gutenberg.

We then used an NPM module called unzipper to unzip and loop through the files in the ePub (epubs are basically zipped CSS and XML files), getting to the content.opf which contains the metadata.

We used another NPM module called xml2json to turn the xml into a JSON. Through trial/error/research we then got then looped over our downloaded ebooks and made an array of objects containing information about each of them.

### How does the service worker work?

Using sw-precache makes setting up the service worker quite doable.

As seen in our sw-precache-config.json:

```javascript
{
  runtimeCaching: [
    {
      urlPattern: /.epub/,
      handler: 'cacheFirst',
      options: {
        cache: {
          name: 'books',
        },
      },
    },
  ],
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map)',
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
};
```

The ```staticFileGlobs``` key is an array of thing to cache when they are first served (so we cache all of our static files).

Then in the ```runtimeCaching``` key we tell our service worker to cache any files with the type ```.epub``` and put them into a cache called ```books```.

Whenever we make a fetch request our service worker intercepts it, checks if we have the file requested in one of our caches and serves it from there instead of doing a network request.

If we don't have the files that has been requested cached the service worker does a normal fetch request, clones the stream (the stream of data from the request can only be used once), uses one stream to send the data back to wherever made the fetch request, and uses the other to put the file into the cache.

### How does it do in Lighthouse?

Lighthouse is Google's audit for PWAs, we did well! 80/100.

![](https://files.gitter.im/fac10/ebook-app/QLPL/Screen-Shot-2017-05-11-at-22.53.58.png)


### User Testing

#### Andrew

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

#### Malcolm: 30 year old man, describes himself as not a big "e-reader"

* "Books shouldn't be expected to scroll down"
* "Couldn't see the snackbar"


#### Aveline: young woman 20s, 'techy'
* Attempted to scroll down as it felt more natural.

* "Chapter links are jarring and old school "

* "The alphabet genres are unclear, meaning she had to recount the alphabet to find title "

* "Snack bar does not register "

* "Library is kind of clear "


#### Jennifer: 20s described herself as 'analogue' not techy
* "Laggy load for books"

* "Scroll down feels more natural" 

* "Check browse to find book"

* "Good google fuzzy search"

* "Library  apps view do that in general"


#### Nathaniel: Young man, mid-20s, 'techy'

* "Snackbar flashes too quickly and doesn’t give the user enough time to read the
message"

* "Bottom bar currently says Library rather than my library which is confusing"

* "The section titles are a unclear as the a-z etc. aren’t clearly by
authors or by title"

* "Adding to the home screen is an opaque process"
