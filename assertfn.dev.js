/** assertfn.js * @version 1.0 dev * @see https://github.com/Serrin/ * @license MIT */
function assert (c, m) {
  if (!c) { throw new Error("Assertion failed" + (m ? ": " + m : "")); }
}