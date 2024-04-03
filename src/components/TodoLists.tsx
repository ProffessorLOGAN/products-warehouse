import React from 'react'

const TodoLists = () => {
  return (
    <>
    <div className="flex border border-gray-400 flex-wrap py-2 text-md justify-center gap-10 bg-white">
       <p className='border px-4 border-gray-500'>Learn React.js </p>     
       <button className='border px-4 border-gray-700'>Delete</button>
      </div>
    </>
  )
}

export default TodoLists

// {products.map((product) => (
//     <Card
//       key={product.id}
//       className="flex flex-col bg-gray-100 shadow-2xl"
//     >
     
//       <CardContent className="mx-auto">
//         <p>₹ {product.price}</p>
//       </CardContent>
//       <CardFooter className="mx-auto">
//         <p>{product.product}</p>
//       </CardFooter>
//     </Card>
//   ))}