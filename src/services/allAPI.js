
import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// saveVideoAPI - post http rqst called add component when user click on add button

export const saveVideoAPI = async (videoDetails) => {
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}

// getAllVideosAPI - get http rqst called view component when component displayed in browser inside its useeffect hook

export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET", `${SERVERURL}/uploadVideos`,"")
}

// saveHistoryAPI - post http rqst to http://localhost:3000/history called by videoCard component when we play video
export const saveHistoryAPI = async (historyDetails) => {
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}
// 
export const getAllHistoryAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

// 
export const deleteHistory = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}
// 
export const removeVideoAPI = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}
// 
export const saveCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}
// 
export const getCategoryAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}
// 
export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}
// 
export const updateCategoryAPI = async (categoryDeatils) => {
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDeatils.id}`,categoryDeatils)
}