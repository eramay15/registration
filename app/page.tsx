'use client';
import { useState } from 'react';

export default function Home() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    async function handleRegister() {
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, password })
        });

        const data = await res.json();
        setMessage(data.message);

        if (data.message === 'Saved successfully!') {
            setName('');
            setPassword('');
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Registration Form</h2>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />

                <button onClick={handleRegister} style={styles.button}>
                    Register
                </button>

                <p style={styles.message}>{message}</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        fontFamily: 'Arial'
    },
    card: {
        background: '#df8f8f',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        width: '300px',
        textAlign: 'center' as const
    },
    title: {
        marginBottom: '20px'
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '6px',
        border: '1px solid #c73131'
    },
    button: {
        width: '100%',
        padding: '10px',
        background: '#667eea',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    message: {
        marginTop: '15px',
        color: 'green'
    }
};