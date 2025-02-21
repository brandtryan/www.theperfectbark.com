function overall_duration(animation) {
  const timing = animation.effect.timing;
  return (
    timing.delay +
    timing.iterations * timing.duration +
    timing.endDelay
  );
}