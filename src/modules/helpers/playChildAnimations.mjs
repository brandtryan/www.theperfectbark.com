// Helper function to create and start animation
export function playChildAnimations(element) {
  if (!element || element.getAnimations().length === 0) {
    return null;
  } else if (element.nodeName.toUpperCase() === 'P') {
    const childrenArray = Array.from(element.children);

    const childAnimations = childrenArray.map((child) => child.getAnimations());

    element.addEventListener('click', () => {
      childAnimations.forEach((childAnimation) => childAnimation.play());
    });
  };
}
