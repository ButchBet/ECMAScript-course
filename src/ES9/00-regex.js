// Initialization
// /expression/flags
// new RegExp(/expresion/, 'flags') 
let  regexp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/gd;
regexp = new RegExp(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, 'gd');

// Flags
/*
1. g: global search. Allows you to continue searching for matches instead of stopping when you find one.
2. i: It does not matter uppercase and lowercase. It is often referred to as case insensitive.
3. m: Multiline. Allows ^ and $ to handle \r or \n line endings.
4. u: Unicode. Interprets the pattern as a code from a Unicode sequence.
5. y: Sticky. Search only from the position indicated by lastIndex.
6. s: Sets whether \n, \r, paragraph break or line break should be considered in .
7. d: It establishes if when executing an .exec() the result should have the .indices property.
*/

// Properties
regexp.source // Check the source path
regexp.flags // Check the flags path
regexp.lastIndex // Returns the position where was found one match in the last search
regexp.global //check if the flag g is active
regexp.ignoreCase // check if the flag i is active 
regexp.multiline // check if the flag m is active
regexp.unicode // check if the flag u is active 
regexp.sticky // check if the flag y is active
regexp.dotAll // check if the flag s is active 
regexp.hasIndices // check if the flag d is active

// Methods
// test(str)Check if the regular expression matchs with the text str
let test; 
(test = regexp.test('2002-06-08')) ? true : false; 
// true

(test = regexp.test('Hello')) ? true : false; // false

// exec(str) execute a pathers search in the text str, it returs an array with the catches
const exec = regexp.exec('2002-06-08');
console.table(exec);
/*
┌─────────┬───────────┬──────────┬──────────┬───────────┬───────────┬──────────────┐
│ (index) │     0     │    1     │    2     │     3     │  groups   │    Values    │
├─────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────────┤
│    0    │           │          │          │           │           │ '2002-06-08' │
│    1    │           │          │          │           │           │    '2002'    │
│    2    │           │          │          │           │           │     '06'     │
│    3    │           │          │          │           │           │     '08'     │
│  index  │           │          │          │           │           │      0       │
│  input  │           │          │          │           │           │ '2002-06-08' │
│ groups  │           │          │          │           │           │  undefined   │
│ indices │ [ 0, 10 ] │ [ 0, 4 ] │ [ 5, 7 ] │ [ 8, 10 ] │ undefined │              │
└─────────┴───────────┴──────────┴──────────┴───────────┴───────────┴──────────────┘
*/

// Parentization 
/*
1. (x): The pattern x enclosed within parentheses is captured and saved.
2. (?:x): If we include ?: at the beginning of the pattern in the parentheses, that pattern is not captured.
3. x(?=y): Search only if x is followed by y.
4. x(?!y): Search only if x is not followed by y. 
*/

/*
Keep in mind that the one returned by .exec() is a special array that, apart from working like a normal array, has some extra properties that can help us:

1. .length: As an array, you can query the length (full match + captures)
2. .groups: Create an object with the results of named parentheses
3. .index: Position of where the occurrence was found.
4. .input: Original text passed as parameter to .exec().
5. indices: 	Si se usa el flag d, se incluye un  con las posiciones inicial y final de las coincidencias del .
*/

// Named Parentization
/*
It is possible to assign a name to each parentization made, so that the way of capturing elements and managing them later is more “human”. To do this, we just have to add ?<name> at the beginning of the parentization, as you can see in the following example:
*/
const text = `It's 13:33:02, at 18:45:00`;
regexp = /(?<hours>[0-9]{2}):(?<mins>[0-9]{2}):(?<secs>[0-9]{2})/gd

const result = regexp.exec(text);    
console.table(result);

/*
┌─────────┬───────────┬──────────┬───────────┬────────────┬───────┬──────┬──────┬──────────────────────────┬──────────────────────────────┐
│ (index) │     0     │    1     │     2     │     3      │ hours │ mins │ secs │          groups          │            Values            │
├─────────┼───────────┼──────────┼───────────┼────────────┼───────┼──────┼──────┼──────────────────────────┼──────────────────────────────┤
│    0    │           │          │           │            │       │      │      │                          │          '13:33:02'          │
│    1    │           │          │           │            │       │      │      │                          │             '13'             │
│    2    │           │          │           │            │       │      │      │                          │             '33'             │
│    3    │           │          │           │            │       │      │      │                          │             '02'             │
│  index  │           │          │           │            │       │      │      │                          │              5               │
│  input  │           │          │           │            │       │      │      │                          │ "It's 13:33:02, at 18:45:00" │
│ groups  │           │          │           │            │ '13'  │ '33' │ '02' │                          │                              │
│ indices │ [ 5, 13 ] │ [ 5, 7 ] │ [ 8, 10 ] │ [ 11, 13 ] │       │      │      │ [Object: null prototype] │                              │
└─────────┴───────────┴──────────┴───────────┴────────────┴───────┴──────┴──────┴──────────────────────────┴──────────────────────────────┘
*/

/*
Before starting to create regular expressions, you have to learn perhaps the most complex part: the special characters or symbols they have. Certain characters have a special meaning within regular expressions, and even many of them depend on where they are to have that special meaning.

Basic clases
1. .: Wildcard, means any character (letter, number, symbol...), but that occupies only 1 character.
2. \: Preceded by a special character, it invalidates it (it's called "escaping").
*/

regexp = /K.vin/;

regexp.test("Kevin");      // true (the text "Kevin" matchs with the pathern)
regexp.test("kevin");      // false (The «K» must be uppercase)

regexp = /K.vin/i;

regexp.ignoreCase        // true
regexp.test("kevin");     // true (we ignore upper/lower with the flag «i»)

/*
As you can see, the . is used as a symbol or special character and means "any character". However, we could add a \ before the ., and thus escape the period and instead of having a special meaning (any character) it has the literal meaning of a period:
*/

regexp = /cat./;

regexp.test("cat.");      // true
regexp.test("catses");      // true
regexp.test("cats ");      // true

regexp = /cat\./;

regexp.test("cat.");      // true (it's literally the dot)
regexp.test("catses");      // false
regexp.test("cats ");      // false

/*
Character set

Within regular expressions, square brackets [] have a special meaning. This is a mechanism for enclosing a set of custom characters or alternatives. But on the other hand, if we include a circumflex ^ inside the square brackets, we invert the meaning, meaning that the custom character set does not exist:

1. []: Character range. Any of the characters inside the brackets.
2. [^]: That any of the characters inside the square brackets do not exist.
3. |: It establishes an alternative: what is on the left or what is on the right.
*/

regexp = /[aeiou]/i;    // RegExp that acepts vowels (upper/lower)

regexp.test("a");             // true (it's vowel)
regexp.test("E");             // true (it's vowel, ignore upper/lower because has the flag «i»)
regexp.test("t");             // false (it's not vowel)

regexp = /[^aeiou]/i;   // RegExp that does not acept vowels (upper/lower)

regexp.test("a");             // false
regexp.test("E");             // false
regexp.test("T");             // true
regexp.test("m");             // true

regexp = /car|cat/;   // RegExp que acepta "casa" o "cama"

regexp.test("car");          // true
regexp.test("cat");          // true
regexp.test("cap");          // false

regexp = /ho(s|m)(t|e)/;  // RegExp that acepts "host" or "home"

regexp.test("host");        // true
regexp.test("home");        // true
regexp.test("horse");        // false

/*
Character range

Inside the brackets [], if we set two characters separated by a hyphen, for example [0-9], it is understood that we indicate the range of characters between 0 and 9, without having to write them all explicitly.

In this way we can create ranges like [A-Z] (an uppercase letter) or [a-z] (a lowercase letter), or even several ranges like [A-Za-z0-9] (an uppercase, lowercase letter or a digit from 0 to 9):

1- [0-9]: \d: A digit from 0 to 9.
2. [^0-9]: \D: There is no digit from 0 to 9.
3. [A-Z]: Capital letter from A to Z. Excludes ñ or accented letters.
4. [a-z]: Lowercase letter from a to z. Excludes ñ or accented letters.
5. [A-Za-z0-9]: \w: Alphanumeric character (uppercase letter, lowercase letter, or digit).
6. [^A-Za-z0-9]: \W: There is no alphanumeric character (uppercase letter, lowercase letter, or digit).
7. [ \t\r\n\f]: \s: White space character (space, TAB, CR, LF, or FF).
8. [^ \t\r\n\f]: \S: There is no whitespace character (space, TAB, CR, LF, or FF).
9. \xN: Hex character number N.
10. \uN: Unicode character number N.

In regular expressions we can write both the special character and the alternative notation, which are equivalent and mean the same thing. For example, it is the same to write [0-9] as \d. Some programmers find the first way more explanatory and others the second more comfortable.
*/

/*
Anchors

There is something important that we have omitted so far. Within regular expressions, anchors are a very important resource, since they allow you to delimit search patterns and indicate whether they start or end with specific characters, being much more specific when performing the search:

1. ^: Defines the beginning of the pattern. It means start with.
2. $: Defines the end of the pattern. It means ends in.
3. \b: Limit one word separated by spaces, punctuation, or start/end.
4. \B: Opposite of previous. Position between 2 alphanumeric or non-alphanumeric characters.
*/

regexp = /^st/i;     // It must start with "st"

regexp.test("Straightforward");      // true  (starts with "st" and has the flag «i»)
regexp.test("Stanford");      // true  (starts with "st" and has the flag «i»)
regexp.test("Splash");    // false  (does not start with "st" and has the flag «i»)

regexp = /to$/i;      // It must end with "to"

regexp.test("Tomato");      // true
regexp.test("Tomatoes");      // false (Contains "to" but does not end with "to")

regexp = /ok\b/;

regexp.test("Facebook is a bit company.");  // true (after "ok" there is a space)
regexp.test("Do you like that book?");           // true (after "ok" there is a question sign)
regexp.test("I like to be living in Brookling.");      // false (after "ok" the word continues)
regexp.test("Phrases that ends with ok");       // true (after "ok" the string ends)

/*
Quantifiers

In regular expressions, quantifiers allow you to indicate how many times the immediately preceding character can be repeated. There are several types of quantifiers:

1. *: The previous character can appear 0 or more times.
2. +: The previous character can appear 1 or more times.
3. ?: The preceding character may or may not appear (it is optional).
4. {n}: The previous character appears n times.
5. {n,}: The previous character appears n or more times.
6. {n,m}: The previous character appears from n to m times.
*/

regexp = /a*/;   // 'a' appears 0 or more times in the string

regexp.test("car");       // true 
regexp.test("a");      // true 
regexp.test("aa");     // true 
regexp.test("aba");    // true 
regexp.test("bbb");    // true 

regexp = /a+/;    // 'a' appears 1 o more ties (equivalent to /aa*/)

regexp.test("");        // false
regexp.test("a");       // true
regexp.test("aa");      // true
regexp.test("aba");     // true
regexp.test("bbb");     // false

regexp = /shoots?/i;      // Acepts as much "shoot" as "shoots"

regexp.test("I heart shoots in the room."); // true
regexp.test("He shooted to my sister."); // true
regexp.test("It was a water gun."); // false

/*
The following three quantifiers are used when we need to specify more the number of repetitions of the previous character. For example, {n} indicates an exact number, {n,} indicates at least n times, and {n,m} states that it can be repeated from n to m times:
*/

regexp = /[0-9]{2}/;    // A number formed by two digits (from 0 to 9)

regexp.test(42);              // true
regexp.test(88);              // true
regexp.test(1);               // false
regexp.test(100);             // true

regexp = /^[0-9]{2}$/;    // A number fromed by 2 digits exactly (from 0 to 9)

regexp.test(4);                 // false (no llega a 2 dígitos)
regexp.test(55);                // true
regexp.test(100);               // false (it does not have exactly 2 digit )

regexp = /^[0-9]{3,}$/;

regexp.test(33);                // false (it must have at least 3 digits)
regexp.test(4923);              // true

regexp = /^[0-9]{2,5}$/;

regexp.test(2);                 // false (no tiene de 2 a 5 dígitos)
regexp.test(444);               // true
regexp.test(543213);            // false (no tiene de 2 a 5 dígitos)


/*
Knowledge taken from https://lenguajejs.com/javascript/regexp/.
Who has created a game to take practice in this page https://manzdev.github.io/regex-people/, the repository with the code is in here https://github.com/ManzDev/regex-people
*/