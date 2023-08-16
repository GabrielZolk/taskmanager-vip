import './login.style.css';
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import { firebaseConfig } from '../config/firebase';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

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
        setMessage("");

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setMessage(`User logged in: ${user}`);
                navigate("/");
            })
            .catch((error) => {
                if (error.code === "auth/invalid-email") {
                    setMessage("Invalid email");
                } else if (error.code === "auth/user-not-found") {
                    setMessage("User Not Found");
                } else if (error.code === "auth/wrong-password") {
                    setMessage("Wrong password. Try again");
                } else {
                    setMessage(`An error occurred while logging in: ${error}`);
                }
            });
    };

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage("Password recovery email sent, check your email.");
            })
            .catch((error) => {
                if (error.code === "auth/missing-email") {
                    setMessage("Enter your email");
                } else if (error.code === "auth/user-not-found") {
                    setMessage("User Not Found");
                } else {
                    setMessage(`Error sending password recovery email: ${error}`)
                }
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
                {message && <div className="error-message">{message}</div>}
            </form>
        </div>
    );
}
