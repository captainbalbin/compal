const PageWrapper = ({ children, isStartPage }) => {
  return (
    <div
      className={`w-full min-w-min flex flex-col items-center ${
        isStartPage ? 'h-screen' : ''
      } bg-zinc-900 text-zinc-100 pl-4 pr-4`}
    >
      {children}
    </div>
  )
}

export default PageWrapper
