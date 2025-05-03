// components/Blog/BlogPost/ReactCPanelPost/ReactCPanelPost.js

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import reactCPanelImg from "../../../../Assets/Blogs/deploy-react-js-app-on-cpanel.png"
import { FaCopy, FaCheck } from "react-icons/fa";
import "./ReactCPanelPost.css";

function ReactCPanelPost() {
    const CodeBlock = ({ code, language = "bash" }) => {
        const [copied, setCopied] = useState(false);

        const copyToClipboard = async (text) => {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        };

        const formattedCode = code.trim();

        return (
            <div className="code-editor">
                <div className="code-header">
                    <span>{language}</span>
                    <button
                        className="copy-button"
                        onClick={() => copyToClipboard(formattedCode)}
                        title={copied ? "Copied!" : "Copy code"}
                        aria-label={copied ? "Code copied" : "Copy code to clipboard"}
                    >
                        {copied ? <FaCheck style={{ color: "#4CAF50" }} /> : <FaCopy />}
                    </button>
                </div>
                <pre className="code-content">
                    <code>{formattedCode}</code>
                </pre>
            </div>
        );
    };

    const createReactAppCode = `npx create-react-app my-website
cd my-website`;

    const buildReactAppCode = `npm run build`;

    const htaccessCode = `Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]`;

    const forceHttpsCode = `RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`;

    const envVarsCode = `REACT_APP_API_URL=https://myapi.com`;

    return (
        <Container fluid className="blog-section">
            <Particle />
            <Container className="blog-content">
                <div className="blog-featured-image">
                    <img src={reactCPanelImg} alt="React website on cPanel hosting" />
                </div>

                <div className="blog-header">
                    <h1>How to Build and Host a React Website on cPanel: A Complete Guide</h1>
                    <div className="blog-subtitle">
                        <p className="italics">
                            "A step-by-step tutorial on deploying your React application using traditional
                            cPanel-based hosting services - simpler than you might think!"
                        </p>
                    </div>
                </div>

                <div className="blog-meta">
                    <span>By Sagar Giradkar</span>
                    <span>Updated: 3 May 2025</span>
                    <span>Reading Time: 12 minutes</span>
                </div>

                <div className="blog-main-content">
                    <section className="introduction">
                        <h2>Introduction</h2>
                        <p>
                            If you're a web developer looking to deploy your React application using a
                            traditional cPanel-based hosting service, this step-by-step guide is for you.
                            While React is commonly deployed on platforms like Vercel, Netlify, or Firebase,
                            you can absolutely host it on cPanel — and it's not as complicated as you might think!
                        </p>
                    </section>

                    <section className="prerequisites">
                        <h2>Step 1: Prerequisites</h2>

                        <div className="installation-steps">
                            <p>Before we dive in, make sure you have:</p>
                            <ul>
                                <li><strong>Node.js and npm</strong> installed on your system</li>
                                <li>A <strong>React app</strong> ready to go (or create one)</li>
                                <li>Access to a <strong>cPanel-based hosting account</strong></li>
                                <li>A domain or subdomain set up in your hosting account</li>
                            </ul>

                            <div className="important-note">
                                <h4>Getting Started:</h4>
                                <p>If you haven't built your app yet, here's a quick way to start one:</p>
                                <CodeBlock code={createReactAppCode} />
                                <p>This command scaffolds a basic React app and sets you up with a development environment.</p>
                            </div>
                        </div>
                    </section>

                    <section className="build-process">
                        <h2>Step 2: Build Your React App for Production</h2>

                        <p>
                            Once your app is ready and tested locally, it's time to build it for deployment.
                            React uses a static build system, so everything gets compiled into plain HTML, CSS,
                            and JavaScript.
                        </p>

                        <CodeBlock code={buildReactAppCode} />

                        <div className="tip-card">
                            <h4>Pro Tip:</h4>
                            <p>
                                This will generate a <code>build/</code> folder containing optimized static files
                                ready for deployment. These files are minified and production-ready.
                            </p>
                        </div>
                    </section>

                    <section className="routing-setup">
                        <h2>Step 3: Handle Routing with .htaccess</h2>

                        <p>
                            React apps are typically Single Page Applications (SPA), which means you'll need to
                            handle routing correctly on a server.
                        </p>

                        <p>Create a file named <code>.htaccess</code> <strong>inside the <code>build/</code> folder</strong> with the following content:</p>

                        <CodeBlock code={htaccessCode} language="apache" />

                        <div className="important-note">
                            <h4>Why This Matters:</h4>
                            <p>
                                This tells Apache (your cPanel server's web server) to route all traffic through
                                <code>index.html</code>, which is essential for React Router to work properly. Without this,
                                direct URL access to routes would result in 404 errors.
                            </p>
                        </div>
                    </section>

                    <section className="cpanel-upload">
                        <h2>Step 4: Upload to cPanel</h2>

                        <div className="practice-card">
                            <h4>Option A: Using File Manager</h4>
                            <ol>
                                <li>Open your cPanel dashboard</li>
                                <li>Go to <strong>File Manager</strong> > <strong>public_html/</strong> (or your subdomain directory)</li>
                                <li>On your local machine, <strong>zip the contents</strong> of the <code>build/</code> folder (don't zip the folder itself — just its contents)</li>
                                <li>Upload the zip file</li>
                                <li>Extract the contents inside <code>public_html/</code></li>
                            </ol>
                        </div>

                        <div className="practice-card">
                            <h4>Option B: Using FTP (FileZilla)</h4>
                            <p>If you prefer FTP:</p>
                            <ol>
                                <li>Connect using your FTP credentials</li>
                                <li>Navigate to <code>public_html/</code></li>
                                <li>Upload all files and folders from your <code>build/</code> directory</li>
                            </ol>
                        </div>
                    </section>

                    <section className="domain-setup">
                        <h2>Step 5: Verify Domain or Subdomain Setup</h2>

                        <p>Ensure your domain or subdomain is pointing to the correct directory:</p>

                        <ul>
                            <li>Go to <strong>Domains</strong> or <strong>Subdomains</strong> in cPanel</li>
                            <li>Set the document root to where your React app files were uploaded (typically <code>public_html/yourdomain</code>)</li>
                        </ul>
                    </section>

                    <section className="enable-https">
                        <h2>Step 6: Optional — Enable HTTPS</h2>

                        <p>If your site doesn't automatically use HTTPS:</p>

                        <ul>
                            <li>Navigate to <strong>SSL/TLS > Let's Encrypt</strong> or <strong>AutoSSL</strong> in cPanel</li>
                            <li>Install an SSL certificate for your domain</li>
                            <li>Update your <code>.htaccess</code> to force HTTPS if needed:</li>
                        </ul>

                        <CodeBlock code={forceHttpsCode} language="apache" />

                        <div className="tip-card">
                            <h4>Security Note:</h4>
                            <p>
                                HTTPS is not just for security — many modern web features like service workers
                                and some browser APIs require a secure context to function properly.
                            </p>
                        </div>
                    </section>

                    <section className="testing">
                        <h2>Step 7: Done! Test Your Website</h2>

                        <p>Visit your domain or subdomain in the browser:</p>

                        <ul>
                            <li>Check that your site loads</li>
                            <li>Ensure navigation works correctly (thanks to your <code>.htaccess</code>)</li>
                            <li>Open the browser dev tools and confirm there are no missing assets or console errors</li>
                        </ul>

                        <div className="issue-card">
                            <h4>Troubleshooting Common Issues</h4>
                            <p>
                                If your routes aren't working, double-check that your <code>.htaccess</code> file was uploaded
                                correctly and that your hosting has enabled the Apache module for <code>mod_rewrite</code>.
                            </p>
                        </div>
                    </section>

                    <section className="bonus-tips">
                        <h2>Bonus Tips</h2>

                        <div className="practice-card">
                            <h4>Using Environment Variables?</h4>
                            <p>React only exposes variables prefixed with <code>REACT_APP_</code> in the build.</p>
                            <CodeBlock code={envVarsCode} language="env" />
                            <p>Make sure sensitive keys are <strong>not exposed</strong> in the client-side code.</p>
                        </div>

                        <div className="practice-card">
                            <h4>Updating Your Website</h4>
                            <p>When you want to update:</p>
                            <ol>
                                <li>Make your changes</li>
                                <li>Run <code>npm run build</code> again</li>
                                <li>Replace the files in cPanel with the updated build</li>
                            </ol>
                        </div>
                    </section>

                    <section className="conclusion">
                        <h2>Conclusion</h2>
                        <p>
                            Deploying a React app on cPanel may not be the most modern approach, but it's incredibly
                            practical if you're working with traditional web hosting. With a little configuration
                            (especially <code>.htaccess</code>), your React app will run smoothly on any cPanel server.
                        </p>
                        <p>
                            If you're looking to integrate this process with a CMS, use a backend, or include contact
                            forms — feel free to comment or reach out. I'll be happy to write more tutorials on advanced
                            React + cPanel setups.
                        </p>
                    </section>
                </div>
            </Container>
        </Container>
    );
}

export default ReactCPanelPost;