import Link from 'next/link'

const Filter = ({ filterType }) => {
  const filterDetails = {
    icon: 'a',
    name: 'b',
    url: 'c',
  }

  switch (filterType) {
    case 'switch':
      filterDetails.icon = 'a'
      filterDetails.name = 'Switches'
      filterDetails.url = '/switches'
      break

    case 'keycap':
      filterDetails.icon = 'b'
      filterDetails.name = 'Keycaps'
      filterDetails.url = '/keycaps'
      break

    case 'deskmat':
      filterDetails.icon = 'c'
      filterDetails.name = 'Deskmats'
      filterDetails.url = '/deskmats'
      break

    default:
      filterDetails.icon = 'a'
      filterDetails.name = 'Switches'
      filterDetails.url = '/switches'
      break
  }

  return (
    <Link href={filterDetails.url} passHref>
      <div className="p-4 bg-green-500 cursor-pointer">
        <h1>{filterDetails.name}</h1>
        <p>{filterDetails.icon}</p>
      </div>
    </Link>
  )
}

export default Filter
