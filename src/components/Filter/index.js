import Link from 'next/link'

const Filter = ({ filterType }) => {
  const filterDetails = {
    icon: 'a',
    name: 'b',
    url: 'c',
  }

  switch (filterType) {
    case 'switches':
      filterDetails.icon = 'a'
      filterDetails.name = 'Switches'
      filterDetails.url = '/switches'
      break

    case 'keycaps':
      filterDetails.icon = 'b'
      filterDetails.name = 'Keycaps'
      filterDetails.url = '/keycaps'
      break

    case 'deskmats':
      filterDetails.icon = 'c'
      filterDetails.name = 'Deskmats'
      filterDetails.url = '/deskmats'
      break

    case 'parts':
      filterDetails.icon = 'd'
      filterDetails.name = 'Parts'
      filterDetails.url = '/parts'
      break

    default:
      filterDetails.icon = 'a'
      filterDetails.name = 'Switches'
      filterDetails.url = '/switches'
      break
  }

  return (
    <Link href={filterDetails.url} passHref>
      <div
        tabIndex={0}
        className="flex gap-4 p-4 h-32 bg-zinc-800 shadow-md text-zinc-200 rounded-md cursor-pointer hover:opacity-70"
      >
        <p>{filterDetails.icon}</p>
        <h1>{filterDetails.name}</h1>
      </div>
    </Link>
  )
}

export default Filter
