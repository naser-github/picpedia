import axios from "axios";

export default {
    state() {
        return {
            token: null,
            userId: null,
            userName: null,
            userEmail: null,
        };
    },
    actions: {
        async login(context, payload) {

            let path = '';
            if (payload.page)
                path = 'sign-in'
            else
                path = 'sign-up'


            return axios
                .post(`${context.rootState.base_url}/${path}`, {
                    email: payload.email,
                    password: payload.password,
                })
                .then((response) => {
                    const res = response.data;
                    localStorage.setItem("token", res.token);
                    localStorage.setItem("userId", res.user.id);
                    localStorage.setItem("userName", res.user.name);
                    localStorage.setItem("userEmail", res.user.email);

                    context.commit("saveLoggedUser", {
                        token: res.token,
                        userId: res.user.id,
                        userName: res.user.name,
                        userEmail: res.user.email,
                    });
                })
                .catch(function (error) {
                    console.log(error.response.data.message);
                });


        },

        checkLogin(context) {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            const userName = localStorage.getItem("userName");
            const userEmail = localStorage.getItem("userEmail");

            if (token) {
                context.commit("saveLoggedUser", {
                    token: token,
                    userId: userId,
                    userName: userName,
                    userEmail: userEmail,
                });
            }
        },

        logout(context) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");

            context.commit("saveLoggedUser", {
                token: null,
                userId: null,
                userName: null,
                userEmail: null,
            });
        },
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getUserName(state) {
            return state.userName;
        },
        getUserEmail(state){
            return state.userEmail;
        }
    },
    mutations: {
        saveLoggedUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
            state.userName = payload.userName;
            state.userEmail = payload.userEmail;
        },
    },
};