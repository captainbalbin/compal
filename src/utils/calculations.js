export const calcIconSize = (size) => {
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

export const calcTextSize = (size) => {
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

export const calcRatingTextColor = (rating) => {
  if (rating >= 4.0) return 'text-rating-4'
  if (rating >= 3.0) return 'text-rating-3'
  if (rating >= 2.0) return 'text-rating-2'
  if (rating >= 1.0) return 'text-rating-1'
}

export const calcRatingBgColor = (rating) => {
  if (rating >= 4.0) return 'bg-rating-4'
  if (rating >= 3.0) return 'bg-rating-3'
  if (rating >= 2.0) return 'bg-rating-2'
  if (rating >= 1.0) return 'bg-rating-1'
}
