import site from '../data/siteData'
import CardScroller from './CardScroller'
import Reveal from './Reveal'

function stars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating))
}

export default function Reviews() {
  return (
    <section id="reviews" className="band">
      <div className="wrap">
        <p className="kicker">Guests</p>
        <h2 className="section-title">Reviews</h2>
        <p className="lede">{site.reviewsIntro}</p>
        <CardScroller className="review-grid">
          {site.reviews.map((review) => (
            <Reveal as="blockquote" className="review" key={review.author}>
              <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                {stars(review.rating)}
              </div>
              <p>“{review.text}”</p>
              <cite>
                {review.author} · {review.source}
              </cite>
            </Reveal>
          ))}
        </CardScroller>
      </div>
    </section>
  )
}
