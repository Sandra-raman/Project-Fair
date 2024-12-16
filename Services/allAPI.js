import { CommonAPI } from '../Services/CommonAPI';
import { ServerUrl } from '../Services/ServerUrl';

export const registerAPI = async (reqBody) => {
    return await CommonAPI('post', `${ServerUrl}/api/register`, reqBody, "");
};
export const loginAPI=async(reqBody)=>{
    return await CommonAPI('post', `${ServerUrl}/api/login`, reqBody, "");
}
export const AddProjectAPI=async(reqBody,reqHeader)=>{
    return await CommonAPI('post', `${ServerUrl}/api/addProject`, reqBody, reqHeader);
}
export const getHomeProjectAPI=async()=>{
    return await CommonAPI('get', `${ServerUrl}/api/getHomeProject`, "", "");
}
export const getAllUserProjectAPI=async(reqHeader)=>{
    return await CommonAPI('get', `${ServerUrl}/api/getAllProject`, "", reqHeader);
}
export const getUserProjectAPI=async(reqHeader)=>{
    return await CommonAPI('get', `${ServerUrl}/api/getUserProject`, "", reqHeader);
}
export const EditProjectAPI=async(projectId,reqBody,reqHeader)=>{
    return await CommonAPI('put', `${ServerUrl}/api/editProject/${projectId}`, reqBody, reqHeader);
}
export const deleteProjectAPI=async(projectId,reqHeader)=>{
    return await CommonAPI('delete', `${ServerUrl}/api/deleteProject/${projectId}`,"", reqHeader);
}