import { resolve } from "q";

export const actions = {
    getData({commit}, payload){
        return new Promise((resolve, reject) =>{
            this.$axios.get('todos/1').then(response =>{
                console.log(response)
                resolve(response)
            })
        })
    }
}