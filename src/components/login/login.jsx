import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./login.css"

const LoginComponent = ({setToken}) => {
    const [mode, setMode] = useState("login")
    const [inputName, setInputName] = useState("")
    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
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
			if (!inputName.trim()) {
				setError("Name is required");
				return;
			}
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
                        password: inputPassword,
                        name: inputName
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
				value={inputPassword}
				onChange={(e) => setInputPassword(e.target.value)}
			/>
			{error && <p className="error">{error}</p>}
			<button
				onClick={() => handleLogin()}
				disabled={loading}>
				<FormattedMessage id="login.button" />
			</button>
            <button
				onClick={() => { setMode("register") }}
				disabled={loading}>
				<FormattedMessage id="login.toReg" />
			</button>
            </>) : (<>
            <h1><FormattedMessage
                id="register.title"
            /></h1>
            <input
				type="text"
				placeholder="name"
				disabled={loading}
				value={inputName}
				onChange={(e) => setInputName(e.target.value)}
			/><input
				type="text"
				placeholder="username"
				disabled={loading}
				value={inputUsername}
				onChange={(e) => setInputUsername(e.target.value)}
			/><input
				type="password"
				placeholder="password"
				disabled={loading}
				value={inputPassword}
				onChange={(e) => setInputPassword(e.target.value)}
			/>
			{error && <p className="error">{error}</p>}
			<button
				onClick={() => handleRegister()}
				disabled={loading}>
				<FormattedMessage id="register.button" />
			</button>
            <button
				onClick={() => { setMode("login") }}
				disabled={loading}>
				<FormattedMessage id="register.toLogin" />
			</button>
            </>)}
        </>
    )
}

export default LoginComponent