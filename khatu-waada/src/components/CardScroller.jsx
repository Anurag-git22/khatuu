import { useCallback, useEffect, useRef, useState } from 'react'

const MOBILE_MQ = '(max-width: 1023px)'

export default function CardScroller({
  as: Tag = 'div',
  children,
  className = '',
  compact = false,
}) {
  const scrollerRef = useRef(null)
  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    scrollLeft: 0,
    pointerId: null,
  })
  const [isMobile, setIsMobile] = useState(false)
  const [active, setActive] = useState(0)
  const [count, setCount] = useState(0)

  const slides = useCallback(() => Array.from(scrollerRef.current?.children ?? []), [])

  const sync = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const kids = slides()
    setCount(kids.length)
    if (!kids.length) return

    const left = el.scrollLeft
    let best = 0
    let bestDist = Number.POSITIVE_INFINITY
    kids.forEach((child, index) => {
      const dist = Math.abs(child.offsetLeft - left)
      if (dist < bestDist) {
        bestDist = dist
        best = index
      }
    })
    setActive(best)
  }, [slides])

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return undefined
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync, children])

  const goTo = (index) => {
    const kids = slides()
    const next = Math.max(0, Math.min(index, kids.length - 1))
    kids[next]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  const onPointerDown = (event) => {
    if (!isMobile || event.pointerType !== 'mouse') return
    const el = scrollerRef.current
    if (!el) return
    dragRef.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
      pointerId: event.pointerId,
    }
    el.classList.add('is-dragging')
    el.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!dragRef.current.active) return
    const el = scrollerRef.current
    if (!el) return
    const dx = event.clientX - dragRef.current.startX
    if (Math.abs(dx) > 6) dragRef.current.moved = true
    el.scrollLeft = dragRef.current.scrollLeft - dx
  }

  const endDrag = () => {
    const el = scrollerRef.current
    el?.classList.remove('is-dragging')
    dragRef.current.active = false
  }

  const onClickCapture = (event) => {
    if (!dragRef.current.moved) return
    event.preventDefault()
    event.stopPropagation()
    dragRef.current.moved = false
  }

  const classes = ['card-scroller', compact ? 'card-scroller--compact' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="card-scroller-shell">
      <Tag
        ref={scrollerRef}
        className={classes}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        {children}
      </Tag>
      {isMobile && count > 1 ? (
        <div className="card-scroller-nav">
          <button
            type="button"
            className="card-scroller-arrow"
            aria-label="Previous cards"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
          >
            ‹
          </button>
          {count <= 8 ? (
            <div className="card-scroller-dots" role="tablist" aria-label="Card slides">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === active ? 'is-active' : ''}
                  aria-label={`Go to card ${index + 1}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          ) : (
            <span className="card-scroller-count">
              {active + 1} / {count}
            </span>
          )}
          <button
            type="button"
            className="card-scroller-arrow"
            aria-label="Next cards"
            onClick={() => goTo(active + 1)}
            disabled={active === count - 1}
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  )
}
