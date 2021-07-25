import {authActions} from "../redux/actionCreators";
import {useGoogleLogin} from "react-google-login";
import {CLIENT_ID} from "../constants";

export const useSignIn = () => {

    const onSuccess = (res) => {
        console.log("@@ useSignIn onSuccess response", res);
        authActions.updateState({
            profile:res.profileObj,
            access_token:res.tokenObj.access_token,
            isLoggedIn:true
        })
    };

    const onFailure = (err) => {
        console.log("@@ useSignIn onSuccess onFailure", err)
        authActions.updateState({
            profile:null,
            access_token: null,
            isLoggedIn:false
        })
    };

    const {signIn, loaded} = useGoogleLogin({
        clientId: CLIENT_ID,
        cookiePolicy: 'single_host_origin',
        isSignedIn: true,
        onSuccess,
        onFailure,
    })

    return {signIn, loaded}
};