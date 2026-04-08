export default async function Comments({params}){
   const paramsObj=await params;
   const {blogID, commentID}=paramsObj;
   console.log(paramsObj);
    return(
<div> Comment No. <i>{commentID}</i> on <b>{blogID}</b> page</div>
    )
}