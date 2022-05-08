const OverviewTable = ({ details }) => {
  return (
    <div className="flex items-start">
      <table className="table-auto bg-zinc-800 bg-opacity-30 text-zinc-200 text-sm rounded-md md:w-80 w-full">
        <tbody>
          {Object.keys(details).map((key, i) => (
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
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OverviewTable
