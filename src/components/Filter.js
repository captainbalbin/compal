import Link from 'next/link'

const Filter = ({ filterType, isVisible }) => {
  let filterDetails = {
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

  const style = `flex gap-4 p-4 h-32 bg-zinc-800 shadow-md text-zinc-200 rounded-md cursor-pointer hover:opacity-70 ${
    isVisible ? 'cursor-default hover:opacity-100' : ''
  }`

  const hasTabIndex = !isVisible ? { tabIndex: 0 } : {}

  return (
    <Link href={filterDetails.url} passHref>
      <div {...hasTabIndex} className={style}>
        <p>{filterDetails.icon}</p>
        <h1>{filterDetails.name}</h1>
      </div>
    </Link>
  )
}

export default Filter
