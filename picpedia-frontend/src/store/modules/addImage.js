import axios from "axios";

export default {
    actions: {
        async upload(context, payload) {

            try {
                return await axios
                    .post(`${context.rootState.base_url}/upload`, {
                        imageUrl: payload.imageUrl,
                    }, {
                        headers: {
                            Authorization: `Bearer ${payload.token}`,
                        },
                    });
            } catch (error) {
                console.log(error.response.data);
            }
        },
    },
    getters: {},
    mutations: {},
};