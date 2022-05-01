const SearchShortcut = ({ inFocus }) => {
  return (
    <div className="flex place-items-center gap-1 border border-zinc-500 rounded-md p-1 pl-2 pr-2 mr-4">
      {!inFocus && <p className="text-xs font-footer text-zinc-500">/</p>}
      {inFocus && <p className="text-xs text-zinc-500">Esc</p>}
    </div>
  )
}

export default SearchShortcut
