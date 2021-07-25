import {authActions} from "../redux/actionCreators";
import {useGoogleLogout} from "react-google-login";
import {CLIENT_ID} from "../constants";

export const useSignOut = () => {

    const onLogout = () => {
        console.log("@@ useSignOut onSuccess response");
        authActions.updateState({
            profile: null,
            access_token: '',
            isLoggedIn: false
        })
    };

    const {signOut, loaded} = useGoogleLogout({
        onFailure: onLogout,
        clientId: CLIENT_ID,
        cookiePolicy: 'single_host_origin',
        onLogoutSuccess: onLogout,
    })

    return {signOut, loaded}
};