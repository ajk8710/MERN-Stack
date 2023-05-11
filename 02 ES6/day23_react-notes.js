// Few points that are disscussed in the class today

// react can detect the changes/modified components when rendering in browser, unlike others (one with real DOM)
// if 10 text box were already there, and 2 duplicate, 3 new - then it only need to render the changes, using diff algorithm of virtual DOM

// You can modify parts of react web apps by getting or setting the id of component,
// then document.getElementByID("the_id")
// This is dom modification

// Efficient brower app must render changes above ~60 ~70 FPS in order to our eye not notice the change
// Otherwise user considers them as slow browser, such as IE8 or IE9

// multi page app fetches html (views, UIs..) every time user interacts/requests
// single page app (react) fetches whole thing once (app.bundle.js which has all UIs..) then fetches new data if necessary
