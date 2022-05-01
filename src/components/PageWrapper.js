const PageWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center h-screen bg-zinc-900 text-zinc-100 pl-4 pr-4">
      {children}
    </div>
  )
}

export default PageWrapper
