import { useState } from 'react'
import site from '../data/siteData'
import Reveal from './Reveal'

const whatsappNumber = site.phone.replace('+', '')

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    arrival: '',
    departure: '',
    message: '',
  })

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const text = [
      `Enquiry for ${site.fullName}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Arrival: ${form.arrival}`,
      `Departure: ${form.departure}`,
      `Message: ${form.message || '—'}`,
    ].join('\n')
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <section id="contact">
      <div className="container contact-grid">
        <Reveal>
          <p className="kicker">Contact</p>
          <h2 className="section-title">{site.contactIntro}</h2>
          <div className="contact-meta">
            <p>
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            </p>
            <p>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>
          <p className="instagram-line">
            Instagram:{' '}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              {site.instagramHandle}
            </a>
          </p>
        </Reveal>
        <Reveal as="form" onSubmit={onSubmit}>
          <label>
            Name
            <input type="text" name="name" required autoComplete="name" value={form.name} onChange={onChange} />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" required autoComplete="tel" value={form.phone} onChange={onChange} />
          </label>
          <div className="form-row">
            <label>
              Arrival
              <input type="date" name="arrival" required value={form.arrival} onChange={onChange} />
            </label>
            <label>
              Departure
              <input type="date" name="departure" required value={form.departure} onChange={onChange} />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Room type, number of guests, any other note"
              value={form.message}
              onChange={onChange}
            />
          </label>
          <button className="btn" type="submit">
            Send enquiry on WhatsApp
          </button>
          <p className="form-note">{site.formNote}</p>
        </Reveal>
      </div>
    </section>
  )
}
