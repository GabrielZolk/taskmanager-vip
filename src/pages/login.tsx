import './login.style.css';
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import { firebaseConfig } from '../config/firebase';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth(firebaseConfig);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigate("/", { replace: true });
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth, navigate]);

    const handleLogin = () => {
        setError("");

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User logged in:", user);
                navigate("/");
            })
            .catch((error) => {
                setError("An error occurred while logging in. check your credentials.");
                console.error("Login error:", error);
            });
    };

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Password recovery email sent.");
            })
            .catch((error) => {
                console.error("Error sending password recovery email:", error);
            });
    };

    return (
        <div className="login-container">
            <form>
                <div>
                    <div><label>Email</label></div>
                    <input className='login-input' type="email" name="email" placeholder='your@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <div><label>Password</label></div>
                    <input className='login-input' type="password" name="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type='button' className='clear login-button' onClick={handlePasswordReset}>Recover Password</button>
                </div>
                <div>
                    <button type='button' className='solid login-button' onClick={handleLogin}>Login</button>
                </div>
                <div>
                    <button type='button' className='outline login-button' onClick={() => navigate('/register')}>Register</button>
                </div>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}
