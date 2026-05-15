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

        const { data: presentUserData, error: presentUserError } = await supabase.from('Users').select('*').eq('email', obj.email).single();

        if (presentUserError || presentUserData) {
            set({ error: "An account with this email already exists. Please login to your account." });
            return;
        }

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
            isLogged: true,
            error: null,
        });
    },


    // Logic for getting user details and setting the details in the store
    getUser: (obj) => {

        const { data: presentUserData, error: presentUserError } = await supabase.from('Users').select('*').eq('email', obj.email).single();

        if (presentUserError || !presentUserData) {
            set({ error: "An account with this email does not exist. Please create an account." });
            return;
        }

        const {data,error} = await supabase.auth.signInWithPassword({
            email: obj.email,
            password: obj.password,
        });

        if (error) {
            set({ error: error.message });
            return;
        }

        const {data: userData, error: userError} = await supabase.from('Users').select('*').eq('email', data.user.email).single();
        set({
            name: userData.fullname,
            email: userData.email,
            designation: userData.designation ? userData.designation : '',
            phone: userData.phone ? userData.phone : '',
            isLogged: true,
        })
    },

    // Forgot password logic - email handling and sending reset password link
    forgotPassword: async (email) => {

        const { data: userPresentData, error: userPresentError } = await supabase.from('Users').select('*').eq('email', email).single();

        if (userPresentError || !userPresentData) {
            set({ error: "No account found in our database. Please create your account first." });
            return;
        }

        const { resetError } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://localhost:5173/p/reset-password'
        });

        if (resetError) {
            set({ error: resetError.message });
        }
        else{
            set({ error: null });
        }
    },

    resetPassword: async (newPassword) => {
        const { error } = await supabase.auth.updateUser({
            password: newPassword,
        });

        if (error) {
            set({ error: error.message });
            return;
        }

        set({ isLogged: true, error:null });
    },

}));

export default useUserStore;