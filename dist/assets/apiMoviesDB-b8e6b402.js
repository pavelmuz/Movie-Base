import{e as t}from"./index-ab352757.js";const a="http://212.113.117.131:3000/api";async function s(e){try{return(await t.post(`${a}/movies/add`,e)).data}catch(r){throw new Error(r.response.data.error)}}async function n(e,r){try{return(await t.get(`${a}/movies/find-all`,{params:{fieldName:e,fieldValue:r}})).data}catch(o){throw new Error(o.response.data.error)}}async function i(e){try{return(await t.delete(`${a}/movies/delete/${e}`)).data}catch(r){throw new Error(r.response.data.error)}}async function c(e,r){try{return(await t.put(`${a}/movies/update/${e}`,{rating:r})).data}catch(o){throw new Error(o.response.data.error)}}const d={addMovie:s,findMovies:n,deleteMovie:i,updateRating:c};export{d as a};