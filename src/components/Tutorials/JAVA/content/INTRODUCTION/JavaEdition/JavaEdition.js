// File 1: JavaEdition.js

import React from "react";
import { Link } from "react-router-dom";
import "./JavaEdition.css";
import CodeBlock from './CodeBlock';

function JavaEdition() {
  const seCode = 
  `// Java SE example - Basic file handling
public class FileExample {
    public static void main(String[] args) {
        java.io.File file = new java.io.File("example.txt");
        System.out.println("File exists: " + file.exists());
        System.out.println("File path: " + file.getAbsolutePath());
    }
}`;

  const eeCode = 
  `// Java EE example - Simple servlet
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, 
                         HttpServletResponse response) 
                         throws ServletException, IOException {
        response.getWriter().println("Hello from Java EE Servlet!");
    }
}`;

  const meCode = 
  `// Java ME example - Simple MIDlet
import javax.microedition.midlet.*;
import javax.microedition.lcdui.*;

public class HelloMIDlet extends MIDlet implements CommandListener {
    private Display display;
    private Form mainForm;
    private Command exitCommand;
    
    public HelloMIDlet() {
        display = Display.getDisplay(this);
        mainForm = new Form("Java ME Example");
        exitCommand = new Command("Exit", Command.EXIT, 1);
        
        mainForm.append("Hello, Java ME World!");
        mainForm.addCommand(exitCommand);
        mainForm.setCommandListener(this);
    }
    
    public void startApp() {
        display.setCurrent(mainForm);
    }
    
    public void pauseApp() { }
    
    public void destroyApp(boolean unconditional) { }
    
    public void commandAction(Command c, Displayable d) {
        if (c == exitCommand) {
            destroyApp(false);
            notifyDestroyed();
        }
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Java Editions
      </div>

      <h1 className="content-title">Java Editions</h1>
      <p className="last-updated">Last Updated: 05 May, 2025</p>

      <section className="content-section">
        <p>
          Java has evolved considerably since its initial release in 1995. To cater to different application domains and use cases, Java has been divided into several editions, each targeting specific development areas. These editions provide specialized libraries, APIs, and runtime environments optimized for their respective domains.
        </p>
        <p>
          Understanding the different Java editions is crucial for developers to choose the right platform for their specific application needs. Each edition comes with its own set of APIs, development tools, and deployment environments.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#java-editions-overview">Java Editions Overview</a></li>
          <li>
            <a href="#java-se">Java Standard Edition (Java SE)</a>
            <ul>
              <li>Features and Components</li>
              <li>Use Cases</li>
              <li>Example Code</li>
            </ul>
          </li>
          <li>
            <a href="#java-ee">Java Enterprise Edition (Java EE/Jakarta EE)</a>
            <ul>
              <li>Features and Components</li>
              <li>Use Cases</li>
              <li>Example Code</li>
            </ul>
          </li>
          <li>
            <a href="#java-me">Java Micro Edition (Java ME)</a>
            <ul>
              <li>Features and Components</li>
              <li>Use Cases</li>
              <li>Example Code</li>
            </ul>
          </li>
          <li><a href="#java-card">Java Card</a></li>
          <li><a href="#edition-comparison">Comparison of Java Editions</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </div>

      <section id="java-editions-overview">
        <h2>Java Editions Overview</h2>
        <p>
          Oracle, the current owner of Java, maintains several Java platforms, each tailored for different types of applications:
        </p>
        <ul>
          <li><strong>Java Standard Edition (Java SE):</strong> The core platform for desktop and server applications.</li>
          <li><strong>Java Enterprise Edition (Java EE/Jakarta EE):</strong> Built on top of Java SE, focused on large-scale, distributed, multi-tiered enterprise applications.</li>
          <li><strong>Java Micro Edition (Java ME):</strong> Targets embedded and mobile devices with limited resources.</li>
          <li><strong>Java Card:</strong> Enables Java-based applications to run securely on smart cards and similar small-memory devices.</li>
        </ul>
        <p>
          Each edition includes the Java Virtual Machine (JVM), which allows Java applications to run on any device or operating system with the appropriate JVM implementation, maintaining Java's "Write Once, Run Anywhere" philosophy across all editions.
        </p>
      </section>

      <section id="java-se">
        <h2>Java Standard Edition (Java SE)</h2>
        <p>
          Java SE serves as the foundation for all other Java platforms. It provides the core functionality for Java applications, including the essential libraries and APIs that define the basic Java platform.
        </p>

        <h3>Features and Components</h3>
        <p>
          Java SE includes:
        </p>
        <ul>
          <li><strong>Java Development Kit (JDK):</strong> Tools, executables, and binaries necessary for Java development, including the compiler (javac) and archiver (jar).</li>
          <li><strong>Java Runtime Environment (JRE):</strong> Everything needed to run Java applications, including the JVM and standard libraries.</li>
          <li><strong>Core APIs:</strong> Fundamental classes for I/O, networking, utilities, math functions, data structures, etc.</li>
          <li><strong>Java Language Specification:</strong> The formal definition of the Java programming language.</li>
          <li><strong>User Interface Libraries:</strong> AWT (Abstract Window Toolkit), Swing, and JavaFX for building graphical user interfaces.</li>
          <li><strong>Integration APIs:</strong> JDBC (for database connectivity), JNDI (Java Naming and Directory Interface), etc.</li>
        </ul>

        <h3>Use Cases</h3>
        <p>
          Java SE is ideal for:
        </p>
        <ul>
          <li>Desktop applications</li>
          <li>Command-line tools and utilities</li>
          <li>Scientific applications</li>
          <li>Gaming</li>
          <li>Small to medium server applications</li>
          <li>Development tools and IDEs</li>
        </ul>

        <h3>Example Code</h3>
        <p>
          Here's a simple Java SE application example that demonstrates basic file handling:
        </p>
        <CodeBlock initialCode={seCode} />
      </section>

      <section id="java-ee">
        <h2>Java Enterprise Edition (Java EE/Jakarta EE)</h2>
        <p>
          Java Enterprise Edition builds on the Java SE platform, adding libraries and APIs for developing and running large-scale, multi-tiered, scalable, reliable, and secure network applications. In 2017, Oracle transferred Java EE to the Eclipse Foundation, where it was renamed Jakarta EE.
        </p>

        <div className="note-box">
          <p>
            <strong>Name Change:</strong> Java EE was officially renamed to Jakarta EE in 2019 when it moved under the Eclipse Foundation's stewardship. The versions after Java EE 8 are now known as Jakarta EE 8, Jakarta EE 9, etc.
          </p>
        </div>

        <h3>Features and Components</h3>
        <p>
          Java EE/Jakarta EE includes:
        </p>
        <ul>
          <li><strong>Servlet API:</strong> For creating web applications using the request-response programming model.</li>
          <li><strong>JavaServer Pages (JSP) and JavaServer Faces (JSF):</strong> For building dynamic web pages and web applications.</li>
          <li><strong>Enterprise JavaBeans (EJB):</strong> A server-side component architecture for modular enterprise applications.</li>
          <li><strong>Java Persistence API (JPA):</strong> For managing relational data in Java applications.</li>
          <li><strong>Java Message Service (JMS):</strong> For sending messages between clients.</li>
          <li><strong>Java Transaction API (JTA):</strong> For managing distributed transactions.</li>
          <li><strong>Java API for RESTful Web Services (JAX-RS):</strong> For creating RESTful web services.</li>
          <li><strong>Contexts and Dependency Injection (CDI):</strong> For managing the lifecycle of components and services.</li>
          <li><strong>Java Authentication and Authorization Service (JAAS):</strong> For authentication and authorization.</li>
        </ul>

        <h3>Use Cases</h3>
        <p>
          Java EE/Jakarta EE is ideal for:
        </p>
        <ul>
          <li>Enterprise web applications</li>
          <li>Large-scale distributed systems</li>
          <li>E-commerce platforms</li>
          <li>Banking and financial systems</li>
          <li>Insurance applications</li>
          <li>Supply chain management</li>
          <li>Healthcare systems</li>
        </ul>

        <h3>Example Code</h3>
        <p>
          Here's a simple Java EE servlet example:
        </p>
        <CodeBlock initialCode={eeCode} />
      </section>

      <section id="java-me">
        <h2>Java Micro Edition (Java ME)</h2>
        <p>
          Java ME is designed for developing applications that run on resource-constrained devices like mobile phones, set-top boxes, IoT devices, and embedded systems. It provides a robust, flexible environment for applications running on these devices, with a focus on portability and security.
        </p>

        <h3>Features and Components</h3>
        <p>
          Java ME includes:
        </p>
        <ul>
          <li><strong>Connected Limited Device Configuration (CLDC):</strong> Defines the base set of APIs and virtual machine features for resource-constrained devices.</li>
          <li><strong>Connected Device Configuration (CDC):</strong> Targets devices with more resources than CLDC-targeted devices but fewer than desktop computers.</li>
          <li><strong>Mobile Information Device Profile (MIDP):</strong> Builds on CLDC to provide a Java runtime environment for mobile applications.</li>
          <li><strong>Optional Packages:</strong> Additional APIs for specific functionality like Bluetooth, location services, etc.</li>
          <li><strong>Security Model:</strong> Robust security model that limits application capabilities based on permissions.</li>
        </ul>

        <h3>Use Cases</h3>
        <p>
          Java ME is ideal for:
        </p>
        <ul>
          <li>Mobile applications (pre-Android/iOS era)</li>
          <li>Set-top boxes</li>
          <li>Smart cards</li>
          <li>IoT devices</li>
          <li>Embedded systems</li>
          <li>Automotive applications</li>
        </ul>

        <h3>Example Code</h3>
        <p>
          Here's a simple Java ME MIDlet example:
        </p>
        <CodeBlock initialCode={meCode} />
      </section>

      <section id="java-card">
        <h2>Java Card</h2>
        <p>
          Java Card is the smallest of the Java platforms. It allows Java-based applications (applets) to run securely on smart cards and similar small-memory devices. Java Card provides a secure environment for applications that run on smart cards with limited memory and processing capabilities.
        </p>

        <h3>Features and Components</h3>
        <p>
          Java Card includes:
        </p>
        <ul>
          <li><strong>Java Card Virtual Machine (JCVM):</strong> A highly optimized JVM for smart cards.</li>
          <li><strong>Java Card Runtime Environment (JCRE):</strong> Manages resources, applet execution, and security on the card.</li>
          <li><strong>Java Card API:</strong> A minimal subset of the Java API plus specific extensions for smart card functionality.</li>
          <li><strong>Applet Firewall:</strong> Ensures that applets can only access their own data and functionality.</li>
        </ul>

        <h3>Use Cases</h3>
        <p>
          Java Card is ideal for:
        </p>
        <ul>
          <li>Payment cards (credit/debit cards)</li>
          <li>SIM cards for mobile phones</li>
          <li>Identity cards and passports</li>
          <li>Healthcare cards</li>
          <li>Loyalty cards</li>
          <li>Access control cards</li>
        </ul>
      </section>

      <section id="edition-comparison">
        <h2>Comparison of Java Editions</h2>
        <p>
          Here's a comparison of the main Java editions:
        </p>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Java SE</th>
                <th>Java EE/Jakarta EE</th>
                <th>Java ME</th>
                <th>Java Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Target</td>
                <td>Desktop and server</td>
                <td>Enterprise applications</td>
                <td>Mobile and embedded</td>
                <td>Smart cards</td>
              </tr>
              <tr>
                <td>Resource Requirements</td>
                <td>Medium to High</td>
                <td>High</td>
                <td>Low</td>
                <td>Very Low</td>
              </tr>
              <tr>
                <td>API Size</td>
                <td>Large</td>
                <td>Very Large</td>
                <td>Small</td>
                <td>Minimal</td>
              </tr>
              <tr>
                <td>Development Complexity</td>
                <td>Medium</td>
                <td>High</td>
                <td>Medium</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Scalability</td>
                <td>Medium</td>
                <td>High</td>
                <td>Low</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Current Status</td>
                <td>Active Development</td>
                <td>Active (as Jakarta EE)</td>
                <td>Maintenance Mode</td>
                <td>Active in Niche</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          The different Java editions offer solutions for a wide range of computing environments, from resource-constrained IoT devices to large-scale enterprise systems. While Java SE serves as the foundation for all Java development, the specialized editions (Java EE/Jakarta EE, Java ME, and Java Card) extend this foundation to address specific application domains and requirements.
        </p>
        <p>
          As a developer, choosing the right Java edition depends on your application requirements, target devices, and deployment environment. Java's "Write Once, Run Anywhere" philosophy extends across these editions, allowing for code reuse and knowledge transfer between different Java platforms.
        </p>
        <p>
          With the evolution of technology, Java continues to adapt and remain relevant across its various editions. For instance, Jakarta EE (formerly Java EE) is being continuously modernized for cloud-native development, while Java SE regularly receives new features and improvements.
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

export default JavaEdition;