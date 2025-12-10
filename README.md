Project: Memory Card from The Odin Project's React Course

I turned themed this project to be a Dragonball Ball memory card game using the the Dragonball API here: https://web.dragonball-api.com/documentation

My second React project ever after learning useEffect, and it was another challenging project as I'm getting used to "thinking in React".

The logic of the game is actually quite easy, but it's working with React and states which I am not used to yet. Most of the logic I figured out without a problem - fetching data, storing the info, displaying cards, tracking score, etc. For the shuffle function, I found a Fisher-Yates shuffle function I found online, so that helped a lot.

My main challenge was working with React "purity", sticking to React immutability, and making sure my logic ran AFTER render using useEffect. It took a while, but eventually it clicked: React re-renders based entirely on state changes, so if I want the UI to update, I need to treat state as immutable and always give React a brand-new value.

Particularly for shuffling the cards, it wasn't the logic that was difficult, but I ran in circles trying to figure out where and how to save the information and where to call the shuffle functions. I ran into infinite loops trying to run the shuffle function ON MOUNT, whereas shuffle on click was simple.

A fun little game and some good React practice. I think I'll need more practice though...