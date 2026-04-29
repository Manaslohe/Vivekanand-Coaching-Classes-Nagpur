const easeInOutCubic = (value) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2

export function scrollToId(id, options = {}) {
  const target = document.getElementById(id)
  if (!target) return

  const { duration = 1050, offset = 96 } = options
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const start = window.scrollY
  const top = target.getBoundingClientRect().top + start - offset
  const distance = top - start

  if (prefersReducedMotion) {
    window.scrollTo(0, top)
    return
  }

  let startTime

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)

    window.scrollTo(0, start + distance * easeInOutCubic(progress))

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

export function handleSmoothAnchor(event, id, options) {
  event.preventDefault()
  scrollToId(id, options)
  window.history.replaceState(null, '', `#${id}`)
}
