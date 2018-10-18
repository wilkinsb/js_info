// 7 Data Types in Javasript:

// NUMBER for numbers of any kind: integer or floating-point.
// STRING for strings. A string may have one or more characters, there’s no separate single-character type.
// BOOLEAN for true/false.
// NULL for unknown values – a standalone type that has a single value null.
// UNDEFINED for unassigned values – a standalone type that has a single value undefined.
// OBJECT for more complex data structures.
// SYMBOL for unique identifiers.

// NUMBER type handles both integers and floats
// can also return INFINITY, -INFINITY, and NaN
// NaN is result of computational error (Not a Number) or undefined operation
// NaN gives NaN result no matter how it is used (it is 'sticky')

// STRING must be quoted, using single or double quotes
// Backticks ( ` ) allow us to embed variables and expressions into a string by wrapping them in ${…}
// ie.  alert( `Hello, ${name}!` ); // Hello, John!
// *** no char or character type in JS

// BOOLEAN is always true or false (no caps like Python)
// can be used, or come as a result of a comparison

// NULL is 'nothing' or 'empty' or 'value unknown'

// UNDEFINED is 'value not assigned'
// can be used, but typically you would use NULL to assign no value to a variable

// OBJECTS used to store collections of data and more complex entities
// SYMBOL used to create unique identifiers for objects

// typeof operator used to determine what a variable's type is
// can be used as an operator ( typeof x ) or a function ( typeof(x) )

// Task: What is the output?

let name = "Ilya";

alert( `hello ${1}` ); // Output: hello 1

alert( `hello ${"name"}` ); // Output: hello name

alert( `hello ${name}` ); // Output: hello Ilya