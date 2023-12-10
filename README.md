This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
# NEXT JS Project
## Setting Up the project
### Reuirements
- Node version 18
- npm latest version
  
open your git termianl or powershell terminal and

- Run the command ` git clone https://github.com/Inter-IIT-12-0/Chutki.git `. This will clone the repository to your local device.
- Then run `cd Chutki`, this command will take you to the root directory.
- Then create a `.env.local` file in the root directory, It will look like this
- Then run `npm i`, this command will install all packages required for the project to run.
- At last run the development server via below commands.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Then if you havent logged in then go to the “/onboarding” page to enter the platform and enter the platform’s work flow

##Flask Application 
###Requirements
- Python 3.11
- Pip latest version

Steps:
- Go into the dir Flask App, ```cd /Flask App```
- Make a virtual env using ```python3 -m venv venv```
- Activate the environment, ```.\venv\Scripts\activate```
- Run ```pip install -r requirements.txt```
- Download the language model for spAcy using, ```python -m spacy download en_core_web_md```
- Run the server using ```python app.py```

The flask app has been hosted on Python Anywhere at trumio.pythonanywhere.com, if you wish to use the local server, change NEXT_PUBLIC_FLAS_APP_URL in env file to ```http://127.0.0.1:5000``` or as shown on the terminal.

## .env

`MONGO_URI = mongodb+srv://trumio:trumio@cluster0.dv3akgs.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET= TrumioDevSecretKey@IITBhu
GOOGLE_ID = "862100342212-3ni3104l7sqtb2dgirrnt8282e5v5fr1.apps.googleusercontent.com"
GOOGLE_SECRET = "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"
NEXTAUTH_URL = "http://localhost:3000"
NEXTAUTH_SECRET = "eigrshglrkagrgu4124356278584twyh25826y@4"
NEXT_PUBLIC_OPENAI_API_KEY = "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"
NEXT_PUBLIC_APP_ID = "2482553359a7170e"
NEXT_PUBLIC_REGION = "in"
NEXT_PUBLIC_AUTH_KEY = "059961b8995383b03cbdde3bf27ce5edbd9a47f0"
NEXT_PUBLIC_API_KEY = "a3747a057e097e01bb19782e8a74da946ae4aa49"
NEXT_PUBLIC_SITE_URL = "http://localhost:3000`

## Tech stack 

Our project's tech stack is a powerful symphony of cutting-edge technologies designed to deliver a seamless and innovative user experience.

- `Next.js`
  With Next.js driving both our frontend and backend API, we ensure efficiency and speed as Next.js provides automatic code splitting, meaning that only the necessary code is sent to the client, resulting in faster initial page loads.
  
- `MongoDB`
  MongoDB Cluster, our database choice, provides scalability and its flexible schema allows for easy addition of new fields and changes to the data structure while being cost-effective.
  
- `Tailwind`
  Tailwind CSS lends elegance to our frontend, ensuring a visually stunning interface and it’s a great tool for making responsive frontends.
  
- `Flask`
  The persona recommendation engine, powered by spaCy for NLP, operates seamlessly through Flask, enriching user interactions. We've navigated limitations to craft a solution that's not just functional but truly exceptional.

## Services

In crafting our platform, we've prioritized seamless user onboarding and dynamic content creation. 

- `OAuth`
  Leveraging OAuth for Google login authentication, we ensure a user-friendly experience, effortlessly accommodating talents with university IDs and clients with work IDs. This not only streamlines access but also verifies user affiliations.
  
- `Gpt 3.5`
   For our generative features, we turned to the powerful GPT-3.5, a generative AI that perfectly aligns with our time and resource constraints. Both OAuth and GPT-3.5 are seamlessly integrated into our system, accessed securely as environment variables specified in our .env.local file. This ensures a robust, secure, and efficient foundation for our platform.

## Features

To make our platform compatible with today’s needs and satisfy all users' needs we have created several AI features.

- `TruBot`
  TruBot is available throughout the application, providing general support for users. It assists when users encounter difficulties or have queries, such as when working on a project and needing answers to basic questions. In such instances, users can obtain immediate assistance, currently It answers general , user and project queries.
  
- `Fine Tuned Bots`
  Fine-Tuned Bots, available in the My Projects section within a specific project, are designed to assist users with their projects. For example, in a development-related project, users can generate bug reports, code snippets, and receive various forms of support from this bot, which utilizes GPT-3.5 for enhanced capabilities.
  
- `Custom AI tool`
  The "Custom AI Tools" section is a specialized feature that we provide in our app. This feature enables users to create their own AI tool for a particular domain. This AI tool will be fully proficient in the chosen domain and will provide all types of assistance in that domain.
  
- `Recommendation Engine`
  The recommendation Engine built on the top of NLP takes the user input and then responds to the query by filtering the users by the keywords given by the Flask API
  
- `PS Breakdown`
  With the help of GPT-3.5 the problem statement provided by the client is being elaborated wrt to the client requirements.
- `SubMilestone Breakdown`
  Depending on the Milestones being submitted in the Proposal Form GPT 3.5 breaks down the Milestone into submilestones to better assess the projects completion and its health.

## Pages

- `Marketplace`
  Marketplace is accessed both from the client side as well as the student side.
  ->From the student's perspective, they can view all the projects that have been listed and place bids on them.
  ->From the Client side, the client can additionally create projects.
- `My Projects`
  In "My Projects," users can view and navigate to the "/myprojects/[id]" page to explore more about their projects. This is the place where the Fine-Tuned Bot is present to assist users and the Generative tool for various subdomains is also present there. On this page, users can access information such as milestones, milestone timelines, team details, project health, and other important aspects related to the project.
- `People`
  In the people page all the students, clients and universities are listed so users can explore all the people. Here our recommendation system recommends the best talent and client to the users.
- `Profile`
   In the profile page everything about the user is mentioned like their projects, educational details, company details, skills, their achievements and many more.
- `Dashboard`
  In the Dashboard page users can see their finances, project status, meetings, available days of work and other details.
- `ToolsTable`
  The Tools Table page has the feature to create custom fine tuned bots wrt to the context the user wants and then these tools can be accessed by the user in the project workspace
- `Mentorship,Challenges and Courses`
  The Mentorship,Challenges and Courses are for the upskilling of the user where the recommendation engine is being implemented to provide the upskilling as close as to the user’s need
- AI Arcade is based on the AI generate Guided learning which moulds itself to the user’s performance and its need
  
  
  
  





## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## For API's documentation

`npx nextjs-routes-docs src`
This will update the documentation in the `route.yaml` file in the project directory
