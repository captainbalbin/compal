const PageWrapper = ({ children, isStartPage }) => {
  return (
    <div
      className={`w-full min-w-min flex flex-col items-center ${
        isStartPage ? 'h-screen' : 'min-h-screen'
      } bg-zinc-900 text-zinc-100`}
    >
      {children}
    </div>
  )
}

export default PageWrapper
