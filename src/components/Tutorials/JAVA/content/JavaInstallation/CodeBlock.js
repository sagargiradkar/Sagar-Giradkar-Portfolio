// CodeBlock.js
import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';
import './CodeBlock.css';

const CodeBlock = ({ initialCode }) => {
    const [code, setCode] = useState(initialCode);
    const [isEditing, setIsEditing] = useState(false);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code, isEditing]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            //alert('Code copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleRun = async () => {
        setIsRunning(true);
        setOutput('Running...');

        try {
            // This is a simulation of running Java code
            // In a real implementation, you'd need a backend service
            setTimeout(() => {
                if (code.includes('System.out.println')) {
                    const match = code.match(/println\("([^"]*)"\)/);
                    const output = match ? match[1] : 'Hello, World!';
                    setOutput(output);
                } else {
                    setOutput('No output or compilation error');
                }
                setIsRunning(false);
            }, 1000);
        } catch (error) {
            setOutput('Error running code: ' + error.message);
            setIsRunning(false);
        }
    };

    return (
        <div className="code-block-container">
            <div className="code-header">
                <span className="file-name">HelloWorld.java</span>
                <div className="code-actions">
                    <button
                        className="action-button edit-button"
                        onClick={handleEdit}
                        title="Edit code"
                    >
                        {isEditing ? '💾 Save' : '✏️ Edit'}
                    </button>
                    <button
                        className="action-button run-button"
                        onClick={handleRun}
                        disabled={isRunning}
                        title="Run code"
                    >
                        {isRunning ? '⏳ Running...' : '▶️ Run'}
                    </button>
                    <button
                        className="action-button copy-button"
                        onClick={handleCopy}
                        title="Copy code"
                    >
                        📋 Copy
                    </button>
                </div>
            </div>

            <div className="code-content">
                {isEditing ? (
                    <textarea
                        value={code}
                        onChange={handleCodeChange}
                        className="code-editor"
                        spellCheck="false"
                    />
                ) : (
                    <pre>
                        <code className="language-java">
                            {code}
                        </code>
                    </pre>
                )}
            </div>

            {output && (
                <div className="code-output">
                    <div className="output-header">Output:</div>
                    <pre>{output}</pre>
                </div>
            )}
        </div>
    );
};

export default CodeBlock;
