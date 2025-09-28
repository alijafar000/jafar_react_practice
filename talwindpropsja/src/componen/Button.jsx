import React from 'react'

const button = ({btnText="Default"}) => {  //yaha pe props pass karke bhi value change kar sakte hai props.value ka nam jaha pe change karna hai but hum destructuring karke kiye hai
   
    
  return (
    <div>
      <button className="relative z-0 rounded bg-pink-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-pink-700 after:transition-[all_0.3s_ease]  hover:after:w-full ">
    {btnText}
    </button>
    </div>
  )
}

export default button