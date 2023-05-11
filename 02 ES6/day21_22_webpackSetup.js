// host : like apache server hosts, express is also a host - web server - to host api - localhost:9000
// We could use express to hosts front end as well, but we can also use another host - webpack
// webpack dev server - to host react application front end (dev purpose) - localhost:9090/home
// install webpack

// webpack is a versatile tool
// react.js is javascript. It may have home page, header, footer, about ... etc 10 pgs
// How we set up on what click what happens, etc... is called buliding
// bundling is process of merging all these pages in one single page called bundle.js (done by webpack)
// (ex: when home is clicked, all these pages are loaded)
// resolving the reference -> which page needs to be loaded first (done by webpack)
// it will do the referece problem solution for - images and css files as well

// minification/optimization -> removes extra space, redundent lines, logical operations, commented code
// {ths}first{ln}{ths}{scnln}{ths}third{ln}{ths}{scnln} => non human readable format
// since minimized version is not human readable, it offers min map to debug
// min map to debug -> min-map, and creates a copy of developer code for debugging if issue occurs

// transpilation using babel module -> 
// ES6, reactjs, reduxjs - they are not vanilla js, all browsers may not be able to support the libraries
// converts these codes to => core js (which is supported on all browsers)

// uses tools to minify image, work with css and images, etc
