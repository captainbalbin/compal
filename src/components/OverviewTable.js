const OverviewTable = ({ product, type }) => {
  return (
    <div className="flex">
      <table className="table-fixed bg-zinc-800 rounded-md md:w-96 w-full">
        <tbody>
          {product.map((param, i) => {
            return (
              <tr key={param.id} className="w-96">
                <td className={`${i === product.length - 1 ? '' : 'border-b'} border-zinc-700 p-2`}>
                  {param.name}
                </td>
                <td className={`${i === product.length - 1 ? '' : 'border-b'} border-zinc-700 p-2`}>
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
