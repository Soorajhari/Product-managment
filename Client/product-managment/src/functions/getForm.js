export const getForm=(formType)=>{
    if(formType=="signup"){
        return{
            userName:"",
            email:"",
            password:""

        }
    }else{
        return{
            email:"",
            password:""
        }

    }
}