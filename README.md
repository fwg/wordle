# Worlde+

A recreation of the popular game [Wordle](https://www.nytimes.com/games/wordle/) by Josh Wardle (now purchased by the New York Times), with additional modes and features.

Hosted at https://wordle.faltrock.de/.

# Additional Features
- For differences to the stock NYT Wordle, see https://github.com/MikhaD/wordle.
- No analytics.
- This version tracks your guessing time instead of showing the time to the next available wordle.

# Forking this project
Anybody is welcome to fork this repository and do what they like with it, provided they follow the accompanying license (GPL-3.0).
I would also appreciate if you could link back to this repository and credit me in your project.

Have fun :)

<details>
<summary>How to create a new mode</summary>

- Add the mode name to the **end** of the GameMode enum in `enums.ts`
- Add a case for that mode in the newSeed function in `utils.ts`
- Add a ModeData object to the modeData modes array in `utils.ts`
</details>
