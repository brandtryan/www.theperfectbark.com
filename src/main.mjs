import { createAndPlayAnimation } from "./modules/helpers/createAndPlayAnimation.mjs";
import { sections, lines, words, lineElements } from "./modules/elements.mjs";
import { lineWordCounts } from "./modules/helpers/lineWordCounts.mjs";
import { lineDurations, lineReadingTimes } from "./modules/helpers/lineReadingTimes.mjs"

const { s00l00Duration,
  s00l01Duration,
  s00l02Duration,
  s00l03Duration,
  s00l04Duration,
  s00l05Duration,
  s00l06Duration,
  s00l07Duration,
  s00l08Duration,
  s01l00Duration,
  s01l01Duration,
  s01l02Duration,
  s01l03Duration,
  s01l04Duration,
  s01l05Duration,
  s01l06Duration,
  s01l07Duration,
  s01l09Duration,
  s01l10Duration,
  s01l11Duration,
  s01l12Duration,
  s01l13Duration,
  s01l14Duration,
  s01l15Duration,
  s01l16Duration,
  s02l00Duration,
  s02l01Duration,
  s02l02Duration,
  s02l03Duration,
  s02l04Duration,
  s02l05Duration,
  s02l06Duration,
  s02l07Duration,
  s02l08Duration,
  s02l09Duration,
  s02l10Duration,
  s02l11Duration,
  s03l00Duration,
  s03l01Duration,
  s03l02Duration,
  s03l03Duration,
  s03l04Duration,
  s03l05Duration,
  s03l06Duration,
  s03l07Duration,
  s04l00Duration,
  s04l01Duration,
  s04l02Duration,
  s04l03Duration,
  s04l04Duration,
  s05l00Duration,
  s05l01Duration,
  s05l02Duration,
  s05l03Duration,
  s05l04Duration,
  s05l05Duration,
  s05l06Duration,
  s05l07Duration,
  s05l08Duration,
  s05l09Duration,
  s05l10Duration,
  s05l11Duration,
  s05l12Duration,
  s05l13Duration,
  s05l14Duration,
  s05l15Duration,
  s06l00Duration,
  s06l01Duration,
  s06l02Duration,
  s06l03Duration,
  s06l04Duration,
  s06l05Duration,
  s06l06Duration,
  s06l07Duration,
  s06l08Duration,
  s06l09Duration,
  s06l10Duration,
  s07l00Duration,
  s07l01Duration,
  s07l02Duration,
  s07l03Duration,
  s07l04Duration,
  s07l05Duration,
  s07l06Duration,
  s07l07Duration,
  s08l00Duration,
  s08l01Duration,
  s08l02Duration,
  s08l03Duration,
  s08l04Duration,
  s08l05Duration,
  s08l06Duration,
  s08l07Duration,
  s08l08Duration,
  s08l09Duration,
  s08l10Duration,
  s08l11Duration,
  s09l00Duration,
  s09l01Duration,
  s09l02Duration,
  s09l03Duration,
  s09l04Duration,
  s09l05Duration,
  s09l06Duration,
  s09l07Duration,
  s09l08Duration,
  s09l09Duration,
  s09l10Duration,
  s09l11Duration,
  s09l12Duration,
  s09l13Duration,
  s09l14Duration,
  s09l15Duration,
  s09l16Duration,
  s09l17Duration,
  s09l18Duration,
  s10l00Duration,
  s10l01Duration,
  s10l02Duration,
  s10l03Duration,
  s10l04Duration,
  s10l05Duration,
  s10l06Duration,
  s10l07Duration,
  s10l08Duration,
  s10l09Duration,
  s10l10Duration,
  s10l11Duration,
  s10l12Duration,
  s10l13Duration,
  s10l14Duration,
  s10l15Duration,
  s11l00Duration,
  s11l01Duration,
  s11l02Duration,
  s11l03Duration,
  s11l04Duration,
  s11l05Duration,
  s11l06Duration,
  s11l07Duration,
  s11l08Duration,
  s11l09Duration,
  s11l10Duration,
  s11l11Duration,
  s11l12Duration,
  s12l00Duration,
  s12l01Duration,
  s12l02Duration,
  s12l03Duration,
  s12l04Duration,
  s13l00Duration,
  s13l01Duration,
  s13l02Duration,
  s13l03Duration,
  s13l04Duration,
  s13l05Duration,
  s13l06Duration,
  s13l07Duration,
  s13l08Duration,
  s13l09Duration,
  s13l10Duration,
  s14l00Duration,
  s14l01Duration,
  s14l02Duration,
  s14l03Duration,
  s14l04Duration,
  s14l05Duration,
  s14l06Duration,
  s14l07Duration,
  s14l08Duration,
  s15l00Duration,
  s15l01Duration,
  s15l02Duration,
  s15l03Duration,
  s16l00Duration,
  s16l01Duration,
  s16l02Duration,
  s16l03Duration,
  s16l04Duration,
  s16l05Duration,
  s16l06Duration,
  s16l07Duration,
  s16l08Duration,
  s16l09Duration,
  s16l10Duration,
  s16l11Duration,
  s16l12Duration,
  s16l13Duration,
  s17l00Duration,
  s17l01Duration,
  s17l02Duration,
  s17l03Duration,
  s17l04Duration,
  s17l05Duration,
  s17l06Duration,
  s17l07Duration,
  s17l08Duration,
  s17l09Duration,
  s18l00Duration,
  s18l02Duration,
  s18l04Duration,
  s18l06Duration,
  s18l08Duration,
  s18l10Duration,
  s18l12Duration,
  s18l14Duration,
  s19l00Duration,
  s19l01Duration,
  s19l02Duration,
  s19l03Duration,
  s20l00Duration,
  s20l01Duration,
  s20l02Duration,
  s20l03Duration,
  s20l05Duration,
  s20l07Duration,
  s20l08Duration,
  s21l00Duration,
  s21l01Duration,
  s21l02Duration,
  s21l03Duration,
  s21l04Duration,
  s21l05Duration,
  s21l06Duration,
  s22l00Duration,
  s22l01Duration,
  s22l02Duration,
  s22l03Duration,
  s23l00Duration,
  s23l01Duration,
  s23l02Duration,
  s23l03Duration,
  s23l04Duration,
  s23l05Duration,
  s23l06Duration,
  s23l07Duration,
  s24l00Duration,
  s24l01Duration,
  s25l00Duration,
  s26l00Duration,
  s26l01Duration,
  s26l02Duration,
  s26l03Duration,
  s26l04Duration,
  s27l00Duration,
  s27l01Duration,
  s27l02Duration,
  s27l03Duration,
  s27l04Duration,
  s27l05Duration,
  s27l06Duration,
  s27l07Duration,
  s27l08Duration,
  s28l00Duration,
  s28l01Duration,
  s28l02Duration,
  s28l03Duration,
  s28l04Duration,
  s28l05Duration,
  s28l06Duration,
  s28l07Duration,
  s29l00Duration,
  s29l01Duration,
  s29l02Duration,
  s29l03Duration,
  s29l04Duration,
  s29l05Duration,
  s29l06Duration,
  s29l07Duration,
  s30l00Duration,
  s30l01Duration,
  s30l02Duration,
  s30l03Duration,
  s30l04Duration,
  s30l05Duration,
  s30l06Duration,
  s31l00Duration,
  s31l01Duration,
  s31l02Duration,
  s31l03Duration,
  s31l04Duration,
  s31l05Duration,
  s31l06Duration,
  s31l07Duration,
  s32l00Duration,
  s32l01Duration,
  s32l02Duration,
  s32l03Duration,
  s32l04Duration,
  s33l00Duration,
  s33l01Duration,
  s33l02Duration,
  s33l03Duration,
  s33l04Duration,
  s34l01Duration,
  s34l02Duration,
  s34l03Duration,
  s34l04Duration
} = lineDurations;

const { ...allDurations } = lineDurations;

const pElements = [...lines];

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

// Create animations for all words
const wordAnimations = words.map((word) => {
  const wordAnimation = createAndPlayAnimation(word);
  return wordAnimation;
});

pElements.forEach((line) => {
  let arrayName = `${line.id}Animations`;

  window[arrayName] = [];

  wordAnimations.forEach((wordAnimation) => {
    if (wordAnimation.id.includes(`${line.id}`)) {
      window[arrayName].push(wordAnimation);
    }
  })

  // console.log(`Array ${arrayName} now contains ${window[arrayName].length} animations.`);
});
console.log(s00l00Duration);
console.log(s00l00Animations);
console.log(s00l00w01 === document.getElementById('s00l00w01'));




// Pause all word animations
wordAnimations.forEach(animation => animation?.pause());

// Play all word animations
// wordAnimations.forEach(animation => animation?.play());


// // Create animations for all lines
// const lineAnimations = lines.map((line, index) => {
//   const lineAnimation = createAndPlayAnimation(line);
//   return lineAnimation;
// });

// Get a specific animation
// const firstLineAnimation = s00LineAnimations[0];

// // Pause all line animations
// lineAnimations.forEach(animation => animation?.pause());

// Play all animations
// lineAnimations.forEach(animation => animation?.play());


// // Create animations for all sections
// const sectionAnimations = sections.map((section, index) => {
//   const sectionAnimation = createAndPlayAnimation(section);
//   return sectionAnimation;
// });

// Get a specific section animation
// const firstSectionAnimation = sectionAnimations[0];

// // Pause all sectionanimations
// sectionAnimations.forEach(animation => animation?.pause());

// Play all section animations
// sectionAnimations.forEach(animation => animation?.play());


