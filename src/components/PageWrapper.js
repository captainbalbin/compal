const PageWrapper = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-zinc-900 text-zinc-100">
      {children}
    </div>
  )
}

export default PageWrapper
