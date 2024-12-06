import axios from 'axios'
export const CommonAPI=async(httpMethod,url,reqbody,reqHeader)=>{
    const reqConfig={
        method:httpMethod,
        url:url,
        data:reqbody,
        headers:reqHeader?reqHeader:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig)
    
    .then((response)=>{return response})
    .catch((error)=>{return error})
}
