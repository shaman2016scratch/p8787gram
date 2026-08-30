import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.css"

const LoginComponent = ({setToken}) => {
    const [mode, setMode] = useState("login")
    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = userState(false)
    const handleLogin = async () => {
        try {
			setError(null);
			if (!inputUsername.trim()) {
				setError("Username is required");
				return;
			}
            if (!inputPassword.trim()) {
				setError("Password is required");
				return;
			}
			setLoading(true);
			const response = await fetch(
				"https://p8787gram-api.loca.lt/login",
                {
                    method: "POST",
                    headers: {
                        "bypass-tunnel-reminder": true
                    },
                    body: {
                        username: inputUsername,
                        password: inputPassword
                    }
                }
			);
			if (response.ok) {
                const res = await response.json()
				setToken(res.result);
				setLoading(false);
			} else {
				setError("Failed to login");
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
			setError("Error during login");
			setLoading(false);
		}
    }

    const handleRegister = async () => {
        try {
			setError(null);
			if (!inputUsername.trim()) {
				setError("Username is required");
				return;
			}
            if (!inputPassword.trim()) {
				setError("Password is required");
				return;
			}
			setLoading(true);
			const response = await fetch(
				"https://p8787gram-api.loca.lt/register",
                {
                    method: "POST",
                    headers: {
                        "bypass-tunnel-reminder": true
                    },
                    body: {
                        username: inputUsername,
                        password: inputPassword
                    }
                }
			);
			if (response.ok) {
                const res = await response.json()
				setToken(res.result);
				setLoading(false);
			} else {
				setError("Failed to login");
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
			setError("Error during login");
			setLoading(false);
		}
    }
    return (
        <>
            {(mode === "login") ? (<>
            <h1><FormattedMessage
                id="login.title"
            /></h1>
            <input
				type="text"
				placeholder="username"
				disabled={loading}
				value={inputUsername}
				onChange={(e) => setInputUsername(e.target.value)}
			/><input
				type="password"
				placeholder="password"
				disabled={loading}
				value={inputPssword}
				onChange={(e) => setInputPassword(e.target.value)}
			/>
			{error && <p className="error">{error}</p>}
			<button
				onClick={() => handleLogin()}
				disabled={loading}>
				<FormattedMessage id="login.button" />
			</button>
            </>) : (<>
            <h1><FormattedMessage
                id="register.title"
            /></h1>
            <input
				type="text"
				placeholder="username"
				disabled={loading}
				value={inputUsername}
				onChange={(e) => setInputUsername(e.target.value)}
			/><input
				type="password"
				placeholder="password"
				disabled={loading}
				value={inputPssword}
				onChange={(e) => setInputPassword(e.target.value)}
			/>
			{error && <p className="error">{error}</p>}
			<button
				onClick={() => handleRegister()}
				disabled={loading}>
				<FormattedMessage id="register.button" />
			</button>
            </>)}
        </>
    )
}

export default LoginComponent