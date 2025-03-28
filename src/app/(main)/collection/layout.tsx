'use client'

const CollectionLayout = ({ children }: { children: React.ReactNode }) =>{
  return (
    <div className="flex flex-col items-center w-full">
      {children}
    </div>
  )
}

export default CollectionLayout