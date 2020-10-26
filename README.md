# Sortable Challenge

## Implementation

In my implementation, I used the `input.json` to run each auction provided in the file. I also process `config.json` to use Maps in order to improve lookup runtime. For each auction that was provided in the input, I 'ran the auction' where I first checked against the constraints provided such as checking the validity of the auction's site, the validity of the bidders and the adjusted bid values. After everything was considered valid, I determined the highest bid for each unit of the auction. If a unit was not bid on, an empty object `{}` was returned. After all the auctions were run, the output was logged to `console.log()`. I used `console.log()` as, in JavaScript, this is a wrapper around `stdout`.

### Assumptions
- A `config.json` and `input.json` will always be provided and will be valid JSON. However, they can be empty JSON files.
