# AI Agent for Interviews 🎯

An intelligent, AI-powered interview practice platform that helps users prepare for technical interviews through realistic voice-based conversations and instant feedback.

## 🌟 Features

- **Voice-Based Interviews**: Practice interviews using natural speech with AI-powered interviewers
- **Real-time Feedback**: Get instant, detailed feedback on your interview performance
- **Multiple Interview Types**: Support for various technical roles and interview formats
- **Tech Stack Specific**: Tailored questions based on your technology stack
- **User Authentication**: Secure login/signup with Firebase authentication with email as well as via Google.
- **Interview History**: Track your progress and review past interviews
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS and shadcn/ui

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/UI** - Pre-built slick and responsive components library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Backend & AI
- **Firebase** - Authentication, database, and hosting
- **Vapi AI** - Voice AI platform for interview conversations
- **Google AI SDK** - AI model integration
- **OpenAI** - AI-powered feedback generation

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast development builds

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Firebase** project setup
- **Vapi AI** account and API key
- **Google AI** API access

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/AI-Agent-For-Interviews.git
   cd AI-Agent-For-Interviews
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

   # Vapi AI Configuration
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

   # Google AI Configuration
   GOOGLE_AI_API_KEY=your_google_ai_api_key

   # Firebase Admin (for server-side operations)
   FIREBASE_ADMIN_PROJECT_ID=your_project_id
   FIREBASE_ADMIN_PRIVATE_KEY=your_private_key
   FIREBASE_ADMIN_CLIENT_EMAIL=your_client_email

   NEXT_PUBLIC_BASE_URL=public_url_of_application
   ```

4. **Firebase Setup**
   - Create a new Firebase project
   - Enable Authentication (Google sign-in)
   - Enable Firestore database
   - Download service account key for admin operations

5. **Vapi AI Setup and Creating Workflow**
   - Sign up at [Vapi AI](https://vapi.ai)
   - Get your web token
   - To Create a new workflow you can use the below command:
   ```curl
   curl -X POST https://api.vapi.ai/workflow \
  -H "Authorization: Bearer <YOUR_VAPI_API_KEY>" \
  -H "Content-Type: application/json" \
  --data-binary "@interviewgenerator.json"
  ```

   - You can obtain your api key from [vapi-dashboard](https://dashboard.vapi.ai)
   - Download the [interviewgenerator.json]() file which contains the exported workflow configuration
   - Verify your workflow creation after receiving a ```201 Created``` status code
   - You can copy the workflow id from the JSON response or from the [dashboard](https://dashboard.vapi.ai/workflows)
   - Paste your workflow id in the ```.env.local``` file.



## 🚀 Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📱 Usage

### Getting Started
1. **Sign Up/Login**: Create an account or sign in with Google
2. **Start Interview**: Click "Start an Interview" from the dashboard
3. **Choose Role**: Select your target role (Frontend, Backend, Full-stack, etc.)
4. **Choose experience level**: Select your experience level (Junior, Mid-level, Senior)
5. **Choose Tech Stack**: Mention your technologies and languages for your specific interview domain.
6. **Select Interview Types**: Choose your interview type (Technical, Behavioral, Mixed - Both)
4. **Voice Practice**: Engage in a natural conversation with the AI interviewer
5. **Get Feedback**: Receive instant, detailed feedback on your performance
6. **Track Progress**: Review your interview history and improvement areas

### Interview Types
- **Technical Interviews**: Role-specific technical questions
- **Behavioral Interviews**: Soft skills and experience-based questions
- **Mixed**: Architecture and design thinking questions

## 🏗️ Project Structure

```
AI-Agent-For-Interviews/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication routes
│   ├── (root)/                  # Main application routes
│   │   ├── interview/           # Interview functionality
│   │   └── page.tsx            # Home dashboard
│   └── api/                     # API routes
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   ├── Agent.tsx               # Main interview agent
│   ├── InterviewCard.tsx        # Interview display cards
│   └── AuthForm.tsx            # Authentication forms
├── lib/                         # Utility libraries
│   ├── actions/                 # Server actions
│   ├── utils.ts                 # Helper functions
│   └── vapi.sdk.ts             # Vapi AI integration
├── firebase/                    # Firebase configuration
├── types/                       # TypeScript type definitions
└── public/                      # Static assets
```

## 🔧 Configuration

### Customizing Interview Questions
Edit `constants/index.ts` to modify interview questions and prompts.

### Styling
The project uses Tailwind CSS with custom CSS variables. Modify `app/globals.css` for theme changes.

### AI Behavior
Adjust AI responses and interview flow in the Agent component and Vapi configuration.

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🙏 Acknowledgments

- [Vapi AI](https://vapi.ai) for voice AI capabilities
- [Firebase](https://firebase.google.com) for backend services
- [Next.js](https://nextjs.org) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com) for the beautiful UI

---

**Made with ❤️ by the AI Agent for Interviews Team**
