import Link from 'next/link'

const ListItem = ({ result }) => {
  console.log('result', result)

  return (
    <Link href={`/${result.type}/${result.url}`} passHref>
      <div className="cursor-pointer hover:opacity-70 hover:bg-zinc-900 p-4 overflow-hidden">
        <p>{result.name}</p>
      </div>
    </Link>
  )
}

export default ListItem
