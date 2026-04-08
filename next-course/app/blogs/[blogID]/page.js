import { notFound } from "next/navigation";

 

 async function Blog1({params}) {
  // console.log(await params);
  const {blogID} =await params;

  if(!/^\d+$/.test(blogID)){
    notFound();
  }
  return (
    <div>Blog   {blogID}</div>
  )
}
export default Blog1;