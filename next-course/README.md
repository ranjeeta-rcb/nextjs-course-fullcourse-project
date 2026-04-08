
* Routes
* Nested Routes
* Dynamic Routes
* Catch all Routes (if we write undefined routes like if they aren't used in project those file csn be accessed through   this route so that we can not get 404 not fount error)

        - These catch routes are defined like create a folder by using  [...filePath] 

        - To get that file path in client side then we have to do destructuring og the params. 
        i.e.     
              async function File({params}) {
                const {filePath} =await params;
                    return (
                    <div>File /{filePath.join("/")}</div>
                     )
                    }
                    export default File; 

        - it will print the file path through which if we want details of this file then by Calling API we can fetch he data from this and get the details.

    Note: If we want to make catch routes as "optional catch all"   Route then  to like this  --->     [[...filePath]] 

* Root Layout : This file will always renders on each and every page. 
              - in this only we are given header and footer 
              - if we want to Apply the same header footer for all the routes then for each route we should create  layout.js file and must destructure the {children} to get the content on the client side     

    Note: Only for root layout we need to keep html and body tags, while inside layout.js files we should not keep those html and body tag rather than these two tags we can keep other tags like main , section every tag it won't give error to us. 


* Metadata:  - need to export metadata object 
             - To give Title for the Web page. 

        - absolute: inside this we can change perticular title of the Perticuler route. 

* Creating Custome Not found Page: i.e 404 Not found error. 

    - If we want to customize the error not-found then we need to create a file called not-found.js inside our app directory 
   