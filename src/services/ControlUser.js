import {http} from './config';
export const controlUserServer={
    // SignIn:()=>{
    //     return http.get("/users");
    // },
    SignIn:(value)=>{
        return http.post("/auth/signin",value);
    },
    SignUp:(data)=>{
        // return http.post('/users',data);
        return http.post('/auth/signup',data);
    },
    GetAllUser:()=>{
        return http.get("/users");
    },
    DeleteUser:(id)=>{
        return http.delete(`/users?id=${id}`);
    },
    UpdateUser:(value)=>{
        // return http.post(`/users/${id}`,value);
        return http.put(`/users/${value.id}`,value);
    },
    GetSkillsUser:()=>{
        return http.get("/skill");
    }
}