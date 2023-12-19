<p align="center">
  <img src="https://trumio.ai/wp-content/uploads/2021/11/Horizontal_layout_350_x_75_pixels-removebg-preview.png" alt="Trumio">
</p>

<h1 align="center">
Trumio Team 18
</h1>

This is the repository of the Web App. The landing page has be deployed at this [link](https://trumio-team18.webflow.io). The "Get Started" CTA is a gateway to this Web App. This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
Create a .env.local file in the root of the project and add the necessary configuration:

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

## Code Structure of the Web application:
<img src="./static/next.png" />


## Note:
The Flask app is hosted on Python Anywhere at [https://trumio.pythonanywhere.com](https://trumio.pythonanywhere.com) and by now, the web app should be functional. If you prefer to use the local Flask server, update the `NEXT_PUBLIC_FLASK_APP_URL` in the environment file to `http://127.0.0.1:5000` or as indicated in the terminal and follow the below guideline to setup the server:
# Flask Application Setup Guide 

## Requirements
1. `python` or `python3` version 3.11
2. Latest version of `pip` or `pip3`
   
Follow these steps to set up the Flask application on your local machine:

## Navigate to the Flask App directory:
```bash
cd './Flask App'
```

## Create a virtual environment:
```bash
python -m venv venv
```
or
```bash
python3 -m venv venv
```

## Activate the virtual environment:
```bash
.\venv\Scripts\activate
```

## Install required dependencies:
```bash
pip install -r requirements.txt
```
or 
```bash
pip3 install -r requirements.txt
```

## Download the language model for spaCy:
```bash
python -m spacy download en_core_web_md
```
or 
```bash
python3 -m spacy download en_core_web_md
```

## Run the Flask server:
```bash
python app.py
```
or 
```bash
python3 app.py
```

## Code Structure of the Flask application:
The `Flask App` contains 2 files, `app.py` and `utils.py`, and has 2 API endpoints `/predict` and `/recommend`. 

<div align="center">
<img src="./static/flask.jpg" style="width:50%;" />
</div> 
<br/>

- The `app.py` file is the main entry point for the Flask application. It contains the configuration, initialization, and routing information of the Flask app.  
- The `utils.py` file contains utility functions or helper functions that are used throughout the application.

# Innovative AI-Powered Features
Our platform is equipped with a suite of cutting-edge AI features designed to meet the diverse needs of our users.

## Intelligent Recommendation Engine
Harnessing the capabilities of NLP, our recommendation engine responds to user queries by filtering through keywords provided by the Flask API. It ensures personalized and relevant suggestions based on user input.

## TruBot Assistance
Seamlessly integrated throughout the application, TruBot provides immediate support for users. Whether tackling project challenges or seeking answers to basic queries, TruBot offers real-time assistance. Currently, it excels in answering general, user, and project-related questions.

<div align="center" >
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTdkY2JvdXEyMTZnc2x5dzlwY2l5eTU1aDdiMGc5Z2F4czY3YjI1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Uq0yJotc6U4AG9cHGq/giphy.gif" style="width:70%;" />
</div>

## Project-Specific Fine-Tuned Bots
Within the My Projects section, these bots assist the users within specific projects. From generating bug reports to offering code snippets, Fine-Tuned Bots leverage the power of GPT-3.5 for enhanced capabilities, providing best project support.

<div align="center" >
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2tlbTV4Y2oxdTk2NjB2enJ5M3l5bGowczF4aGo2ZjF3b2dscW9vOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ACmqc2wmiYc3nCup54/giphy.gif" style="height:500px;" />
</div>

## Custom AI Tools
Empowering users in a specialized way, this feature allows the creation of personalized AI tools for specific domains. These tools are proficient in their chosen domains, offering comprehensive assistance customized to user needs.

<div align="center" >
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExempja29vZnI3bWQyZzVzMHNpYXpuZWJ4Njd3MmxwdXFqdDk0dXhiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yDqsDd943fXPYqLl8x/giphy.gif" style="height:500px;"/>
</div>

## Bid Acceptance Probability Calculator
Using NLP and a sophisticated scoring algorithm, this feature calculates the probability of proposal acceptance. Factors considered include average historical scores, similarity between problem statement and team proposals, team users' keyword matches, and quoted project amounts.

<div align="center" >
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTAxdjg4b2xmeGl1OG9rd2psbW9seWtzaWp6ZnZ2bnE3NjA1Z2N0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qDDFEVtcGezoQ6Vu6h/giphy.gif" style="height:500px;"/>
</div>

## PS Breakdown and SubMilestone Breakdown
- PS Breakdown: GPT-3.5 elaborates on client-provided problem statements, breaking them down based on client requirements.
- SubMilestone Breakdown: Leveraging GPT-3.5, this feature dissects project milestones into submilestones, enhancing project assessment and health evaluation.

<div align="center" >
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjE5MXBxZnd4bnhoNWNjdjh5OWhvcGRocHZjMGZia2x3dWhtb29qZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UG2MTXeCzKL2IGJdSy/giphy.gif" style="height:500px;"/>
</div>

These features collectively represent our commitment to providing an innovative and intelligent platform that goes beyond conventional solutions, ensuring a user experience that is both advanced and user-friendly.

# Architecture Overview
Our project's architecture is a sophisticated blend of cutting-edge technologies to deliver a seamless and innovative user experience.

## Frontend and Backend Integration: `Next.js`
Our project leverages Next.js to drive both the frontend and backend API. This choice ensures efficiency and speed by providing Automatic Code Splitting. Only the necessary code is sent to the client side, resulting in faster initial page loads.

## Database Management: `MongoDB`
Our database choice, MongoDB follows the BASE (Basically Available, Soft State, and Eventual Consistency) model. This design choice facilitates easier horizontal scaling, upgradation, and a change-friendly structure. MongoDB's powerful querying capabilities complement our data needs.

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
