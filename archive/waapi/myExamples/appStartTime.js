let wrds = document.getElementsByClassName("words");
let wordsArray = [];

let str = `My teachers look at me funny when I make weird noises, but my friends, they usually just laugh. It's funny
to them, and they are pretty cool about it — they don't make fun of me really, but only get a kick out of
it — like when we are in the middle of a test or something, and then out of nowhere I let out a bark, I mean
a loud bark, where everyone turns around to me and smiles, and then someone starts laughing, and then
everyone else gets going. To tell you the truth, it doesn't bother me at all, and I laugh right along with
them most of the time.`

// Create array of words
// wordsArray = str.split(/(\s+)/);
wordsArray = str.split(/(\s+)/);

// Create a container element to hold the divs
const container = document.createElement('div');
container.id = "container";

// Loop through the array
for (let i = 0; i < wordsArray.length; i++) {
  // Create a div element for each element in the array
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = [i];
  // Give each new div element the words class
  div.className = "words";
  // Set the text content of the div to the current element
  div.textContent = wordsArray[i];

  // Append the div to the container
  container.appendChild(div);
}
// Now you can append the container to the desired location in your HTML document
document.body.appendChild(container);

const element = document.getElementById("226")

const anima1 = element.animate(
  [
    { transform: 'translateX(0px)' },
    { transform: 'translateX(10px)' },
  ],
  {
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
    id: "anima1",
  }
);

const anima2 = element.animate(
  [
    { opacity: 1 },
    { opacity: 0 }
  ],
  {
    duration: 2000,
    iterations: Infinity,
    direction: 'alternate'
  }
);

anima1.playbackRate = 2;
anima2.playbackRate = 2;

anima2.startTime = anima1.startTime + 3000;