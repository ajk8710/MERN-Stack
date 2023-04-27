// Before ES6:
// module.exports = obj_to_export;
// let obj_to_export = require(".../file");

// With ES6:
// export and import keywords

// firstFile.js
export function importMe(params) {}  // This is called named export. There can be many of them in a file.
export const pi = 3.14;

export default myDefault = 999;  // default export: only one is allowed in a file


// constants.js
// export const pi = 3.141592;  // duplicate variable name in another file
export const pi1 = 3.141
export const pi2 = 3.1315


// secondFile.js
import {importMe, pi} from "./firstFile";  // This is named import and is within brackets. .js is optional.
import myDefault from "./firstFile";  // default import is without bracket

// imports can be combined
import myDefault, {importMe, pi} from "./firstFile";

// alias the variable name to avoid duplicacy
import {pi as piFromConstants} from "./constants";

// wildcard or star operator
import * as allConstants from "./constants";
console.log(allConstants.pi1);
console.log(allConstants.pi2);
