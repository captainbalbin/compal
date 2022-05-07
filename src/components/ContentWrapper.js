const ContentWrapper = ({ children }) => {
  return (
    <div className={`w-full flex-1 grid place-items-center gap-4 max-w-7xl pl-4 pr-4`}>
      {children}
    </div>
  )
}

export default ContentWrapper
