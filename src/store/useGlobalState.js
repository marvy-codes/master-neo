import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "OPENMODAL":
            return {
                isModalOpen: true
            };
        case "CLOSEMODAL":
            return {
                isModalOpen: false
            };
        default: {
            return state;
        }
    }
};


const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer, {
        isModalOpen: false
    })
    return { globalState, globalDispatch };
}


export default useGlobalState;