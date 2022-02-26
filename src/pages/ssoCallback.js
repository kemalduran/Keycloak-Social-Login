
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SsoCallback() {

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const auth_code = searchParams.get('code');
        console.log(auth_code);

        getAccessTokenWithAuthCode(auth_code);

      });

    const getAccessTokenWithAuthCode = (auth_code) => {

        fetch('http://localhost:8080/auth/realms/SocialLoginRealm/protocol/openid-connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'client_id': 'my-client',
                'grant_type': 'authorization_code',
                'redirect_uri': 'http://localhost:3001/sso-callback',
                'code': auth_code
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));

    }

    return (<div>
        callback
    </div>)
}