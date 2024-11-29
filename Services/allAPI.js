const {commonAPI}=require("./CommonAPI")
const {serverUrl}=require("./ServerUrl")
export const registerAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/api/register`,reqBody,"")
}