import React from "react";


const Login = () => {
    const styles = {
        header: {
        fontSize: "35px",
        fontWeight: "750",
        marginBottom: "25px",
        letterSpacing: "2px",
        textShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
        color: "#FFD700",
        },
        container: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            color: "#FFD700",
            fontFamily: "Arial, sans-serif",
        },
        form: {
            backgroundColor: "#111",
            padding: "35px",
            width: "350px",
            borderRadius: "12px",
            border: "1px solid #FFD700",
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.25)",
        },
        label: {
            display: "block",
            marginBottom: "6px",
            fontWeight: "bold",
            color: "#FFD700",
        },
        input: {
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #FFD700",
            backgroundColor: "#000",
            color: "#FFD700",
            outline: "none",
        },
        button: {
            width: "100%",
            padding: "12px",
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.2s",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Bruno's Luxx LLC</h1>
            <form style={styles.form}>
                <div>
                    <label htmlFor="email" style={styles.label}>
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        style={styles.input}
                    />
                </div>

                <div>
                    <label htmlFor="password" style={styles.label}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        style={styles.input}
                    />
                </div>

                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;