import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import filterData from '../utils/filterData'
import { testData } from '../utils/testData'
import SearchList from '../components/SearchList'

const Results = () => {
  const router = useRouter()
  const [results, setResults] = useState([])
  const { query, isReady } = router

  useEffect(() => {
    if (!isReady) return

    setResults(filterData(testData, query.q))
  }, [query, isReady, setResults])

  return (
    <div
      className={`w-full max-w-6xl h-full flex flex-col p-4 gap-2 ${
        !results.length ? 'items-center' : ''
      }`}
    >
      {results.length ? (
        <p className="text-zinc-500">
          Showing {results.length} {results.length === 1 ? 'result' : 'results'}
        </p>
      ) : (
        <p className="font-bold">No results found</p>
      )}
      <SearchList setIsDropdownOpen={() => {}} items={results} />
    </div>
  )
}

export default Results
