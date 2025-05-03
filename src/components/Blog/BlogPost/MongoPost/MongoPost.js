// MongoPost.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import mongoDbImg from "../../../../Assets/Blogs/1744093144351-1.webp";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./MongoPost.css";

function MongoPost() {
  const CodeBlock = ({ code, language = "javascript" }) => {
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

    // Remove extra indentation while preserving code structure
    const formattedCode = code.trim();

    return (
        <div className="code-editor">
            <div className="code-header">
                <span>{language}</span>
                <button
                    className="copy-button"
                    onClick={() => copyToClipboard(formattedCode)}
                    title={copied ? "Copied!" : "Copy code"}
                >
                    {copied ? (
                        <FaCheck style={{ color: "#4CAF50" }} />
                    ) : (
                        <FaCopy />
                    )}
                </button>
            </div>
            <pre className="code-content">
                <code>{formattedCode}</code>
            </pre>
        </div>
    );
};


  const mongoDBCode = `// lib/mongodb.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = { 
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') { 
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise`;

  const exampleUsageCode = `import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db('myDatabase')

    const data = await db.collection('myCollection').find({}).toArray()
    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}`;

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container className="blog-content">
        <div className="blog-featured-image">
          <img src={mongoDbImg} alt="MongoDB and Next.js Integration" />
        </div>

        <div className="blog-header">
          <h1>How to integrate MongoDB into your Next.js apps</h1>
          <div className="blog-subtitle">
            <p className="italics">
              "Learn how to seamlessly integrate MongoDB into your Next.js
              applications with best practices for efficient connection
              handling, resource management, and improved performance."
            </p>
          </div>
        </div>

        <div className="blog-meta">
          <span>By Sagar Giradkar</span>
          <span>Updated: 1 May 2025</span>
          <span>Reading Time: 15 minutes</span>
        </div>

        <div className="blog-main-content">
          <section className="introduction">
            <h2>Introduction</h2>
            <p>
              When building applications with <strong>Next.js</strong> and{" "}
              <strong>MongoDB</strong>, managing the database connection efficiently is essential.
              This blog post explores the <code>lib/mongodb.js</code> code snippet, explaining
              its role and why it’s structured that way.
            </p>
          </section>

          <section className="mongodb-setup">
            <h2>MongoDB Connection Setup</h2>
            <p>Here's the code snippet we’ll break down:</p>
            <CodeBlock code={mongoDBCode} />
          </section>

          <section className="explanation">
            <h2>What Does This File Do?</h2>
            <p>
              This file sets up and exports a MongoDB client connection promise. The client is used
              throughout the Next.js application to interact with the MongoDB database.
            </p>

            <h3>1. Imports and Constants</h3>
            <ul>
              <li>MongoClient is imported from the <code>mongodb</code> package.</li>
              <li><code>uri</code> is fetched from <code>process.env.MONGODB_URI</code>.</li>
              <li><code>options</code> includes connection settings like <code>useNewUrlParser</code>.</li>
            </ul>

            <h3>2. Environment Variable Check</h3>
            <p>
              Throws an error if <code>MONGODB_URI</code> is not defined. This ensures that developers
              don’t forget to add it in <code>.env.local</code>.
            </p>

            <h3>3. Connection Handling Based on Environment</h3>
            <h4>Development Mode:</h4>
            <ul>
              <li>Uses <code>global._mongoClientPromise</code> to reuse the connection.</li>
              <li>Prevents multiple connections on hot reload (Hot Module Replacement).</li>
              <li>Reduces memory leaks and overhead in dev mode.</li>
            </ul>
            <h4>Production Mode:</h4>
            <ul>
              <li>Creates a fresh client connection per instance.</li>
              <li>More secure and stable for serverless scaling.</li>
            </ul>

            <h3>4. Exporting the Client</h3>
            <p>
              The module exports <code>clientPromise</code>, making it easily usable across API routes
              without reinitializing every damn time.
            </p>
          </section>

          <section className="connection-strategy">
            <h2>Why Use This Connection Strategy?</h2>

            <h3>Efficient Resource Management</h3>
            <p>
              In a serverless environment like Vercel, each function may initialize independently.
              Reconnecting to MongoDB for every request would be stupid and wasteful.
              This pattern avoids that mess.
            </p>

            <h3>Reduced Memory Leaks</h3>
            <p>
              Without the global dev connection, hot reloads would trigger a horde of connections,
              leading to bloated memory usage and MongoDB yelling at you.
            </p>

            <h3>Simplified Database Usage</h3>
            <p>
              Exporting <code>clientPromise</code> keeps database calls simple and sexy:
              <code>await client.db()</code> is all it takes.
            </p>
          </section>

          <section className="example-usage">
            <h2>Example Usage in Next.js</h2>
            <p>Use the exported <code>clientPromise</code> in API routes like this:</p>
            <CodeBlock code={exampleUsageCode} />
          </section>

          <section className="best-practices">
            <h2>Best Practices for MongoDB with Next.js</h2>

            <div className="practice-card">
              <h4>Environment Variables</h4>
              <p>Store your MongoDB URI in <code>.env.local</code>. Don't be that guy who checks in secrets.</p>
            </div>

            <div className="practice-card">
              <h4>Error Handling</h4>
              <p>Wrap your DB ops in try/catch blocks. Don't crash and burn in production.</p>
            </div>

            <div className="practice-card">
              <h4>Connection Pooling</h4>
              <p>
                Let MongoDB manage pools instead of opening fresh sockets like a hyperactive squirrel.
              </p>
            </div>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>
              The <code>lib/mongodb.js</code> file is a small but powerful piece of any
              Next.js + MongoDB stack. It keeps your app sane, your resources efficient,
              and your dev experience smooth. Do it right, or suffer in debug hell.
            </p>
          </section>
        </div>

      </Container>
    </Container>
  );
}

export default MongoPost;
