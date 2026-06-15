import react from components;

const Navbar = () => {
  return (
    <>
    <div className=" bg-emerald-100 p-4 gap-10 space-x-2.5 ">
       <Logo/>
    </div>

    </>
  )
}

export default Navbar;



const Logo=()=>{

     return(
     <>
     
    <div>
        <img src="./download.jfif" alt=""/>
    
    </div>
     
     
     </>
     
    )
}