import axios from 'axios'
export const commonAPI=async(httpMethod,url,reqbody,reqHeader)=>{
    const reqConfig={
        method:httpMethod,
        url:url,
        body:reqbody,
        headers:reqHeader?reqHeader:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((response)=>{return response})
    .catch((error)=>{return error})
}