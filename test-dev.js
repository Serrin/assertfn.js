
/** assertfn.js * @version 1.0 dev * @see https://github.com/Serrin/ * @license MIT */
function assert (c, m) {
  if (!c) { throw new Error("Assertion failed" + (m ? ": " + m : "")); }
}

console.log(assert(1 < 2));
// indefined
console.log(assert(1 < 2, "Arthur Dent"));
// undefined
try { assert(2 < 1); } catch (e) { console.error(e) };
// Error: Assertion failed
try { assert(2 < 1, "Ford Prefect"); } catch (e) { console.error(e) };
// Error: Assertion failed: Ford Prefect
