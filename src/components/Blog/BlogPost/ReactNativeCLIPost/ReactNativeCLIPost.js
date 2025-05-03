import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import reactNativeImg from "../../../../Assets/Blogs/react-native.webp";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./ReactNativeCLIPost.css";

function ReactNativeCLIPost() {
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

    const installNodeCode = `# Check if Node.js is already installed
node -v

# If not installed, install it from https://nodejs.org/`;

    const installJDKCode = `# On macOS with Homebrew
brew install --cask adoptopenjdk/openjdk/adoptopenjdk11

# On Ubuntu
sudo apt-get install openjdk-11-jdk

# On Windows
# Download from https://adoptopenjdk.net/`;

    const installAndroidStudioCode = `# Visit https://developer.android.com/studio/index.html
# Follow platform-specific installation instructions`;

    const installXcodeCode = `# Open Mac App Store
# Search for Xcode and click Install`;

    const installCocoaPodsCode = `sudo gem install cocoapods

# Verify installation
pod --version`;

    const installReactNativeCLICode = `npm install -g react-native-cli`;

    const createProjectCode = `npx react-native init MyFirstApp

# With TypeScript template
npx react-native init MyFirstApp --template react-native-template-typescript`;

    const runAndroidCode = `# Make sure you have an Android emulator running or a device connected
cd MyFirstApp
npx react-native run-android`;

    const runIOSCode = `cd MyFirstApp
npx react-native run-ios

# To specify a simulator
npx react-native run-ios --simulator="iPhone 15 Pro"`;

    const modifyAppCode = `// App.js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My First React Native App</Text>
        <Text style={styles.subtitle}>Welcome to mobile development!</Text>
        
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Count: {count}</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;`;

    const debuggingCode = `# Start Metro bundler (if not already running)
npx react-native start

# In a new terminal, run the app
npx react-native run-android
# or
npx react-native run-ios`;

    return (
        <Container fluid className="blog-section">
            <Particle />
            <Container className="blog-content">
                <div className="blog-featured-image">
                    <img src={reactNativeImg} alt="React Native mobile app development" />
                </div>

                <div className="blog-header">
                    <h1>Setting Up React Native CLI and Building Your First App</h1>
                    <div className="blog-subtitle">
                        <p className="italics">
                            "A comprehensive guide to setting up the React Native development environment
                            with the CLI and creating your first cross-platform mobile application."
                        </p>
                    </div>
                </div>

                <div className="blog-meta">
                    <span>By Sagar Giradkar</span>
                    <span>Updated: 3 May 2025</span>
                    <span>Reading Time: 18 minutes</span>
                </div>

                <div className="blog-main-content">
                    <section className="introduction">
                        <h2>Introduction</h2>
                        <p>
                            React Native is a powerful framework that lets you build mobile applications using JavaScript
                            and React. While Expo provides a managed development environment that's great for beginners,
                            the React Native CLI gives you more control and access to native modules without limitations.
                            In this guide, we'll walk through setting up the React Native CLI development environment and
                            building your first cross-platform mobile app.
                        </p>
                    </section>

                    <section className="prerequisites">
                        <h2>Prerequisites</h2>

                        <div className="installation-steps">
                            <h3>1. Node.js and npm</h3>
                            <p>React Native requires Node.js and npm to be installed:</p>
                            <CodeBlock code={installNodeCode} />

                            <div className="important-note">
                                <h4>Node.js Version:</h4>
                                <p>
                                    It's recommended to use Node.js 14 or newer. You can use tools like nvm (Node Version Manager)
                                    to manage multiple Node.js versions.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="platform-setup">
                        <h2>Platform-Specific Setup</h2>

                        <h3>For Android Development</h3>
                        <div className="installation-steps">
                            <p>To develop for Android, you'll need:</p>

                            <h4>1. Java Development Kit (JDK)</h4>
                            <p>Install JDK 11 or newer:</p>
                            <CodeBlock code={installJDKCode} />

                            <h4>2. Android Studio and Android SDK</h4>
                            <p>Install Android Studio and necessary SDKs:</p>
                            <CodeBlock code={installAndroidStudioCode} />

                            <div className="tip-card">
                                <h4>Don't Forget:</h4>
                                <p>
                                    After installing Android Studio, make sure to install these components:
                                </p>
                                <ul>
                                    <li>Android SDK</li>
                                    <li>Android SDK Platform</li>
                                    <li>Android Virtual Device</li>
                                </ul>
                                <p>
                                    You'll also need to set up environment variables like ANDROID_HOME.
                                </p>
                            </div>
                        </div>

                        <h3>For iOS Development (macOS only)</h3>
                        <div className="installation-steps">
                            <p>To develop for iOS, you'll need:</p>

                            <h4>1. Xcode</h4>
                            <p>Install Xcode from the Mac App Store:</p>
                            <CodeBlock code={installXcodeCode} />

                            <h4>2. CocoaPods</h4>
                            <p>Install CocoaPods package manager:</p>
                            <CodeBlock code={installCocoaPodsCode} />

                            <div className="important-note">
                                <h4>macOS Requirement:</h4>
                                <p>
                                    iOS development can only be done on macOS. If you're on Windows or Linux,
                                    you'll be limited to Android development unless you use a Mac virtual machine
                                    or a service like MacinCloud.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="install-cli">
                        <h2>Installing React Native CLI</h2>

                        <p>
                            Now that we have the platform-specific requirements installed, let's install the React Native CLI:
                        </p>

                        <CodeBlock code={installReactNativeCLICode} />

                        <div className="tip-card">
                            <h4>Pro Tip:</h4>
                            <p>
                                While you can install the CLI globally, modern React Native projects now use the CLI via npx,
                                so this global installation is optional but can be convenient.
                            </p>
                        </div>
                    </section>

                    <section className="create-project">
                        <h2>Creating Your First React Native Project</h2>

                        <p>
                            Let's create a new React Native project using the CLI:
                        </p>

                        <CodeBlock code={createProjectCode} />

                        <div className="practice-card">
                            <h4>What's Happening:</h4>
                            <p>
                                This command creates a new React Native project with the necessary structure, dependencies,
                                and native code for both iOS and Android platforms. It might take several minutes to complete
                                as it installs all required dependencies.
                            </p>
                        </div>
                    </section>

                    <section className="run-app">
                        <h2>Running Your App</h2>

                        <h3>For Android</h3>
                        <div className="practice-card">
                            <p>Launch an Android emulator or connect a device, then:</p>
                            <CodeBlock code={runAndroidCode} />
                        </div>

                        <h3>For iOS</h3>
                        <div className="practice-card">
                            <p>Launch the iOS simulator:</p>
                            <CodeBlock code={runIOSCode} />
                        </div>

                        <div className="issue-card">
                            <h4>Troubleshooting Common Issues</h4>
                            <p>
                                If you encounter errors when running your app, try these solutions:
                            </p>
                            <ul>
                                <li>Make sure your emulator is running before executing the run command</li>
                                <li>Check that all environment variables are properly set</li>
                                <li>Run <code>npx react-native doctor</code> to diagnose environment issues</li>
                                <li>For iOS issues, try running <code>pod install</code> inside the <code>ios</code> directory</li>
                            </ul>
                        </div>
                    </section>

                    <section className="modify-app">
                        <h2>Modifying Your App</h2>

                        <p>
                            Let's modify the default app to create a simple counter. Replace the content of <code>App.js</code> with:
                        </p>

                        <CodeBlock code={modifyAppCode} language="jsx" />

                        <div className="tip-card">
                            <h4>Hot Reloading:</h4>
                            <p>
                                React Native features hot reloading. After making changes to your JavaScript code,
                                save the file and your app will automatically update without requiring a full reload.
                                You can also press R twice in the Metro terminal to reload manually.
                            </p>
                        </div>
                    </section>

                    <section className="debugging">
                        <h2>Debugging Your App</h2>

                        <p>
                            React Native provides several ways to debug your application:
                        </p>

                        <ul>
                            <li>Shake your device or press <code>Cmd+D</code> (iOS) or <code>Cmd+M</code> (Android) in the emulator to open the developer menu</li>
                            <li>Enable "Debug JS Remotely" to inspect JavaScript in Chrome Developer Tools</li>
                            <li>Use the React Native Debugger application for a better debugging experience</li>
                        </ul>

                        <p>To start the Metro bundler and your app separately:</p>

                        <CodeBlock code={debuggingCode} />
                    </section>

                    <section className="project-structure">
                        <h2>Understanding Project Structure</h2>

                        <div className="installation-steps">
                            <p>Your React Native project includes:</p>

                            <ul>
                                <li><strong>android/</strong> - Native Android project files</li>
                                <li><strong>ios/</strong> - Native iOS project files</li>
                                <li><strong>node_modules/</strong> - JavaScript dependencies</li>
                                <li><strong>App.js</strong> - Main application component</li>
                                <li><strong>index.js</strong> - Entry point for your app</li>
                                <li><strong>package.json</strong> - Project configuration and dependencies</li>
                                <li><strong>metro.config.js</strong> - Metro bundler configuration</li>
                            </ul>
                        </div>
                    </section>

                    <section className="best-practices">
                        <h2>Best Practices</h2>

                        <div className="practice-card">
                            <h4>Project Organization</h4>
                            <p>
                                As your project grows, consider organizing your code into folders:
                            </p>
                            <ul>
                                <li><strong>src/components/</strong> - Reusable UI components</li>
                                <li><strong>src/screens/</strong> - Screen components</li>
                                <li><strong>src/navigation/</strong> - Navigation configuration</li>
                                <li><strong>src/assets/</strong> - Images, fonts, etc.</li>
                                <li><strong>src/utils/</strong> - Helper functions</li>
                                <li><strong>src/api/</strong> - API interaction code</li>
                            </ul>
                        </div>

                        <div className="practice-card">
                            <h4>Performance</h4>
                            <p>
                                Keep performance in mind from the start:
                            </p>
                            <ul>
                                <li>Use <code>FlatList</code> instead of <code>ScrollView</code> for long lists</li>
                                <li>Implement <code>React.memo</code> for pure components</li>
                                <li>Use images optimized for mobile</li>
                                <li>Avoid unnecessary re-renders</li>
                            </ul>
                        </div>
                    </section>

                    <section className="conclusion">
                        <h2>Conclusion</h2>
                        <p>
                            Congratulations! You've successfully set up the React Native CLI development environment
                            and created your first React Native application. This is just the beginning of your
                            mobile development journey. As you continue, you'll learn more about navigation,
                            state management, native modules, and deployment.
                        </p>
                        <p>
                            React Native's "learn once, write anywhere" approach allows you to leverage your React
                            knowledge to build truly native mobile applications. The CLI setup gives you full
                            control over your project and access to the entire native ecosystem.
                        </p>
                        <p>
                            In future tutorials, we'll cover more advanced topics like navigation between screens,
                            accessing device features, and publishing your app to the app stores.
                        </p>
                    </section>
                </div>
            </Container>
        </Container>
    );
}

export default ReactNativeCLIPost;
