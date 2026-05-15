import { create } from "zustand";
import { supabase } from "../utils/supabase";
import { Await } from "react-router-dom";
const useUserStore = create((set, get) => ({

    name: '',
    email: '',
    designation: '',
    phone: '',
    isLogged: false,
    error: null,

    // Logic for creating user and setting the details in the store
    createUser: async (obj) => {

        // Input values in auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: obj.email,
            password: obj.password,
            options: {
                data: {
                    display_name: obj.fullname,
                }
            }
        });

        // Check for any error in auth and return if there is an error
        if (authError) {
            set({ error: authError.message });
            return;
        }

        // Provide display data to table for easy access
        const { error: profileError } = await supabase.from('Users').insert([{
            id: authData.user.id,
            fullname: obj.fullname,
            phone: obj.phone,
            email: obj.email,
            designation: obj.designation,
        }]);

        if (profileError) {
            set({ error: profileError.message });
            return;
        }

        // Set the user details in the store
        set({
            name: obj.name,
            email: obj.email,
            designation: obj.designation,
            phone: obj.phone,
            isLogged: true
        });
    },


    // Logic for getting user details and setting the details in the store
    getUser: (obj) => {
        set({
            name: obj.name,
            email: obj.email,
            designation: obj.designation ? obj.designation : '',
            phone: obj.phone ? obj.phone : '',
            isLogged: true,
        })
    },

}));

export default useUserStore;