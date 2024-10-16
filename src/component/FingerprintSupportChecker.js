import React, { useState } from 'react';

const WebAuthnDemo = () => {
    const [message, setMessage] = useState('');

    const registerFingerprint = async () => {
        // Ensure WebAuthn is supported
        if (!window.PublicKeyCredential) {
            setMessage('WebAuthn not supported by this browser.');
            return;
        }

        const publicKey = {
            challenge: new Uint8Array(32), // Use a secure random value from the server
            rp: { name: "Example App" },
            user: {
                id: new Uint8Array(16), // Use a secure random user ID
                name: "user@example.com",
                displayName: "User's Display Name",
            },
            pubKeyCredParams: [{ type: "public-key", alg: -7 }], // ES256
            authenticatorSelection: {
                authenticatorAttachment: "platform", // use platform (built-in) authenticator
                userVerification: "preferred",
            },
            timeout: 60000,
        };

        try {
            const credential = await navigator.credentials.create({ publicKey });
            // Handle credential creation and send to your server for registration
            console.log('Fingerprint registered:', credential);
            setMessage('Fingerprint registered successfully!');
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Failed to register fingerprint. ' + error.message);
        }
    };

    return (
        <div>
            <h1>WebAuthn Fingerprint Registration</h1>
            <button onClick={registerFingerprint}>Register Fingerprint</button>
            <p>{message}</p>
        </div>
    );
};

export default WebAuthnDemo;
