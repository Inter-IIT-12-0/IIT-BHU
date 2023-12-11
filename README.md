# ![Trumio][trumio-img]

[trumio-img]:      https://trumio.ai/wp-content/uploads/2021/11/Horizontal_layout_350_x_75_pixels-removebg-preview.png

# Trumio Team 18

## Product Demonstration

# Web Application Setup Guide

## Requirements
1. `node` version 18
2. `npm` latest version

Follow these steps to set up the web application on your local machine:

## Step 1: Clone the Repository
Open your terminal and navigate to the directory where you want to clone the repository. Run the following command:

```bash
git clone https://github.com/trumio-interiit/team_18.git
```

## Step 2: Navigate to Project Folder
Change into the project directory:

```bash
cd team_18
```

## Step 3: Install Dependencies
Install all project dependencies using npm:

```bash
npm install
```

## Step 4: Configure Environment Variables
Create a .env.local file in the root of the project and add the necessary configuration. Example content:

```bash
MONGO_URI = "mongodb+srv://trumio:trumio@trumio.ulvhes0.mongodb.net/?retryWrites=true&w=majority"      
GOOGLE_ID = "862100342212-3ni3104l7sqtb2dgirrnt8282e5v5fr1.apps.googleusercontent.com"  
GOOGLE_SECRET = "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"  
NEXTAUTH_URL = "http://localhost:3000"  
NEXTAUTH_SECRET = "eigrshglrkagrgu4124356278584twyh25826y@4"  
NEXT_PUBLIC_OPENAI_API_KEY = "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"  
NEXT_PUBLIC_FLASK_APP_URL = "https://trumio.pythonanywhere.com"
```

## Step 5: Start the Development Server
Run the following command to start the web server:

```bash
npm run dev
```

## Step 6: Access the Application
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the web application.


# Flask Application Setup Guide

## Requirements
1. `python` version 3.11
2. Latest version of `pip`
   
Follow these steps to set up the Flask application on your local machine:

## Navigate to the Flask App directory:
```bash
cd './Flask App'
```

## Create a virtual environment:
```bash
python3 -m venv venv
```
or
```bash
python -m venv venv
```

## Activate the virtual environment:
```bash
.\venv\Scripts\activate
```

## Install required dependencies:
```bash
pip install -r requirements.txt
```

## Download the language model for spaCy:
```bash
python -m spacy download en_core_web_md
```

## Run the Flask server:
```bash
python app.py
```
or 
```bash
python3 app.py
```

- Note:
The Flask app is hosted on Python Anywhere at [https://trumio.pythonanywhere.com](https://trumio.pythonanywhere.com). If you prefer to use the local server, update the `NEXT_PUBLIC_FLASK_APP_URL` in the environment file to `http://127.0.0.1:5000` or as indicated in the terminal.

# Architecture Overview
Our project's architecture is a sophisticated blend of cutting-edge technologies meticulously orchestrated to deliver a seamless and innovative user experience.

## Frontend and Backend Integration: `Next.js`
Our project leverages Next.js to drive both the frontend and backend API. This choice ensures efficiency and speed by providing Automatic Code Splitting. Only the necessary code is sent to the client side, resulting in faster initial page loads.

## Database Management: `MongoDB`
As our database of choice, MongoDB follows the BASE (Basically Available, Soft State, and Eventual Consistency) model. This design choice facilitates easier horizontal scaling, upgradation, and a change-friendly structure. MongoDB's powerful querying capabilities complement our data needs.

## Styling and User Interface: `Tailwind CSS`
Tailwind CSS enhances our frontend, providing an elegant and visually stunning interface. Its utility-first approach makes it an excellent tool for crafting responsive and engaging user experiences.

## Recommendation Engine and NLP Processing: `Flask` and `spaCy`
Our Flask application hosts a powerful persona recommendation engine. Seamless integration with spaCy for Natural Language Processing (NLP) enhances user interactions. We've overcome limitations to create a solution that not only meets functional requirements but surpasses expectations.

## Bid Acceptance Probability Calculator: `Flask` and `spaCy`
Integrated into the Flask app, this feature calculates the chances of proposal acceptance when a bid is created. It adds an additional layer of functionality, providing valuable insights to users.

This architecture model ensures a robust, scalable, and user-centric solution. Each technology is chosen purposefully to contribute to the overall efficiency and performance of the system, resulting in an exceptional user experience.

# Integrated Services for Seamless User Experience
In the development of our platform, we've prioritized seamless user onboarding and dynamic content creation through the integration of key services.

## User Authentication: `OAuth`
OAuth for Google Login: We leverage OAuth for Google login authentication, providing a user-friendly onboarding experience. This accommodates talents with university IDs and clients with work IDs. The utilization of OAuth not only streamlines access but also verifies user affiliations, enhancing security and trust.

## Generative AI: `GPT-3.5`
GPT-3.5: Powering our generative features is the formidable GPT-3.5, a state-of-the-art generative AI. Its capabilities perfectly align with our time and resource constraints, enabling dynamic content creation. The integration of GPT-3.5 into our system is seamless, ensuring efficient access and utilization.  
Looking towards the enterprise level and anticipating future growth, our roadmap includes the development and training of proprietary AI models. This initiative aims to amplify the power of our AI usage, tailoring it to the unique demands of our enterprise-level operations.


This service-oriented architecture not only prioritizes the user experience but also emphasizes security and efficiency. The seamless integration of OAuth and GPT-3.5 contributes to a cohesive and reliable platform that meets the needs of both talents and clients.

# Innovative AI-Powered Features
Our platform is equipped with a suite of cutting-edge AI features designed to meet the diverse needs of our users.

## TruBot Assistance
Seamlessly integrated throughout the application, TruBot provides immediate support for users. Whether tackling project challenges or seeking answers to basic queries, TruBot offers real-time assistance. Currently, it excels in answering general, user, and project-related questions.

## Project-Specific Fine-Tuned Bots
Nestled within the My Projects section, these bots are tailored to assist users within specific projects. From generating bug reports to offering code snippets, Fine-Tuned Bots leverage the power of GPT-3.5 for enhanced capabilities, providing invaluable project support.

## Custom AI Tools
Empowering users in a specialized way, this feature allows the creation of personalized AI tools for specific domains. These tools are proficient in their chosen domains, offering comprehensive assistance tailored to user needs.

## Intelligent Recommendation Engine
Harnessing the capabilities of NLP, our recommendation engine responds to user queries by filtering through keywords provided by the Flask API. It ensures personalized and relevant suggestions based on user input.

## Bid Acceptance Probability Calculator
Using NLP and a sophisticated scoring algorithm, this feature calculates the probability of proposal acceptance. Factors considered include average historical scores, similarity between problem statements and proposals, team-user keyword matches, and quoted project amounts.

## PS Breakdown and SubMilestone Breakdown
- PS Breakdown: GPT-3.5 elaborates on client-provided problem statements, breaking them down based on client requirements.
- SubMilestone Breakdown: Leveraging GPT-3.5, this feature dissects project milestones into submilestones, enhancing project assessment and health evaluation.

These features collectively represent our commitment to providing an innovative and intelligent platform that goes beyond conventional solutions, ensuring a user experience that is both advanced and user-friendly.

# Explore Our Dynamic Pages
Our platform offers a diverse range of pages, each tailored to enhance the user experience and cater to specific needs.

## Marketplace
The Marketplace is accessible to both clients and students. Students can browse through listed projects and place bids, while clients have the additional capability to create new projects.

## My Projects
Within "My Projects," users gain detailed insights into their projects. Navigating to specific project pages ("/myprojects/[id]"), users find Fine-Tuned Bots for assistance and Generative Tools for various subdomains. Key project information, including milestones, timelines, team details, and project health, is readily available.

## People
The People page serves as a comprehensive directory listing all students, clients, and universities. Our recommendation system intelligently suggests the best talents and clients, enhancing user connections.

## Profile
The Profile page provides an all-encompassing view of the user. From projects and educational details to company information, skills, and achievements, users can showcase their professional journey.

## Dashboard
The Dashboard page delivers personalized insights, including financial details, project status, meeting schedules, available workdays, and other relevant information.

## ToolsTable
The Tools Table page empowers users to create custom Fine-Tuned Bots tailored to specific contexts. These tools can be accessed within the project workspace, enhancing efficiency.

## Mentorship, Challenges, and Courses - Upskilling
Designed for user upskilling, these pages leverage our recommendation engine to provide personalized mentorship, challenges, and courses aligned closely with user needs.

## AI Arcade
The AI Arcade adopts AI-generated guided learning, adapting to user performance and individual needs. This innovative approach ensures a dynamic and tailored learning experience.

These pages collectively contribute to an immersive and personalized platform, empowering users with tools and insights to thrive in their respective domains.

The Web App itself has been deployed [here](https://trumio-interiit12.vercel.app/).
