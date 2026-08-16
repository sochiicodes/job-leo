const Pagination = () =>{
    const totalPages = 5
    const currentPage = 1
    const lastPage = 1
    const isActive = true

    return(
            <div className="flex items-center justify-center gap-1.5 mt-8">
              <button
                onClick={() =>''}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-brand bg-white text-sm font-medium text-brand hover:border-brand hover:text-brand disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                ← Prev
              </button>
            
              {Array.from({ length: totalPages }, (_, i) => i + 1).map( (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => ''}
                      className={`w-9 h-9 rounded-lg border text-sm font-semibold transition-colors cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'bg-brand-600 text-white border-brand'
                          : 'bg-slate-100 text-slate-400 border-brand hover:border-brand-600 hover:text-brand'
                      }`}
                    >
                      {pageNum}
                    </button>
              ))}
              <button
                onClick={() =>'' }
                disabled={currentPage === lastPage}
                className="px-3 py-2 rounded-lg border border-brand bg-white text-sm font-medium text-slate-400 hover:border-[#1A6B4A] hover:text-[#1A6B4A] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                Next →
              </button>
            </div>
    )
}

export default Pagination