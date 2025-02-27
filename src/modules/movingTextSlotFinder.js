export function movingTextSlotFinder() {

  // Get all instances of the 'moving-text' web component
  // const movingTextComponents = document.querySelectorAll('moving-text');
  const myComponent = document.querySelector('moving-text');

  // movingTextComponents.forEach(myComponent => {
  //   const shadowRoot = myComponent.shadowRoot;
  // movingTextComponents.forEach(myComponent => {
  const shadowRoot = myComponent.shadowRoot;

  // Find the slot element with the name "my-slot-name" within this specific component
  const s00l00 = shadowRoot.querySelector('slot[name="s00l00"]');
  const s00l01 = shadowRoot.querySelector('slot[name="s00l01"]');
  const s00l02 = shadowRoot.querySelector('slot[name="s00l02"]');
  const s00l03 = shadowRoot.querySelector('slot[name="s00l03"]');
  const s00l04 = shadowRoot.querySelector('slot[name="s00l04"]');
  const s00l05 = shadowRoot.querySelector('slot[name="s00l05"]');
  const s00l06 = shadowRoot.querySelector('slot[name="s00l06"]');
  const s00l07 = shadowRoot.querySelector('slot[name="s00l07"]');
  const s00l08 = shadowRoot.querySelector('slot[name="s00l08"]');

  switch (myComponent) {
    case s00l00:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l00);

      const s00l00AssignedNodes = s00l00.assignedNodes();
      console.log("assigned nodes:", s00l00AssignedNodes);

      const lightDomElements = myComponent.querySelectorAll('[slot="s00l00"]');
      console.log("light dom elements for component:", myComponent, lightDomElements);
      break;
    case s00l01:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l01);

      const s00l01AssignedNodes = s00l01.assignedNodes();
      console.log("assigned nodes:", s00l01AssignedNodes);

      const s00l01LightDomElements = myComponent.querySelectorAll('[slot="s00l01"]');
      console.log("light dom elements for component:", myComponent, s00l01LightDomElements);
      break;
    case s00l02:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l02);

      const s00l02AssignedNodes = s00l02.assignedNodes();
      console.log("assigned nodes:", s00l02AssignedNodes);

      const s00l02LightDomElements = myComponent.querySelectorAll('[slot="s00l02"]');
      console.log("light dom elements for component:", myComponent, s00l02LightDomElements);
      break;
    case s00l03:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l03);

      const s00l03AssignedNodes = s00l03.assignedNodes();
      console.log("assigned nodes:", s00l03AssignedNodes);

      const s00l03LightDomElements = myComponent.querySelectorAll('[slot="s00l03"]');
      console.log("light dom elements for component:", myComponent, s00l03LightDomElements);
      break;
    case s00l04:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l04);

      const s00l04AssignedNodes = s00l04.assignedNodes();
      console.log("assigned nodes:", s00l04AssignedNodes);

      const s00l04LightDomElements = myComponent.querySelectorAll('[slot="s00l04"]');
      console.log("light dom elements for component:", myComponent, s00l04LightDomElements);
      break;
    case s00l05:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l05);

      const s00l05AssignedNodes = s00l05.assignedNodes();
      console.log("assigned nodes:", s00l05AssignedNodes);

      const s00l05LightDomElements = myComponent.querySelectorAll('[slot="s00l05"]');
      console.log("light dom elements for component:", myComponent, s00l05LightDomElements);
      break;
    case s00l06:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l06);

      const s00l06AssignedNodes = s00l06.assignedNodes();
      console.log("assigned nodes:", s00l06AssignedNodes);

      const s00l06LightDomElements = myComponent.querySelectorAll('[slot="s00l06"]');
      console.log("light dom elements for component:", myComponent, s00l06LightDomElements);
      break;
    case s00l07:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l07);

      const s00l07AssignedNodes = s00l07.assignedNodes();
      console.log("assigned nodes:", s00l07AssignedNodes);

      const s00l07LightDomElements = myComponent.querySelectorAll('[slot="s00l07"]');
      console.log("light dom elements for component:", myComponent, s00l07LightDomElements);
      break;
    case s00l08:
      console.log('Found the slot in component:', myComponent);
      console.log('Slot element:', s00l08);

      const s00l08AssignedNodes = s00l08.assignedNodes();
      console.log("assigned nodes:", s00l08AssignedNodes);

      const s00l08LightDomElements = myComponent.querySelectorAll('[slot="s00l08"]');
      console.log("light dom elements for component:", myComponent, s00l08LightDomElements);
      break;

    default: console.log('Slot not found in component:', myComponent);
  }

  // To find elements that are assigned to the slot from the light DOM for THIS component.
  // });

  //   if (l00) {
  //     console.log('Found the slot in component:', myComponent);
  //     console.log('Slot element:', l00);

  //     const l00AssignedNodes = l00.assignedNodes();
  //     console.log("assigned nodes:", l00AssignedNodes);
  //   } else {
  //     console.log('Slot not found in component:', myComponent);
  //   }

  //   // To find elements that are assigned to the slot from the light DOM for THIS component.
  //   const lightDomElements = myComponent.querySelectorAll('[slot="l00"]');
  //   console.log("light dom elements for component:", myComponent, lightDomElements);
  // });
};

// const l00w00 = shadowRoot.querySelector('slot[name="l00w00"]');
// const l00w01 = shadowRoot.querySelector('slot[name="l00w01"]');
// const l00w02 = shadowRoot.querySelector('slot[name="l00w02"]');
// const l00w03 = shadowRoot.querySelector('slot[name="l00w03"]');
// const l00w04 = shadowRoot.querySelector('slot[name="l00w04"]');
// const l00w05 = shadowRoot.querySelector('slot[name="l00w05"]');
// const l00w06 = shadowRoot.querySelector('slot[name="l00w06"]');
// const l00w07 = shadowRoot.querySelector('slot[name="l00w07"]');
// const l00w08 = shadowRoot.querySelector('slot[name="l00w08"]');
// const l00w09 = shadowRoot.querySelector('slot[name="l00w09"]');
// const l00w10 = shadowRoot.querySelector('slot[name="l00w10"]');
// const l00w11 = shadowRoot.querySelector('slot[name="l00w11"]');
// const l00w12 = shadowRoot.querySelector('slot[name="l00w12"]');
// const l00w13 = shadowRoot.querySelector('slot[name="l00w13"]');
// const l00w14 = shadowRoot.querySelector('slot[name="l00w14"]');
// const l00w15 = shadowRoot.querySelector('slot[name="l00w15"]');

// const l03w00 = shadowRoot.querySelector('slot[name="l03w00"]');
// const l03w01 = shadowRoot.querySelector('slot[name="l03w01"]');
// const l03w02 = shadowRoot.querySelector('slot[name="l03w02"]');
// const l03w03 = shadowRoot.querySelector('slot[name="l03w03"]');
// const l03w04 = shadowRoot.querySelector('slot[name="l03w04"]');
// const l03w05 = shadowRoot.querySelector('slot[name="l03w05"]');
// const l03w06 = shadowRoot.querySelector('slot[name="l03w06"]');
// const l03w07 = shadowRoot.querySelector('slot[name="l03w07"]');
// const l03w08 = shadowRoot.querySelector('slot[name="l03w08"]');
// const l03w09 = shadowRoot.querySelector('slot[name="l03w09"]');
// const l03w10 = shadowRoot.querySelector('slot[name="l03w10"]');
// const l03w11 = shadowRoot.querySelector('slot[name="l03w11"]');
// const l03w12 = shadowRoot.querySelector('slot[name="l03w12"]');
// const l03w13 = shadowRoot.querySelector('slot[name="l03w13"]');
// const l03w14 = shadowRoot.querySelector('slot[name="l03w14"]');
// const l03w15 = shadowRoot.querySelector('slot[name="l03w15"]');

// const l02w00 = shadowRoot.querySelector('slot[name="l02w00"]');
// const l02w01 = shadowRoot.querySelector('slot[name="l02w01"]');
// const l02w02 = shadowRoot.querySelector('slot[name="l02w02"]');
// const l02w03 = shadowRoot.querySelector('slot[name="l02w03"]');
// const l02w04 = shadowRoot.querySelector('slot[name="l02w04"]');
// const l02w05 = shadowRoot.querySelector('slot[name="l02w05"]');
// const l02w06 = shadowRoot.querySelector('slot[name="l02w06"]');
// const l02w07 = shadowRoot.querySelector('slot[name="l02w07"]');
// const l02w08 = shadowRoot.querySelector('slot[name="l02w08"]');
// const l02w09 = shadowRoot.querySelector('slot[name="l02w09"]');
// const l02w10 = shadowRoot.querySelector('slot[name="l02w10"]');
// const l02w11 = shadowRoot.querySelector('slot[name="l02w11"]');
// const l02w12 = shadowRoot.querySelector('slot[name="l02w12"]');
// const l02w13 = shadowRoot.querySelector('slot[name="l02w13"]');
// const l02w14 = shadowRoot.querySelector('slot[name="l02w14"]');
// const l02w15 = shadowRoot.querySelector('slot[name="l02w15"]');

// const l03w00 = shadowRoot.querySelector('slot[name="l03w00"]');
// const l03w01 = shadowRoot.querySelector('slot[name="l03w01"]');
// const l03w02 = shadowRoot.querySelector('slot[name="l03w02"]');
// const l03w03 = shadowRoot.querySelector('slot[name="l03w03"]');
// const l03w04 = shadowRoot.querySelector('slot[name="l03w04"]');
// const l03w05 = shadowRoot.querySelector('slot[name="l03w05"]');
// const l03w06 = shadowRoot.querySelector('slot[name="l03w06"]');
// const l03w07 = shadowRoot.querySelector('slot[name="l03w07"]');
// const l03w08 = shadowRoot.querySelector('slot[name="l03w08"]');
// const l03w09 = shadowRoot.querySelector('slot[name="l03w09"]');
// const l03w10 = shadowRoot.querySelector('slot[name="l03w10"]');
// const l03w11 = shadowRoot.querySelector('slot[name="l03w11"]');
// const l03w12 = shadowRoot.querySelector('slot[name="l03w12"]');
// const l03w13 = shadowRoot.querySelector('slot[name="l03w13"]');
// const l03w14 = shadowRoot.querySelector('slot[name="l03w14"]');
// const l03w15 = shadowRoot.querySelector('slot[name="l03w15"]');

// const l04w00 = shadowRoot.querySelector('slot[name="l04w00"]');
// const l04w01 = shadowRoot.querySelector('slot[name="l04w01"]');
// const l04w02 = shadowRoot.querySelector('slot[name="l04w02"]');
// const l04w03 = shadowRoot.querySelector('slot[name="l04w03"]');
// const l04w04 = shadowRoot.querySelector('slot[name="l04w04"]');
// const l04w05 = shadowRoot.querySelector('slot[name="l04w05"]');
// const l04w06 = shadowRoot.querySelector('slot[name="l04w06"]');
// const l04w07 = shadowRoot.querySelector('slot[name="l04w07"]');
// const l04w08 = shadowRoot.querySelector('slot[name="l04w08"]');
// const l04w09 = shadowRoot.querySelector('slot[name="l04w09"]');
// const l04w10 = shadowRoot.querySelector('slot[name="l04w10"]');
// const l04w11 = shadowRoot.querySelector('slot[name="l04w11"]');
// const l04w12 = shadowRoot.querySelector('slot[name="l04w12"]');
// const l04w13 = shadowRoot.querySelector('slot[name="l04w13"]');
// const l04w14 = shadowRoot.querySelector('slot[name="l04w14"]');
// const l04w15 = shadowRoot.querySelector('slot[name="l04w15"]');

// const l05w00 = shadowRoot.querySelector('slot[name="l05w00"]');
// const l05w01 = shadowRoot.querySelector('slot[name="l05w01"]');
// const l05w02 = shadowRoot.querySelector('slot[name="l05w02"]');
// const l05w03 = shadowRoot.querySelector('slot[name="l05w03"]');
// const l05w04 = shadowRoot.querySelector('slot[name="l05w04"]');
// const l05w05 = shadowRoot.querySelector('slot[name="l05w05"]');
// const l05w06 = shadowRoot.querySelector('slot[name="l05w06"]');
// const l05w07 = shadowRoot.querySelector('slot[name="l05w07"]');
// const l05w08 = shadowRoot.querySelector('slot[name="l05w08"]');
// const l05w09 = shadowRoot.querySelector('slot[name="l05w09"]');
// const l05w10 = shadowRoot.querySelector('slot[name="l05w10"]');
// const l05w11 = shadowRoot.querySelector('slot[name="l05w11"]');
// const l05w12 = shadowRoot.querySelector('slot[name="l05w12"]');
// const l05w13 = shadowRoot.querySelector('slot[name="l05w13"]');
// const l05w14 = shadowRoot.querySelector('slot[name="l05w14"]');
// const l05w15 = shadowRoot.querySelector('slot[name="l05w15"]');

// const l06w00 = shadowRoot.querySelector('slot[name="l06w00"]');
// const l06w01 = shadowRoot.querySelector('slot[name="l06w01"]');
// const l06w02 = shadowRoot.querySelector('slot[name="l06w02"]');
// const l06w03 = shadowRoot.querySelector('slot[name="l06w03"]');
// const l06w04 = shadowRoot.querySelector('slot[name="l06w04"]');
// const l06w05 = shadowRoot.querySelector('slot[name="l06w05"]');
// const l06w06 = shadowRoot.querySelector('slot[name="l06w06"]');
// const l06w07 = shadowRoot.querySelector('slot[name="l06w07"]');
// const l06w08 = shadowRoot.querySelector('slot[name="l06w08"]');
// const l06w09 = shadowRoot.querySelector('slot[name="l06w09"]');
// const l06w10 = shadowRoot.querySelector('slot[name="l06w10"]');
// const l06w11 = shadowRoot.querySelector('slot[name="l06w11"]');
// const l06w12 = shadowRoot.querySelector('slot[name="l06w12"]');
// const l06w13 = shadowRoot.querySelector('slot[name="l06w13"]');
// const l06w14 = shadowRoot.querySelector('slot[name="l06w14"]');
// const l06w15 = shadowRoot.querySelector('slot[name="l06w15"]');

// const l07w00 = shadowRoot.querySelector('slot[name="l07w00"]');
// const l07w01 = shadowRoot.querySelector('slot[name="l07w01"]');
// const l07w02 = shadowRoot.querySelector('slot[name="l07w02"]');
// const l07w03 = shadowRoot.querySelector('slot[name="l07w03"]');
// const l07w04 = shadowRoot.querySelector('slot[name="l07w04"]');
// const l07w05 = shadowRoot.querySelector('slot[name="l07w05"]');
// const l07w06 = shadowRoot.querySelector('slot[name="l07w06"]');
// const l07w07 = shadowRoot.querySelector('slot[name="l07w07"]');
// const l07w08 = shadowRoot.querySelector('slot[name="l07w08"]');
// const l07w09 = shadowRoot.querySelector('slot[name="l07w09"]');
// const l07w10 = shadowRoot.querySelector('slot[name="l07w10"]');
// const l07w11 = shadowRoot.querySelector('slot[name="l07w11"]');
// const l07w12 = shadowRoot.querySelector('slot[name="l07w12"]');
// const l07w13 = shadowRoot.querySelector('slot[name="l07w13"]');
// const l07w14 = shadowRoot.querySelector('slot[name="l07w14"]');
// const l07w15 = shadowRoot.querySelector('slot[name="l07w15"]');

// const l08w00 = shadowRoot.querySelector('slot[name="l08w00"]');
// const l08w01 = shadowRoot.querySelector('slot[name="l08w01"]');
// const l08w02 = shadowRoot.querySelector('slot[name="l08w02"]');
// const l08w03 = shadowRoot.querySelector('slot[name="l08w03"]');
// const l08w04 = shadowRoot.querySelector('slot[name="l08w04"]');
// const l08w05 = shadowRoot.querySelector('slot[name="l08w05"]');
// const l08w06 = shadowRoot.querySelector('slot[name="l08w06"]');
// const l08w07 = shadowRoot.querySelector('slot[name="l08w07"]');
// const l08w08 = shadowRoot.querySelector('slot[name="l08w08"]');
// const l08w09 = shadowRoot.querySelector('slot[name="l08w09"]');
// const l08w10 = shadowRoot.querySelector('slot[name="l08w10"]');
// const l08w11 = shadowRoot.querySelector('slot[name="l08w11"]');
// const l08w12 = shadowRoot.querySelector('slot[name="l08w12"]');
// const l08w13 = shadowRoot.querySelector('slot[name="l08w13"]');
// const l08w14 = shadowRoot.querySelector('slot[name="l08w14"]');
// const l08w15 = shadowRoot.querySelector('slot[name="l08w15"]');

// const l09w00 = shadowRoot.querySelector('slot[name="l09w00"]');
// const l09w01 = shadowRoot.querySelector('slot[name="l09w01"]');
// const l09w02 = shadowRoot.querySelector('slot[name="l09w02"]');
// const l09w03 = shadowRoot.querySelector('slot[name="l09w03"]');
// const l09w04 = shadowRoot.querySelector('slot[name="l09w04"]');
// const l09w05 = shadowRoot.querySelector('slot[name="l09w05"]');
// const l09w06 = shadowRoot.querySelector('slot[name="l09w06"]');
// const l09w07 = shadowRoot.querySelector('slot[name="l09w07"]');
// const l09w08 = shadowRoot.querySelector('slot[name="l09w08"]');
// const l09w09 = shadowRoot.querySelector('slot[name="l09w09"]');
// const l09w10 = shadowRoot.querySelector('slot[name="l09w10"]');
// const l09w11 = shadowRoot.querySelector('slot[name="l09w11"]');
// const l09w12 = shadowRoot.querySelector('slot[name="l09w12"]');
// const l09w13 = shadowRoot.querySelector('slot[name="l09w13"]');
// const l09w14 = shadowRoot.querySelector('slot[name="l09w14"]');
// const l09w15 = shadowRoot.querySelector('slot[name="l09w15"]');

// const l10w00 = shadowRoot.querySelector('slot[name="l10w00"]');
// const l10w01 = shadowRoot.querySelector('slot[name="l10w01"]');
// const l10w02 = shadowRoot.querySelector('slot[name="l10w02"]');
// const l10w03 = shadowRoot.querySelector('slot[name="l10w03"]');
// const l10w04 = shadowRoot.querySelector('slot[name="l10w04"]');
// const l10w05 = shadowRoot.querySelector('slot[name="l10w05"]');
// const l10w06 = shadowRoot.querySelector('slot[name="l10w06"]');
// const l10w07 = shadowRoot.querySelector('slot[name="l10w07"]');
// const l10w08 = shadowRoot.querySelector('slot[name="l10w08"]');
// const l10w09 = shadowRoot.querySelector('slot[name="l10w09"]');
// const l10w10 = shadowRoot.querySelector('slot[name="l10w10"]');
// const l10w11 = shadowRoot.querySelector('slot[name="l10w11"]');
// const l10w12 = shadowRoot.querySelector('slot[name="l10w12"]');
// const l10w13 = shadowRoot.querySelector('slot[name="l10w13"]');
// const l10w14 = shadowRoot.querySelector('slot[name="l10w14"]');
// const l10w15 = shadowRoot.querySelector('slot[name="l10w15"]');

// const l11w00 = shadowRoot.querySelector('slot[name="l11w00"]');
// const l11w01 = shadowRoot.querySelector('slot[name="l11w01"]');
// const l11w02 = shadowRoot.querySelector('slot[name="l11w02"]');
// const l11w03 = shadowRoot.querySelector('slot[name="l11w03"]');
// const l11w04 = shadowRoot.querySelector('slot[name="l11w04"]');
// const l11w05 = shadowRoot.querySelector('slot[name="l11w05"]');
// const l11w06 = shadowRoot.querySelector('slot[name="l11w06"]');
// const l11w07 = shadowRoot.querySelector('slot[name="l11w07"]');
// const l11w08 = shadowRoot.querySelector('slot[name="l11w08"]');
// const l11w09 = shadowRoot.querySelector('slot[name="l11w09"]');
// const l11w10 = shadowRoot.querySelector('slot[name="l11w10"]');
// const l11w11 = shadowRoot.querySelector('slot[name="l11w11"]');
// const l11w12 = shadowRoot.querySelector('slot[name="l11w12"]');
// const l11w13 = shadowRoot.querySelector('slot[name="l11w13"]');
// const l11w14 = shadowRoot.querySelector('slot[name="l11w14"]');
// const l11w15 = shadowRoot.querySelector('slot[name="l11w15"]');

// const l12w00 = shadowRoot.querySelector('slot[name="l12w00"]');
// const l12w01 = shadowRoot.querySelector('slot[name="l12w01"]');
// const l12w02 = shadowRoot.querySelector('slot[name="l12w02"]');
// const l12w03 = shadowRoot.querySelector('slot[name="l12w03"]');
// const l12w04 = shadowRoot.querySelector('slot[name="l12w04"]');
// const l12w05 = shadowRoot.querySelector('slot[name="l12w05"]');
// const l12w06 = shadowRoot.querySelector('slot[name="l12w06"]');
// const l12w07 = shadowRoot.querySelector('slot[name="l12w07"]');
// const l12w08 = shadowRoot.querySelector('slot[name="l12w08"]');
// const l12w09 = shadowRoot.querySelector('slot[name="l12w09"]');
// const l12w10 = shadowRoot.querySelector('slot[name="l12w10"]');
// const l12w11 = shadowRoot.querySelector('slot[name="l12w11"]');
// const l12w12 = shadowRoot.querySelector('slot[name="l12w12"]');
// const l12w13 = shadowRoot.querySelector('slot[name="l12w13"]');
// const l12w14 = shadowRoot.querySelector('slot[name="l12w14"]');
// const l12w15 = shadowRoot.querySelector('slot[name="l12w15"]');

// const l13w00 = shadowRoot.querySelector('slot[name="l13w00"]');
// const l13w01 = shadowRoot.querySelector('slot[name="l13w01"]');
// const l13w02 = shadowRoot.querySelector('slot[name="l13w02"]');
// const l13w03 = shadowRoot.querySelector('slot[name="l13w03"]');
// const l13w04 = shadowRoot.querySelector('slot[name="l13w04"]');
// const l13w05 = shadowRoot.querySelector('slot[name="l13w05"]');
// const l13w06 = shadowRoot.querySelector('slot[name="l13w06"]');
// const l13w07 = shadowRoot.querySelector('slot[name="l13w07"]');
// const l13w08 = shadowRoot.querySelector('slot[name="l13w08"]');
// const l13w09 = shadowRoot.querySelector('slot[name="l13w09"]');
// const l13w10 = shadowRoot.querySelector('slot[name="l13w10"]');
// const l13w11 = shadowRoot.querySelector('slot[name="l13w11"]');
// const l13w12 = shadowRoot.querySelector('slot[name="l13w12"]');
// const l13w13 = shadowRoot.querySelector('slot[name="l13w13"]');
// const l13w14 = shadowRoot.querySelector('slot[name="l13w14"]');
// const l13w15 = shadowRoot.querySelector('slot[name="l13w15"]');

// const l14w00 = shadowRoot.querySelector('slot[name="l14w00"]');
// const l14w01 = shadowRoot.querySelector('slot[name="l14w01"]');
// const l14w02 = shadowRoot.querySelector('slot[name="l14w02"]');
// const l14w03 = shadowRoot.querySelector('slot[name="l14w03"]');
// const l14w04 = shadowRoot.querySelector('slot[name="l14w04"]');
// const l14w05 = shadowRoot.querySelector('slot[name="l14w05"]');
// const l14w06 = shadowRoot.querySelector('slot[name="l14w06"]');
// const l14w07 = shadowRoot.querySelector('slot[name="l14w07"]');
// const l14w08 = shadowRoot.querySelector('slot[name="l14w08"]');
// const l14w09 = shadowRoot.querySelector('slot[name="l14w09"]');
// const l14w10 = shadowRoot.querySelector('slot[name="l14w10"]');
// const l14w11 = shadowRoot.querySelector('slot[name="l14w11"]');
// const l14w12 = shadowRoot.querySelector('slot[name="l14w12"]');
// const l14w13 = shadowRoot.querySelector('slot[name="l14w13"]');
// const l14w14 = shadowRoot.querySelector('slot[name="l14w14"]');
// const l14w15 = shadowRoot.querySelector('slot[name="l14w15"]');

// const l15w00 = shadowRoot.querySelector('slot[name="l15w00"]');
// const l15w01 = shadowRoot.querySelector('slot[name="l15w01"]');
// const l15w02 = shadowRoot.querySelector('slot[name="l15w02"]');
// const l15w03 = shadowRoot.querySelector('slot[name="l15w03"]');
// const l15w04 = shadowRoot.querySelector('slot[name="l15w04"]');
// const l15w05 = shadowRoot.querySelector('slot[name="l15w05"]');
// const l15w06 = shadowRoot.querySelector('slot[name="l15w06"]');
// const l15w07 = shadowRoot.querySelector('slot[name="l15w07"]');
// const l15w08 = shadowRoot.querySelector('slot[name="l15w08"]');
// const l15w09 = shadowRoot.querySelector('slot[name="l15w09"]');
// const l15w10 = shadowRoot.querySelector('slot[name="l15w10"]');
// const l15w11 = shadowRoot.querySelector('slot[name="l15w11"]');
// const l15w12 = shadowRoot.querySelector('slot[name="l15w12"]');
// const l15w13 = shadowRoot.querySelector('slot[name="l15w13"]');
// const l15w14 = shadowRoot.querySelector('slot[name="l15w14"]');
// const l15w15 = shadowRoot.querySelector('slot[name="l15w15"]');

// const l16w00 = shadowRoot.querySelector('slot[name="l16w00"]');
// const l16w01 = shadowRoot.querySelector('slot[name="l16w01"]');
// const l16w02 = shadowRoot.querySelector('slot[name="l16w02"]');
// const l16w03 = shadowRoot.querySelector('slot[name="l16w03"]');
// const l16w04 = shadowRoot.querySelector('slot[name="l16w04"]');
// const l16w05 = shadowRoot.querySelector('slot[name="l16w05"]');
// const l16w06 = shadowRoot.querySelector('slot[name="l16w06"]');
// const l16w07 = shadowRoot.querySelector('slot[name="l16w07"]');
// const l16w08 = shadowRoot.querySelector('slot[name="l16w08"]');
// const l16w09 = shadowRoot.querySelector('slot[name="l16w09"]');
// const l16w10 = shadowRoot.querySelector('slot[name="l16w10"]');
// const l16w11 = shadowRoot.querySelector('slot[name="l16w11"]');
// const l16w12 = shadowRoot.querySelector('slot[name="l16w12"]');
// const l16w13 = shadowRoot.querySelector('slot[name="l16w13"]');
// const l16w14 = shadowRoot.querySelector('slot[name="l16w14"]');
// const l16w15 = shadowRoot.querySelector('slot[name="l16w15"]');

// const l17w00 = shadowRoot.querySelector('slot[name="l17w00"]');
// const l17w01 = shadowRoot.querySelector('slot[name="l17w01"]');
// const l17w02 = shadowRoot.querySelector('slot[name="l17w02"]');
// const l17w03 = shadowRoot.querySelector('slot[name="l17w03"]');
// const l17w04 = shadowRoot.querySelector('slot[name="l17w04"]');
// const l17w05 = shadowRoot.querySelector('slot[name="l17w05"]');
// const l17w06 = shadowRoot.querySelector('slot[name="l17w06"]');
// const l17w07 = shadowRoot.querySelector('slot[name="l17w07"]');
// const l17w08 = shadowRoot.querySelector('slot[name="l17w08"]');
// const l17w09 = shadowRoot.querySelector('slot[name="l17w09"]');
// const l17w10 = shadowRoot.querySelector('slot[name="l17w10"]');
// const l17w11 = shadowRoot.querySelector('slot[name="l17w11"]');
// const l17w12 = shadowRoot.querySelector('slot[name="l17w12"]');
// const l17w13 = shadowRoot.querySelector('slot[name="l17w13"]');
// const l17w14 = shadowRoot.querySelector('slot[name="l17w14"]');
// const l17w15 = shadowRoot.querySelector('slot[name="l17w15"]');

// const l18w00 = shadowRoot.querySelector('slot[name="l18w00"]');
// const l18w01 = shadowRoot.querySelector('slot[name="l18w01"]');
// const l18w02 = shadowRoot.querySelector('slot[name="l18w02"]');
// const l18w03 = shadowRoot.querySelector('slot[name="l18w03"]');
// const l18w04 = shadowRoot.querySelector('slot[name="l18w04"]');
// const l18w05 = shadowRoot.querySelector('slot[name="l18w05"]');
// const l18w06 = shadowRoot.querySelector('slot[name="l18w06"]');
// const l18w07 = shadowRoot.querySelector('slot[name="l18w07"]');
// const l18w08 = shadowRoot.querySelector('slot[name="l18w08"]');
// const l18w09 = shadowRoot.querySelector('slot[name="l18w09"]');
// const l18w10 = shadowRoot.querySelector('slot[name="l18w10"]');
// const l18w11 = shadowRoot.querySelector('slot[name="l18w11"]');
// const l18w12 = shadowRoot.querySelector('slot[name="l18w12"]');
// const l18w13 = shadowRoot.querySelector('slot[name="l18w13"]');
// const l18w14 = shadowRoot.querySelector('slot[name="l18w14"]');
// const l18w15 = shadowRoot.querySelector('slot[name="l18w15"]');
