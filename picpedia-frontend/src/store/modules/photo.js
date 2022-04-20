import axios from "axios";

export default {
    state() {
        return {
            photos: []
        };
    },
    actions: {
        async index(context, payload) {
            return await axios
                .get(`${context.rootState.base_url}/photos`, {
                    headers: {
                        Authorization: `Bearer ${payload.token}`,
                    },
                }).then((response) => {
                    context.commit("savePhotos", response.data.photos);
                }).catch((error)=>{
                    console.log(error.response.data);
                }) 
        },
    },
    getters: {
        loadPhotos(state) {
            console.log(state.photos);
            return state.photos;
        }
    },
    mutations: {
        savePhotos(state, photos) {
            state.photos = photos;
        },
    },
};