const ContentWrapper = ({ children }) => {
  return (
    <div className="w-1/2 max-w-2xl h-1/2 mb-auto flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default ContentWrapper
