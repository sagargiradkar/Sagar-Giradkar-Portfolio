// File 1: JavaArchitecture.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JavaArchitecture.css";
import CodeBlock from './CodeBlock';

function JavaArchitecture() {
    const [selectedCodeExample, setSelectedCodeExample] = useState('compile');

    const codeExamples = {
        compile: {
            fileName: "HelloWorld.java",
            code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            description: "Basic Java program compilation example. In terminal, compile with: javac HelloWorld.java"
        },
        javap: {
            fileName: "HelloWorld.class (Bytecode)",
            code: `// Output of javap -c HelloWorld.class
Compiled from "HelloWorld.java"
public class HelloWorld {
  public HelloWorld();
    Code:
       0: aload_0
       1: invokespecial #1 // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: getstatic     #7  // Field java/lang/System.out:Ljava/io/PrintStream;
       3: ldc           #13 // String Hello, World!
       5: invokevirtual #15 // Method java/io/PrintStream.println:(Ljava/lang/String;)V
       8: return
}`,
            description: "Java bytecode disassembly showing what the JVM executes"
        },
        classloader: {
            fileName: "ClassLoaderExample.java",
            code: `public class ClassLoaderExample {
    public static void main(String[] args) {
        // Display information about different class loaders
        
        // 1. Bootstrap Class Loader
        System.out.println("Bootstrap Class Loader:");
        System.out.println(String.class.getClassLoader());
        
        // 2. Extension/Platform Class Loader
        System.out.println("\\nExtension/Platform Class Loader:");
        System.out.println(com.sun.crypto.provider.DESKeyFactory.class.getClassLoader());
        
        // 3. Application/System Class Loader
        System.out.println("\\nApplication/System Class Loader:");
        System.out.println(ClassLoaderExample.class.getClassLoader());
        
        // Hierarchy of class loaders
        ClassLoader loader = ClassLoaderExample.class.getClassLoader();
        System.out.println("\\nClass Loader Hierarchy:");
        while (loader != null) {
            System.out.println(loader);
            loader = loader.getParent();
        }
    }
}`,
            description: "Example demonstrating Java's ClassLoader hierarchy"
        },
        jvmflags: {
            fileName: "JVMFlags.java",
            code: `public class JVMFlags {
    public static void main(String[] args) {
        // Get the max memory the JVM will attempt to use
        long maxMemory = Runtime.getRuntime().maxMemory();
        
        // Get total memory currently available in the JVM
        long totalMemory = Runtime.getRuntime().totalMemory();
        
        // Get free memory available in the JVM
        long freeMemory = Runtime.getRuntime().freeMemory();
        
        System.out.println("JVM Memory Information:");
        System.out.println("Max Memory: " + bytesToMegabytes(maxMemory) + " MB");
        System.out.println("Total Memory: " + bytesToMegabytes(totalMemory) + " MB");
        System.out.println("Free Memory: " + bytesToMegabytes(freeMemory) + " MB");
        System.out.println("Used Memory: " + 
            bytesToMegabytes(totalMemory - freeMemory) + " MB");
    }
    
    private static long bytesToMegabytes(long bytes) {
        return bytes / (1024 * 1024);
    }
}

/* 
Run with custom JVM flags:
java -Xms256m -Xmx512m JVMFlags
*/`,
            description: "Example showing how to view and customize JVM memory settings"
        }
    };

    const handleExampleChange = (example) => {
        setSelectedCodeExample(example);
    };

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> JDK, JRE, and JVM
            </div>

            <h1 className="content-title">Java Architecture: JDK, JRE, and JVM</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <p>
                    Understanding Java's architecture is fundamental for any Java developer. The three key components of Java's architecture—JDK, JRE, and JVM—provide the foundation for Java's "Write Once, Run Anywhere" capability. This article explores each component, their relationships, and how they work together to execute Java applications.
                </p>
            </section>

            <div className="table-of-content">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#architecture-overview">Java Architecture Overview</a></li>
                    <li>
                        <a href="#jdk">Java Development Kit (JDK)</a>
                        <ul>
                            <li>Components of JDK</li>
                            <li>Development Tools</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#jre">Java Runtime Environment (JRE)</a>
                        <ul>
                            <li>Components of JRE</li>
                            <li>Purpose and Functionality</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#jvm">Java Virtual Machine (JVM)</a>
                        <ul>
                            <li>JVM Architecture</li>
                            <li>Class Loader Subsystem</li>
                            <li>Runtime Data Areas</li>
                            <li>Execution Engine</li>
                        </ul>
                    </li>
                    <li><a href="#relationship">Relationship Between JDK, JRE, and JVM</a></li>
                    <li><a href="#bytecode">Java Bytecode</a></li>
                    <li><a href="#examples">Code Examples</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>
            </div>

            <section id="architecture-overview">
                <h2>Java Architecture Overview</h2>
                <p>
                    Java's architecture consists of three main components that work together to develop and run Java applications:
                </p>
                <ul>
                    <li><strong>JDK (Java Development Kit)</strong> - A software development environment used for developing Java applications.</li>
                    <li><strong>JRE (Java Runtime Environment)</strong> - The runtime environment that provides the minimum requirements for executing a Java application.</li>
                    <li><strong>JVM (Java Virtual Machine)</strong> - An abstract machine that provides a runtime environment to execute Java bytecode.</li>
                </ul>
                <p>
                    These components are organized in a hierarchical structure, with JDK containing JRE, which in turn contains the JVM. Each component serves a specific purpose in the development and execution of Java applications.
                </p>

                <div className="architecture-diagram">
                    <div className="jdk-box">
                        <h3>JDK (Java Development Kit)</h3>
                        <div className="jre-box">
                            <h3>JRE (Java Runtime Environment)</h3>
                            <div className="jvm-box">
                                <h3>JVM (Java Virtual Machine)</h3>
                            </div>
                            <div className="library-box">
                                <p>Java Class Libraries</p>
                            </div>
                        </div>
                        <div className="tools-box">
                            <p>Development Tools</p>
                            <p>(javac, java, javadoc, etc.)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="jdk">
                <h2>Java Development Kit (JDK)</h2>
                <p>
                    The Java Development Kit (JDK) is a software development kit that provides all the tools, executables, and binaries required to compile, debug, and execute Java applications. JDK is targeted at Java developers.
                </p>

                <h3>Components of JDK</h3>
                <p>
                    The JDK includes:
                </p>
                <ul>
                    <li><strong>Java Runtime Environment (JRE)</strong> - For running Java applications.</li>
                    <li><strong>Development Tools</strong> - For developing, debugging, and monitoring Java applications.</li>
                    <li><strong>Compiler (javac)</strong> - Converts Java source code (.java files) into bytecode (.class files).</li>
                    <li><strong>Archiver (jar)</strong> - Packages related class libraries into a single JAR file.</li>
                    <li><strong>Documentation Generator (javadoc)</strong> - Generates HTML documentation from Java source code.</li>
                    <li><strong>Header File Generator (javah)</strong> - Creates C header files used for writing native methods.</li>
                </ul>

                <h3>Development Tools</h3>
                <p>
                    The JDK includes several development tools that assist in Java application development:
                </p>
                <ul>
                    <li><strong>javac</strong> - The Java compiler that converts .java files into .class files containing bytecode.</li>
                    <li><strong>java</strong> - The Java launcher that starts the JVM and runs Java applications.</li>
                    <li><strong>javadoc</strong> - Generates API documentation in HTML format from Java source code.</li>
                    <li><strong>jar</strong> - Creates and manages JAR (Java Archive) files.</li>
                    <li><strong>javap</strong> - The Java class file disassembler that displays information about classes and methods.</li>
                    <li><strong>jdb</strong> - The Java debugger that helps find and fix bugs in Java applications.</li>
                    <li><strong>jconsole</strong> - A graphical tool for monitoring and managing Java applications.</li>
                    <li><strong>jshell</strong> - An interactive tool for learning Java and prototyping Java code (added in Java 9).</li>
                </ul>

                <div className="note-box">
                    <p>
                        <strong>Note:</strong> Starting with Java 11, Oracle offers the JDK in two distributions: commercial and open source (under the OpenJDK project). The commercial version includes additional features and support but requires a license for production use.
                    </p>
                </div>
            </section>

            <section id="jre">
                <h2>Java Runtime Environment (JRE)</h2>
                <p>
                    The Java Runtime Environment (JRE) is the runtime environment in which Java applications run. It provides the minimum requirements for executing a Java application and is intended for end users.
                </p>

                <h3>Components of JRE</h3>
                <p>
                    The JRE includes:
                </p>
                <ul>
                    <li><strong>Java Virtual Machine (JVM)</strong> - Runs the Java bytecode.</li>
                    <li><strong>Core Classes and Libraries</strong> - Essential classes required for Java applications.</li>
                    <li><strong>Supporting Files and Libraries</strong> - Additional files and libraries needed at runtime.</li>
                </ul>

                <h3>Purpose and Functionality</h3>
                <p>
                    The main purpose of the JRE is to provide an environment for executing Java applications. It contains libraries, the JVM, and other components necessary for running applications written in Java. The JRE does not contain tools and utilities such as compilers or debuggers for developing Java applications.
                </p>
                <p>
                    When a user wants to run a Java application but doesn't need to develop Java applications, they can install just the JRE, which is a subset of the JDK. This is ideal for situations where the machine only needs to run Java applications, not develop them.
                </p>

                <div className="note-box">
                    <p>
                        <strong>Note:</strong> Since Java 11, the concept of a separate JRE distribution has been deprecated. Oracle now encourages using the jlink tool (included in the JDK) to create custom runtime images that contain only the modules needed for a specific application, essentially creating an application-specific JRE.
                    </p>
                </div>
            </section>

            <section id="jvm">
                <h2>Java Virtual Machine (JVM)</h2>
                <p>
                    The Java Virtual Machine (JVM) is an abstract machine that provides a runtime environment in which Java bytecode can execute. It is the cornerstone of Java's "Write Once, Run Anywhere" philosophy, allowing the same Java application to run on different platforms without modification.
                </p>

                <h3>JVM Architecture</h3>
                <p>
                    The JVM architecture consists of three main subsystems:
                </p>
                <ol>
                    <li><strong>Class Loader Subsystem</strong> - Loads, links, and initializes class files.</li>
                    <li><strong>Runtime Data Areas</strong> - Memory areas used during program execution.</li>
                    <li><strong>Execution Engine</strong> - Executes the instructions contained in the class files.</li>
                </ol>

                <div className="jvm-diagram">
                    <div className="jvm-box">
                        <h4>JVM Architecture</h4>
                        <div className="jvm-components">
                            <div className="classloader">
                                <h5>Class Loader Subsystem</h5>
                            </div>
                            <div className="runtime-areas">
                                <h5>Runtime Data Areas</h5>
                                <div className="memory-areas">
                                    <div className="area">Method Area</div>
                                    <div className="area">Heap</div>
                                    <div className="area">Stack</div>
                                    <div className="area">PC Register</div>
                                    <div className="area">Native Method Stack</div>
                                </div>
                            </div>
                            <div className="execution-engine">
                                <h5>Execution Engine</h5>
                                <div className="engine-components">
                                    <div>Interpreter</div>
                                    <div>JIT Compiler</div>
                                    <div>Garbage Collector</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Class Loader Subsystem</h3>
                <p>
                    The Class Loader Subsystem is responsible for loading class files into memory. It performs three main tasks:
                </p>
                <ol>
                    <li><strong>Loading</strong> - Reads the .class file and creates a binary representation of the class in memory.</li>
                    <li><strong>Linking</strong> - Performs verification, preparation, and resolution of the loaded class.</li>
                    <li><strong>Initialization</strong> - Initializes class variables with their proper initial values.</li>
                </ol>
                <p>
                    The JVM uses three types of class loaders:
                </p>
                <ul>
                    <li><strong>Bootstrap Class Loader</strong> - Loads core Java API classes from the RT.JAR file.</li>
                    <li><strong>Extension/Platform Class Loader</strong> - Loads classes from the extension directories (JDK/JRE/LIB/EXT).</li>
                    <li><strong>Application/System Class Loader</strong> - Loads classes from the application classpath.</li>
                </ul>

                <h3>Runtime Data Areas</h3>
                <p>
                    The JVM defines various runtime data areas that are used during the execution of a program. These areas may be created at JVM startup or at method invocation:
                </p>
                <ul>
                    <li><strong>Method Area</strong> - Stores class structures, including methods, constructors, and fields.</li>
                    <li><strong>Heap</strong> - Stores all objects and arrays created during application execution.</li>
                    <li><strong>Java Stacks</strong> - Stores frames, with each frame containing local variables and partial results.</li>
                    <li><strong>PC Registers</strong> - Contains the address of the JVM instruction currently being executed.</li>
                    <li><strong>Native Method Stacks</strong> - Used for native method invocation.</li>
                </ul>

                <h3>Execution Engine</h3>
                <p>
                    The Execution Engine executes the bytecode loaded by the Class Loader. It consists of:
                </p>
                <ul>
                    <li><strong>Interpreter</strong> - Interprets bytecode line by line and executes it.</li>
                    <li><strong>Just-In-Time (JIT) Compiler</strong> - Compiles frequently executed bytecode to native machine code for improved performance.</li>
                    <li><strong>Garbage Collector</strong> - Automatically frees memory by removing unused objects.</li>
                </ul>
                <p>
                    The JIT compiler is a key component that improves the performance of Java applications. It identifies "hot spots" (frequently executed code) and compiles them to native machine code, which is then executed directly by the CPU, bypassing the interpreter and improving execution speed.
                </p>
            </section>

            <section id="relationship">
                <h2>Relationship Between JDK, JRE, and JVM</h2>
                <p>
                    The relationship between JDK, JRE, and JVM can be understood as follows:
                </p>
                <ul>
                    <li><strong>JDK (Java Development Kit)</strong> includes the JRE plus development tools.</li>
                    <li><strong>JRE (Java Runtime Environment)</strong> includes the JVM plus libraries and other components needed to run Java applications.</li>
                    <li><strong>JVM (Java Virtual Machine)</strong> is the core component that executes Java bytecode.</li>
                </ul>
                <p>
                    This hierarchical relationship can be visualized as JDK $gh JRE $ls JVM, where each component is a subset of the one above it. A developer typically installs the JDK to develop Java applications, while an end-user who only wants to run Java applications can install just the JRE.
                </p>
            </section>

            <section id="bytecode">
                <h2>Java Bytecode</h2>
                <p>
                    Java bytecode is the intermediate representation of Java code that is executed by the JVM. When a Java source file (.java) is compiled, the Java compiler (javac) generates bytecode, which is stored in .class files.
                </p>
                <p>
                    Bytecode consists of instructions that the JVM executes. These instructions are platform-independent, meaning they can run on any device with a compatible JVM, regardless of the underlying hardware or operating system.
                </p>
                <p>
                    The process of Java execution can be summarized as:
                </p>
                <ol>
                    <li>Java source code (.java files) is written by the developer.</li>
                    <li>The Java compiler (javac) compiles the source code into bytecode (.class files).</li>
                    <li>The bytecode is loaded by the JVM's Class Loader.</li>
                    <li>The JVM interprets or compiles (using the JIT compiler) the bytecode and executes it on the host machine.</li>
                </ol>
                <p>
                    This architecture allows Java programs to be written once and run anywhere, as long as a compatible JVM is available for the target platform.
                </p>
            </section>

            <section id="examples">
                <h2>Code Examples</h2>
                <p>
                    Let's explore some examples that demonstrate various aspects of Java's architecture:
                </p>

                <div className="code-examples-selector">
                    <h3>Select an example:</h3>
                    <div className="example-buttons">
                        <button
                            className={selectedCodeExample === 'compile' ? 'active' : ''}
                            onClick={() => handleExampleChange('compile')}
                        >
                            Compilation Example
                        </button>
                        <button
                            className={selectedCodeExample === 'javap' ? 'active' : ''}
                            onClick={() => handleExampleChange('javap')}
                        >
                            Bytecode Example
                        </button>
                        <button
                            className={selectedCodeExample === 'classloader' ? 'active' : ''}
                            onClick={() => handleExampleChange('classloader')}
                        >
                            ClassLoader Example
                        </button>
                        <button
                            className={selectedCodeExample === 'jvmflags' ? 'active' : ''}
                            onClick={() => handleExampleChange('jvmflags')}
                        >
                            JVM Configuration
                        </button>
                    </div>

                    <div className="example-description">
                        <p>{codeExamples[selectedCodeExample].description}</p>
                    </div>

                    <CodeBlock
                        initialCode={codeExamples[selectedCodeExample].code}
                        fileName={codeExamples[selectedCodeExample].fileName}
                    />
                </div>
            </section>

            <section id="conclusion">
                <h2>Conclusion</h2>
                <p>
                    Understanding the Java architecture—JDK, JRE, and JVM—is essential for anyone working with Java. The JDK provides the tools needed for development, the JRE provides the environment needed to run Java applications, and the JVM executes the bytecode.
                </p>
                <p>
                    This architecture is what enables Java's platform independence, security, and robust memory management. By separating the compilation and execution processes, Java achieves its "Write Once, Run Anywhere" capability, allowing developers to create applications that run on any platform with a compatible JVM.
                </p>
                <p>
                    As you continue your journey with Java, this understanding of its architecture will help you write more efficient code, troubleshoot issues more effectively, and better appreciate the design decisions that have made Java one of the world's most popular programming languages.
                </p>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/java-features" className="prev-link">
                    ← Previous: Java Features
                </Link>
                <Link to="/tutorials/java/java-environment-setup" className="next-link">
                    Next: Java Environment Setup →
                </Link>
            </div>
        </div>
    );
}

export default JavaArchitecture;
