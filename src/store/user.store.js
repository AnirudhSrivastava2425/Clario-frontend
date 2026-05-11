import { create } from "zustand";

const useUserStore = create((set,get) => ({

    name: '',
    email: '',
    designation: '',
    phone:'',
    isLogged: false,

    // Logic for creating user and setting the details in the store
    createUser: (obj) => {
        set({
            name: obj.name,
            email: obj.email,
            designation: obj.designation,
            phone: obj.phone,
            isLogged: true
        });
    },


    // Logic for getting user details and setting the details in the store
    getUser: (obj)=>{
        set({
            name: obj.name,
            email: obj.email,
            designation: obj.designation?obj.designation:'',
            phone: obj.phone?obj.phone:'',
            isLogged: true,
        })
    }

}));

export default useUserStore;