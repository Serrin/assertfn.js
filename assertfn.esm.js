/** assertfn.js * @version 1.0 esm * @see https://github.com/Serrin/ * @license MIT */
function assert(c,m){if(!c){throw new Error("Assertion failed"+(m?": "+m:""));}}
export default assert;
export assert;