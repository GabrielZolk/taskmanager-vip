import './register.style.css';
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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

    const handleRegister = () => {
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Successfully registered user.");
                navigate("/login");
            })
            .catch((error) => {
                setError("An error occurred while registering the user. Check the entered data.");
                console.error("User registration error:", error);
            });
    };

    return (
        <div className="register-container">
            <form>
                <div>
                    <div><label>Email</label></div>
                    <input type="email" className='register-input' placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <div><label>Password</label></div>
                    <input className='register-input' type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <div><label>Confirm password</label></div>
                    <input type="password" className='register-input' placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div>
                    <button type="button" className='solid register-button' onClick={handleRegister}>Register</button>
                </div>
                <div>
                    <button type="button" className='outline register-button' onClick={() => {navigate('/login')}}>Login</button>
                </div>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}
