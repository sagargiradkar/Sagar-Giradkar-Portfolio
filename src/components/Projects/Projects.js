import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import images directly
import smile_computer from "../../Assets/Projects/project0.png";
import razorpay from "../../Assets/Projects/project1.png";
import poshinda from "../../Assets/Projects/project2.png";
import hotstar from "../../Assets/Projects/project3.png";
import fresh_food_delivery from "../../Assets/Projects/Project4.png";
import grocery_website from "../../Assets/Projects/Project5.png";
import linkedin_website_clone from "../../Assets/Projects/Project6.png";
import netflix_website_clone from "../../Assets/Projects/Project7.png";
import facebook_website_clone from "../../Assets/Projects/Project8.png";
import youtube_replica from "../../Assets/Projects/Project9.png";
import parallax_website from "../../Assets/Projects/Project10.png";
import temperature_converter from "../../Assets/Projects/Project11.png";
import analog_clock from "../../Assets/Projects/Project12.png";
import discord_clone from "../../Assets/Projects/Project13.png";
import simple_calculator from "../../Assets/Projects/Project14.png";
import to_do_list from "../../Assets/Projects/Project15.png";
import password_generator from "../../Assets/Projects/Project16.png";
import amazon_website_clone from "../../Assets/Projects/Project17.png";
import filiApp from "../../Assets/Projects/fili.jpg"
import realList from "../../Assets/Projects/realList.png"
import acmwebsite from "../../Assets/Projects/acm.png"
import virtualLab from "../../Assets/Projects/virtualLab.png"
import studyNotion from "../../Assets/Projects/studyNotion.png"
import agriVision from "../../Assets/Projects/agriVision.png"
import roboticSystem from "../../Assets/Projects/roboticSystem.png"
// JSON-like data with image imports
const projects = [
  {
    "imgPath": roboticSystem,
    "title": "Integrated Robotic System for Smart Material Handling",
    "description": "Developed an automated material handling system using the MK2 robotic arm, computer vision, and deep learning. Achieved 95% defect detection accuracy and reduced processing time by 40% through real-time object detection.",
    "ghLink": "https://fabric-defect-detection-dashboard.vercel.app/",
    "demoLink": "https://photos.app.goo.gl/eR5nmEShDgLJshwUA"
  }
  ,
  {
    "imgPath": smile_computer,
    "title": "Smile Computer Web And Android App",
    "description": "A website designed for Smile Computer, showcasing their services, products, and customer support. Built using React, it provides a user-friendly interface and interactive features for customers to explore the offerings of Smile Computer.",
    "ghLink": "",
    "demoLink": "https://smile-computer-client.vercel.app/"
  },
  {
    "imgPath": virtualLab,
    "title": "Virtual Lab Digitizer Forum",
    "description": "Virtual Labs Digitizer Forum is an initiative by the Ministry of Education (MoE), Government of India, under NMEICT. Coordinated by IIT Delhi, it enables remote experimentation through 100+ virtual labs and 700+ web-enabled experiments. It represents a major leap in ICT-based education.",
    "ghLink": "https://github.com/vlabpvg/vlab-client-app",
    "demoLink": "https://vlab-client-app.vercel.app/"
  }
  ,
  {
    "imgPath": realList,
    "title": "RealList.ai",
    "description": "Real Estate projects made transparent and profitable. Join our real estate community to collaborate and network with developers, investors, and professionals. Build valuable connections and stay ahead in the real estate market with RealList.",
    "ghLink": "",
    "demoLink": "https://reallist.ai/about"
  },
  {
    "imgPath": filiApp,
    "title": "Fili: Financial Literacy",
    "description": "Master personal finance with AI-powered micro-learning. In just 5-10 minutes daily, learn about budgeting, investing, taxes, retirement planning, insurance, and more. Gain the tools to make informeddecisions, build wealth, and achieve financial independence.",
    "ghLink": "",
    "demoLink": "https://play.google.com/store/apps/details?id=com.aetlpl.fili&hl=en_IN"
  },
  {
    "imgPath": acmwebsite,
    "title": "PVGCOET ACM Student Chapter",
    "description": "ACM is the world's largest educational and scientific computing society, aimed at increasing the level and visibility of ACM activities across the globe. ACM is a society of dedicated professionals, academicians, and research scientists, who contribute towards the growth of technological innovations. The purpose of Society is to inculcate computational thinking aiding in career development and a lifelong learning experience.",
    "ghLink": "https://pvgcoet.acm.org/",
    "demoLink": "https://pvgcoet.acm.org/"
  },
  {
    "imgPath": agriVision,
    "title": "AgriVision Crop Cultivation App",
    "description": "Built a mobile app with REST APIs for agricultural trading, weather data integration, and real-time market insights. Delivered actionable crop cultivation lessons, increasing farmer yields by 30% through structured learning modules.",
    "ghLink": "https://github.com/sagargiradkar/AgriVision",
    "demoLink": "https://github.com/sagargiradkar/AgriVision"
  }
  ,
  {
    "imgPath": studyNotion,
    "title": "Study Notion",
    "description": "Developed a responsive e-learning platform using React.js and Node.js for seamless course access. Integrated course management, payment gateways, and feedback systems, achieving 85% course completion rates and 50% user growth.",
    "ghLink": "https://github.com/44210161/smile-computer-client",
    "demoLink": "https://smile-computer-client-lovat.vercel.app/"
  }
  ,

  {
    "imgPath": poshinda,
    "title": "Shopping Cart App",
    "description": "A fully functional shopping cart app built with React, Redux, and Tailwind CSS. Users can browse, add products to the cart, and proceed to checkout. Redux ensures predictable state management, offering a seamless user experience.",
    "ghLink": "https://github.com/sagargiradkar/shopping-cart",
    "demoLink": "https://shopping-cart-tan-delta.vercel.app/"
  },

  {
    "imgPath": fresh_food_delivery,
    "title": "Fresh Food Delivery",
    "description": "An online food ordering platform that lets users browse and order food for delivery or pickup. The website features a smooth UI for food selection and checkout, designed with a focus on customer experience and seamless ordering.",
    "ghLink": "https://github.com/sagargiradkar/FoodShopProject-master",
    "demoLink": "https://sagargiradkar.github.io/FoodShopProject-master/"
  },
  {
    "imgPath": grocery_website,
    "title": "Grocery Website",
    "description": "A virtual grocery marketplace that enables users to browse, select, and purchase various grocery products online. The website offers easy navigation and product management, providing a user-friendly experience for grocery shopping.",
    "ghLink": "https://github.com/sagargiradkar/Grocery_Website",
    "demoLink": "https://sagargiradkar.github.io/Grocery_Website/"
  },
  {
    "imgPath": razorpay,
    "title": "Razorpay UI Clone Website",
    "description": "A payment gateway clone built using modern web technologies, replicating the user interface and functionality of Razorpay. It allows businesses to accept, process, and disburse payments, aiming to showcase expertise in payment solutions and web development.",
    "ghLink": "https://github.com/sagargiradkar/Razorpay-Clone",
    "demoLink": "https://razorpayclonesagar.netlify.app/"
  },
  {
    "imgPath": discord_clone,
    "title": "Discord UI Clone",
    "description": "A simplified version of the popular communication platform Discord, created with HTML, Tailwind CSS, and JavaScript. This project replicates basic interface and functionality, offering a learning experience for building chat and communication applications.",
    "ghLink": "https://github.com/sagargiradkar/Discord-Your-Place-to-Talk-and-Hang-Out",
    "demoLink": "https://sagar-giradkar-discord-clone.netlify.app/"
  },
  {
    "imgPath": hotstar,
    "title": "Hotstar UI Website Clone",
    "description": "A clone of the Disney+ Hotstar streaming service website, designed to replicate the interface and video streaming capabilities of the platform. This project demonstrates web development skills, focusing on media content presentation and user interface design.",
    "ghLink": "https://github.com/sagargiradkar/Disney-Hostar-website",
    "demoLink": ""
  },

  {
    "imgPath": linkedin_website_clone,
    "title": "LinkedIn UI Website Clone",
    "description": "A front-end project that replicates the design and layout of LinkedIn. The clone focuses on the user interface, showcasing proficiency in HTML, CSS, and JavaScript while mimicking a professional social network's look and feel.",
    "ghLink": "https://github.com/sagargiradkar/Linkdin-Website",
    "demoLink": "https://sagargiradkar.github.io/Linkdin-Website//"
  },
  {
    "imgPath": netflix_website_clone,
    "title": "Netflix UI Website Clone",
    "description": "A clone of the popular Netflix streaming platform, featuring a visually appealing and functional interface. Users can explore different movies and TV shows, and the project serves as a showcase for mastering dynamic content display and streaming service elements.",
    "ghLink": "https://github.com/sagargiradkar/Netflix",
    "demoLink": "https://sagargiradkar.github.io/Netflix/"
  },
  {
    "imgPath": facebook_website_clone,
    "title": "Facebook UI Website Clone",
    "description": "This project recreates Facebook's interface, allowing users to connect and share with friends. Aimed at showcasing HTML, CSS, and JavaScript skills, the clone mimics a popular social networking site's features and layout.",
    "ghLink": "https://github.com/sagargiradkar/Facebook-Clone-Website",
    "demoLink": "https://sagargiradkar.github.io/Facebook-Clone-Website/"
  },
  {
    "imgPath": youtube_replica,
    "title": "YouTube UI Website Clone",
    "description": "A replica of YouTube, a free video-sharing platform that lets users watch and upload videos. This project focuses on recreating the interface and functionality of a popular media platform, demonstrating skills in video content presentation and user interaction.",
    "ghLink": "https://github.com/sagargiradkar/Youtube_Website",
    "demoLink": "https://sagargiradkar.github.io/Youtube_Website/"
  },

  {
    "imgPath": parallax_website,
    "title": "Parallax Website",
    "description": "Parallax scrolling creates a dynamic website experience, where background and foreground elements move at different speeds. This project demonstrates creative use of HTML, CSS, and JavaScript for creating visually engaging, smooth scrolling effects.",
    "ghLink": "https://github.com/sagargiradkar/ParallaxWebsite",
    "demoLink": "https://sagargiradkar.github.io/ParallaxWebsite/"
  },
  {
    "imgPath": temperature_converter,
    "title": "Temperature Converter",
    "description": "A temperature converter web app that allows users to convert temperatures between Fahrenheit and Celsius. Designed with simplicity, this project provides an easy tool for unit conversion and introduces users to the basics of web development.",
    "ghLink": "https://github.com/sagargiradkar/Temperature-Convertor",
    "demoLink": "https://sagargiradkar.github.io/Temperature-Convertor/"
  },


  {
    "imgPath": simple_calculator,
    "title": "Simple Calculator",
    "description": "A basic calculator built using HTML, CSS, and JavaScript that allows users to perform arithmetic operations such as addition, subtraction, multiplication, and division. The project showcases essential web development skills and interactivity.",
    "ghLink": "https://github.com/sagargiradkar/Calculator/tree/main",
    "demoLink": "https://sagargiradkar.github.io/Calculator/"
  },
  {
    "imgPath": to_do_list,
    "title": "To-Do List",
    "description": "A simple To-Do List application allowing users to add, update, and delete tasks. Built with HTML, CSS, and JavaScript, it demonstrates effective use of DOM manipulation and task management features.",
    "ghLink": "https://github.com/sagargiradkar/To-Do-List",
    "demoLink": "https://sagargiradkar.github.io/To-Do-List/"
  },
  {
    "imgPath": password_generator,
    "title": "Password Generator",
    "description": "A password generator that creates strong, secure passwords, implemented using HTML, CSS, and JavaScript. The application provides users with randomly generated passwords, focusing on security features and web development.",
    "ghLink": "https://github.com/sagargiradkar/Password-Generator",
    "demoLink": "https://sagargiradkar.github.io/Password-Generator/"
  },
  {
    "imgPath": analog_clock,
    "title": "Analog Clock",
    "description": "A digital representation of a traditional analog clock, built using HTML, CSS, and JavaScript. The project mimics an analog clock's hands and time display, providing a practical example of time manipulation in web development.",
    "ghLink": "https://github.com/sagargiradkar/Analog-Clock/tree/main",
    "demoLink": "https://sagargiradkar.github.io/Analog-Clock/"
  },
];


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
