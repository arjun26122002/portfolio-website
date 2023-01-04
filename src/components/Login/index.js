import { signInWithGoogle } from '../../firebase';

const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle}style={{
                cursor:"pointer"
            }}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;