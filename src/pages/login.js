export default function Login() {
    return (
        <div style={{padding: '24px'}}>
            <h2>Welcome</h2>

            <div>
                Username: <input type='text' />
            </div>

            <div>
                Password: <input type='password' />
            </div>
            <button> Log in </button>

            <hr />

            <a href='http://localhost:8080/auth/realms/SocialLoginRealm/protocol/openid-connect/auth?client_id=my-client&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fsso-callback&response_type=code&scope=openid&kc_idp_hint=google'>
                <button> Log in with Google </button> </a>

            <a href='http://localhost:8080/auth/realms/SocialLoginRealm/protocol/openid-connect/auth?client_id=my-client&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fsso-callback&response_type=code&scope=openid&kc_idp_hint=facebook'>
                <button> Log in with Facebook </button> </a>

        </div>
    );
}