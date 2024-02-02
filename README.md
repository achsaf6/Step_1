#                                                STEP-1 Game
![Logo](src/Pages/images/step-1_logo.svg)

## Overview

Welcome to STEP-1, a mobile game designed for participants to engage in tasks and competitions across three stages. This README provides essential information about the game, its instructions, important components, and user feedback from pilot tests.

## Game Links

- [Game Website](https://achsaf6.github.io/Step_1/)
- [GitHub Repository](https://github.com/itaybober/Step_1/)

## Game Instructions

### 1. Set Up

- Create an anonymous user profile.
- A single host will initiate a new game, selecting various filter options to tailor the game to everyone’s needs.
- **Note:** The “riddles” filter is not implemented, choosing it could lead to unexpected behavior.
- On the Covenant Page, players will receive a pin to connect to the same game.
- All players put a finger on the host's phone to initiate the game.

### 2. The Game

Embark on a series of rounds, each consisting of three distinct types of missions tailored to your unique preferences, including a unique secret mission.

- Types of missions:
  a. **Secret Mission:** Each participant is assigned a confidential and unique mission at the game's start. Successfully complete this mission before the game ends to earn points.
  b. **Survival Mission:** Engage in fierce competition as all players compete against each other within the same round.
  c. **Punishment Mission:** Reserved exclusively for the participant who received the fewest points in the survival mission, this punishment awaits them.
  d. **Group Mission:** Collaborate with fellow participants to tackle a cooperative task.

- The End of the Game: Revel in the final moments as a winner is declared, showcasing their exceptional performance. Enjoy a collection of snapshots taken throughout the game, preserving memories and highlights.

![Game Flow](src/Achsaf_Folder/Screenshot 2024-02-02 175145.png)

## Important Components

### 1. Scoring

The scoring system calculates the number of points each player earns upon completing a mission. At the start of a mission (excluding the secret mission), a timer begins, and the score is determined based on the time taken to finish the mission. Successfully accomplishing the secret mission rewards substantial points, impacting the final game results.

### 2. Photographic Component

On each mission page, after completing the mission, participants must capture a picture to validate mission completion. Photography is mandatory for Survival and Punishment missions. The photos are stored in the database and showcased at the game's conclusion, enhancing enjoyment and creating souvenirs for participants to cherish.

### 3. Game Manager

To keep everything organized, three classes were built: Game, Player, and Mission. Game object is generated and filled with relevant data at the start of the game. Players are added to the game as references in Firebase as they join. Relevant Mission is added and removed as needed. Actions of these three classes (moving to the next mission, adding points to a player, adding photos) are done by sending updates directly to Firebase. The Game Manager has listeners/sockets for these kinds of updates (onSnapshot). Updates received are then used to update the local copy to match the Firebase copy and display the result.

## Architectural Overview

The project directory includes folders and files like:

- White_Sauce
- node_modules
- public
- react_app
- src
   - App.tsx
   - Components
   - Classes.tsx
   - Config
   - Pages
   - Images
   - GameManager.tsx
   - Theme_page.tsx
   - theme.tsx

## User Pilots

### Case 1: Couple of Friends Pilot

#### Positive Feedback:

- Concept well-received and liked.
- Design visually appealing and entertaining.
- Competitive element enjoyed.

#### Suggestions for Improvement:

- Add a "go back" option after clicking the "Ready" button for the secret mission.
- Enhance visibility of the guide icon on the opening screen.
- Incorporate a progress bar for tracking progress.
- Introduce more variety in task features.

### Case 2: Strauss Family Pilot

#### Positive Feedback:

- Design and message well-received and appreciated.
- Enjoyed the camera feature and photo album creation.
- Excitement generated by placing fingers together to launch the game.

#### Suggestions for Improvement:

- Increase variety in filters.
- Expand the mission pool.
- Consider user stress related to task timers.

Feel free to explore the game on the [website](https://achsaf6.github.io/Step_1/) and provide feedback!