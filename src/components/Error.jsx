function Error({children}) {
  return (
        <div className='bg-red-700 text-white text-center p-3 font-bold uppercase mb-3 rounded-md'>
            {children}
        </div>
  )
}

export default Error