import Header from './Header'
function MainSection({children, title}) {
  return (
    <div className="mx-auto relative z-50 w-full overflow-auto scrollbar-none ">
        {title && <Header title={title}/>}
     <main className="mx-auto px-4 py-4 sm:p-6">
        {children}
     </main>
     </div>
  )
}

export default MainSection