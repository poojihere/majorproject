import React from 'react'

function InputField() {
  return (
//     <div>
//         <div class="mb-6">
//             <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Large input</label>
//             <input type="text" id="large-input" class="block w-96 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-56 justify-center" />
//         </div>
//   </div>


<div className="flex justify-between">
      <div className="mb-6 mr-4">
        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Input</label>
        <input type="text" id="large-input" className="block w-96 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-56" />
      </div>
      <div className="mb-6">
        <label htmlFor="large-input-2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Output</label>
        <input type="text" id="large-input-2" className="block w-96 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-56" />
      </div>
    </div>
  )
}

export default InputField