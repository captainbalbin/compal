import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import filterData from '../utils/filterData'
import { testData } from '../utils/testData'

const SearchResults = () => {
  const router = useRouter()
  const [results, setResults] = useState([])
  const { query, isReady } = router

  useEffect(() => {
    if (!isReady) return

    setResults(filterData(testData, query.q))
  }, [query, isReady, setResults])

  return (
    <div>
      <div>query: {query.q}</div>
      <div>
        results:
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchResults
