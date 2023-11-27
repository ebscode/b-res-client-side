import axios from "axios";

const axiouspublic=axios.create(({
    baseURL:'http://localhost:5000'
}))

const useaxiospublic = () => {
    return axiouspublic
};

export default useaxiospublic;
