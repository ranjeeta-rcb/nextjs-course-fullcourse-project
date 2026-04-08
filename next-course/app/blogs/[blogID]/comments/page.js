export default async function Comment({params}){
   const paramsObj=await params;
   const {blogID}=paramsObj;
   console.log(blogID);
    return(
<div> All Comments on <b>{blogID}</b> page</div>
    )
}