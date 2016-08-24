# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Specifications

* A random number between 1-6 is generated
 * Input: some event that triggers the "die roll"
 * Output: An integer between 1 and 6 is returned

* Based on number rolled, 1 triggers end of player's turn
 * Input: random die roll returns 1
 * Output: Returns "end of turn"

* A player's successive die rolls are added until a 1 is rolled
 * Input: die rolled as thus - 6, 6, 6, 4, 1
 * Output: running total - 6, 12, 18, 22, with 0 returned as final score once 1 is rolled

* A player can elect to "hold" at which point the subtotal is added to player's score and "end of turn" occurs
 * Input: player 1 rolls - 6, 6, 6, hold!
 * Output: player 1 score = 18, "end of turn"

* An "end of turn" event allows above scoring rules to apply to the next player
 * Input: player 1 triggers "end of turn"
 * Output: die rolls add to player 2 score

* If a player's score equals or exceeds 100 at the end of turn, then that player wins
 * Input: player 1 score 98, player 1 rolls 2
 * Output: "player 1 wins"

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
