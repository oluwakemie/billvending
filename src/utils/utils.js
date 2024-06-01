import axios from "axios";

export async function getHeaders(){
    let userData = localStorage.getItem("userData");
    if(userData){
        userData = JSON.parse(userData);
        const token = 'Bearer' + userData.data.accessToken;
        console.log(userData.data.accessToken, "header");
        return{
            authorization:token,
            Accept:"application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    }
    return {};
}
export async function apiReq(
    endpoint,
    data,
    method,
    headers,
    requestOptions = {}
) {
    return new Promise(async (res,rej)=>{
        const getTokenHeader = await getHeaders();
        headers = {
            ...getTokenHeader,
            ...headers,
        };

        if (method === "get" || method === "delete"){
            data = {
                ...requestOptions,
                ...data,
                headers,
            };
        }
        axios[method](endpoint, data, {headers})
        .then((result)=>{
            const {data} = result;
            if (data.status === false){
                return rej(data);
            }
            return res(data);
        })
        .catch((error)=>{
            
        })
    })
}
