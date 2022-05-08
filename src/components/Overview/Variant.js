import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Variant = ({ variant }) => {
  const router = useRouter()
  const { query } = router
  const [currentOption, setCurrentOption] = useState()

  const handleClick = (e) => {
    if (currentOption !== e.target.value) {
      router.push({ pathname: query.id, query: `variant=${variant}` })
      setCurrentOption(query.variant)
    }
  }

  useEffect(() => {
    setCurrentOption(query.variant)
  }, [query])

  return (
    <button
      className={`flex items-center p-2 text-sm border rounded-md hover:bg-zinc-800 hover:cursor-pointer text-zinc-300 ${
        variant === currentOption ? 'border-sky-700' : 'border-zinc-700'
      }`}
      value={variant}
      onClick={(e) => handleClick(e)}
    >
      {variant}
    </button>
  )
}

export default Variant
