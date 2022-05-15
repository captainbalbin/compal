import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import filterData from '../utils/filterData'
import { testData } from '../utils/testData'
import SearchList from './SearchList'

const SearchResults = () => {
  const router = useRouter()
  const [results, setResults] = useState([])
  const { query, isReady } = router

  useEffect(() => {
    if (!isReady) return

    setResults(filterData(testData, query.q))
  }, [query, isReady, setResults])

  return (
    <div className="w-full max-w-6xl h-full">
      <SearchList expanded items={results} />
    </div>
  )
}

export default SearchResults
