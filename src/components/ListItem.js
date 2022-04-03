import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ListItem = ({ result, tab }) => {
  const router = useRouter()

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        router.replace(`/${result.type}/${result.url}`)
      }
    },
    [router, result]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <Link href={`/${result.type}/${result.url}`} passHref>
      <div
        tabIndex={tab}
        className="cursor-pointer hover:opacity-70 hover:bg-zinc-900 p-4 focus:outline-none focus:placeholder:text-zinc-500 focus:bg-zinc-900 "
      >
        <p id="list-result">{result.name}</p>
      </div>
    </Link>
  )
}

export default ListItem
