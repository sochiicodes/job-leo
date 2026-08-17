interface PaginationProps{
  currentPage: number
  setCurrentPage: (page: number) => void
  totalPages: number
}

const Pagination = ({currentPage, setCurrentPage, totalPages}: PaginationProps) =>{


    return(
            <div className="flex items-center justify-center gap-1.5 mt-8">
              <button
                onClick={() =>{
                  setCurrentPage(currentPage - 1)
                  window.scrollTo({ top: 260, behavior: 'smooth' })
                }}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-brand bg-white text-xs md:text-sm font-medium text-brand hover:border-brand hover:text-brand disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                ← Prev
              </button>
            
              {Array.from({ length: totalPages }, (_, i) => i + 1).map( (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum),
                        window.scrollTo({ top: 260, behavior: 'smooth' })
                      }}
                      className={`w-9 h-9 rounded-lg border text-xs md:text-sm font-semibold transition-colors cursor-pointer flex items-center justify-center ${
                        pageNum === currentPage
                          ? 'bg-brand-600 text-white border-brand'
                          : 'bg-slate-100 text-slate-400 border-brand hover:border-brand-600 hover:text-brand'
                      }`}
                    >
                      {pageNum}
                    </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                  window.scrollTo({ top: 260, behavior: 'smooth' })
                }}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-brand bg-white text-xs md:text-sm font-medium text-slate-400 hover:border-brand-600 hover:text-[#1A6B4A] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                Next →
              </button>
            </div>
    )
}

export default Pagination