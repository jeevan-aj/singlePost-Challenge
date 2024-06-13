import SinglePost from "./Components/SinglePost"


const DashBoard = () => {
  return (
    <>
    <div className="flex justify-center items-center dashboard w-full">
    <img src="https://fastly.picsum.photos/id/515/200/200.jpg?hmac=d6WMJkHOOB7pT-6y_yjHKrJdVp3v17ry6bMzGVuyb68" alt="picture" className="w-full h-[100vh] relative dashImage"/>
    
  <div className="absolute top-10">
  <SinglePost/>
  </div>
   
    
   
    </div>
   
    </>
  )
}

export default DashBoard