export const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const smoothReveal = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1],
}
