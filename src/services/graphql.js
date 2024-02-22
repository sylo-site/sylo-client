import { gql, useQuery,useMutation } from '@apollo/client';
import {getListUserQuery,createUserMutation,getUserToken} from "./query"

export const useGetListUserQuery = ()=>{
    const { loading, error, data } = useQuery(getListUserQuery);
    return {loading,error,data}
}

export const useCreateUserMutation = ()=>{
    const [createUser, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(createUserMutation);

    return {createUser, mutationLoading,mutationError,mutationData}
}

export const useGetUserToken = (variables)=>{
    const { loading, error, data } =  useQuery(getUserToken,variables);
    if(data){
        sessionStorage.setItem("access-token", data?.getUserToken?.token)
    }
    return {loading,error,data}
}