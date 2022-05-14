const OverviewTable = ({ details }) => {
  return (
    <div className="flex items-start">
      <table className="table-fixed bg-zinc-800 bg-opacity-0 text-zinc-100 text-sm rounded-md sm:w-80 w-full h-full">
        <tbody>
          <tr>
            <td>Feedback</td>
            <td>{details.feedback ?? ''}</td>
          </tr>
          <tr>
            <td>Actuation</td>
            <td>{details.actuation ?? '-'}</td>
          </tr>
          <tr>
            <td>Bottom out</td>
            <td>{details.bottomOut ?? '-'}</td>
          </tr>
          <tr>
            <td>Travel</td>
            <td>{details.travel ?? '-'}</td>
          </tr>
          <tr className="border-b-0">
            <td>Factory lubed</td>
            <td>{details.factoryLubed ? 'Yes' : 'No'}</td>
          </tr>
          {/* {Object.keys(details).map((key, i) => (
            <tr key={i}>
              <td
                className={`${
                  i === Object.keys(details).length - 1 ? '' : 'border-b'
                } border-zinc-700 p-2`}
              >
                {key}
              </td>
              <td
                className={`${
                  i === Object.keys(details).length - 1 ? '' : 'border-b'
                } border-zinc-700 p-2`}
              >
                {details[key].toString()}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default OverviewTable
