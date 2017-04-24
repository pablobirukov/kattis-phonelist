# Phone List

  ### Idea
  
  * for each test case we'll create a hash map (js native object) where
  each node represents a digit of a phone number;
  
  * each node is to have `terminal` flag set to `true` if it epresents
  last digit in a phone number;
  
  ### Thus
  
  * while we add new phone number digit by digit we are to dd new node,
  otherwise the number is contained by other phone number
  
  * if we reached the node which is `terminal`, we've just ound a phone number
  contained by number which is being added now

### Complexity

`O(n)`

---

`npm t` tests solution

`npm run build` creates `dist/kattis-ready.js`