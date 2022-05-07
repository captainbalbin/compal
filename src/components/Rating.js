import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

/**
 * @param {{size: "small" | "medium" | "large"}} size
 * @param {entity: object} entity
 */
const Rating = ({ entity, size }) => {
  const calcIconSize = (size) => {
    switch (size) {
      case 'small':
        return 14
      case 'medium':
        return 16
      case 'large':
        return 18
      default:
        return 16
    }
  }

  const calcTextSize = (size) => {
    switch (size) {
      case 'small':
        return 'text-sm'
      case 'medium':
        return 'text-base'
      case 'large':
        return 'text-lg'
      default:
        return 'text-base'
    }
  }

  const calcTextColor = (rating) => {
    if (rating >= 4.0) return 'text-rating-4'
    if (rating >= 3.0) return 'text-rating-3'
    if (rating >= 2.0) return 'text-rating-2'
    if (rating >= 1.0) return 'text-rating-1'
  }

  const generateStars = (rating) => {
    let stars = []

    for (let i = 1; i <= 5; i++) {
      i <= rating ? stars.push(true) : stars.push(false)
    }

    return (
      <div className="flex items-center gap-1">
        <div className="flex">
          {stars.map((star) =>
            star ? (
              <AiFillStar size={calcIconSize(size)} />
            ) : (
              <AiOutlineStar size={calcIconSize(size)} />
            )
          )}
        </div>
        <h5 className={`${calcTextColor(rating)} ${calcTextSize(size)}`}>
          {rating ? parseFloat(rating).toFixed(1) : '-'}
        </h5>
      </div>
    )
  }

  return <div className="hover:bg-zinc-700">{generateStars(entity.rating)}</div>
}

export default Rating
