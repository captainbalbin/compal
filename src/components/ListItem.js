import Link from 'next/link'

const ListItem = ({ result }) => {
  console.log('Rendering ListItem')
  return (
    <Link href={`/${result.type}/${result.url}`} passHref>
      <div
        tabIndex={0}
        className="cursor-pointer hover:opacity-70 hover:bg-zinc-900 p-4 overflow-hidden"
      >
        <p id="list-result">{result.name}</p>
      </div>
    </Link>
  )
}

export default ListItem
