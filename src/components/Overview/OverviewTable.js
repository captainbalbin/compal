const OverviewTable = ({ product }) => {
  return (
    <div className="flex">
      <table className="table-auto bg-zinc-800 bg-opacity-30 text-zinc-200 text-sm rounded-md md:w-80 w-full">
        <tbody>
          {product.map((param, i) => {
            return (
              <tr key={param.id} className="w-96">
                <td className={`${i === product.length - 1 ? '' : 'border-b'} border-zinc-700 p-4`}>
                  {param.name}
                </td>
                <td className={`${i === product.length - 1 ? '' : 'border-b'} border-zinc-700 p-4`}>
                  {param.value}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OverviewTable
