import useInView from '../hooks/useInView'

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const [ref, isInView] = useInView()
  const classes = ['reveal', isInView ? 'is-visible' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  )
}
