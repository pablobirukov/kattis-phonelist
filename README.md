# Phone List

## [Problem](https://open.kattis.com/problems/phonelist)

Given a list of phone numbers, determine if it is consistent in the sense that no number is the prefix of another. Let’s say the phone catalogue listed these numbers:

* Emergency 911
* Alice 97 625 999
* Bob 91 12 54 26

In this case, it’s not possible to call Bob, because the central would direct your call to the emergency line as soon as you had dialled the first three digits of Bob’s phone number. So this list would not be consistent.

### Input
The first line of input gives a single integer, 1 ≤ _t_ ≤ 40
, the number of test cases. Each test case starts with _n_
, the number of phone numbers, on a separate line, 1 ≤ _n_ ≤ 10000
. Then follows _n_
 lines with one unique phone number on each line. A phone number is a sequence of at most ten digits. Note that leading zeros in phone numbers are significant, e.g., “0911” is a different phone number than “911”.

### Output
For each test case, output “YES” if the list is consistent, or “NO” otherwise.
Output
For each test case, output “YES” if the list is consistent, or “NO” otherwise.

| Sample Input |
| --- |
| 2 |
| 3 |
| 911 |
| 97625999 |
| 91125426 |
| 5 |
| 113 |
| 12340 |
| 123440 |
| 12345 |
| 98346 |

| Sample Output |
| --- |
| NO |
| YES |


## Idea

* for each test case we'll create a hash map (js native object) where
each node represents a digit of a phone number;

* each node is to have `terminal` flag set to `true` if it epresents
last digit in a phone number;

## Thus

* while we add new phone number digit by digit we are to dd new node,
otherwise the number is contained by other phone number

* if we reached the node which is `terminal`, we've just ound a phone number
contained by number which is being added now

## Complexity

`O(n)`

---

`npm t` tests solution

`npm run build` creates `dist/kattis-ready.js`
