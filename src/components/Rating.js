import {
  calcIconSize,
  calcRatingBgColor,
  calcRatingTextColor,
  calcTextSize,
} from '../utils/calculations'
import { AiFillStar } from 'react-icons/ai'

/**
 * @param {{size: "small" | "medium" | "large"}} size
 * @param {entity: object} entity
 */
const Rating = ({ entity, size }) => {
  const generateRating = (rating) => {
    // let stars = []

    // for (let i = 1; i <= 5; i++) {
    //   i <= rating ? stars.push(true) : stars.push(false)
    // }

    return (
      <div
        className={`${calcRatingBgColor(
          rating
        )} bg-opacity-25 p-0.5 pl-1 pr-1 rounded-md flex items-center gap-1`}
      >
        {/* <div className="flex">
          {stars.map((star, i) =>
            star ? (
              <AiFillStar key={i} size={calcIconSize(size)} />
            ) : (
              <AiOutlineStar key={i} size={calcIconSize(size)} />
            )
          )}
        </div> */}
        <h5 className={`${calcRatingTextColor(rating)} ${calcTextSize(size)}`}>
          {rating ? parseFloat(rating).toFixed(1) : ''}
        </h5>
        <AiFillStar size={calcIconSize(size)} />
      </div>
    )
  }

  return (
    entity.rating && (
      <div className="hover:bg-zinc-700 flex w-0">{generateRating(entity.rating)}</div>
    )
  )
}

export default Rating
