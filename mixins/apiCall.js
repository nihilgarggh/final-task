import axios from "axios";

export default {
    name:"apiCall",
    methods: {
        async get_axios(req,body){
            let res = await axios.get(req,{params:{...body}});
            if(res.status==200 && res.data.response.success==1){
                return res;
            }
        }
    }
}