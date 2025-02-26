

export const movingTextElements = Array.from(document.querySelectorAll('moving-text'));
export const shadowRoot = movingTextElements.shadowRoot;
export const paragraphSlots = Array.from(shadowRoot.querySelectorAll('::slotted(p)'));
export const wordSlots = Array.from(shadowRoot.querySelectorAll('::slotted(span)'));

export const [pages] = [movingTextElements];

// export const [sections] = [sectionsArray];
// export const [lines] = [linesArray];
// export const [words] = [wordsArray];
