# Subhanjan Baral - Portfolio Website

A modern, interactive portfolio website built with Next.js, React Three Fiber, and Tailwind CSS.

## Live Website

[Visit the Portfolio](https://subhanjan07.github.io/Subhanjan-Baral/)

## Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Subhanjan07/Subhanjan-Baral.git
   cd Subhanjan-Baral
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

   The page will automatically reload when you make changes to the code.

## Available Scripts

- `npm run dev` - Start the development server (runs on port 3000)
- `npm run build` - Build the production version
- `npm run lint` - Run ESLint to check for code issues
- `npm run build:gh-pages` - Build with GitHub Pages base path
- `npm run deploy` - Build and deploy to GitHub Pages

## Environment Variables

To enable the contact form (Google Sheets integration), create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

### Google Apps Script setup

1. Create a Google Sheet with headers: `Timestamp | Name | Email | Message`
2. Go to **Extensions → Apps Script** and add a `doPost` handler that appends form data to the sheet
3. Deploy as **Web app** with **Execute as: Me** and **Who has access: Anyone**
4. Copy the deployment URL (ends in `/exec`) into `.env.local`
5. Restart the dev server after changing env vars

**Note:** Without the script URL, the contact form falls back to opening the user's default email client.

## Tech Stack

- **Next.js 14** - React framework
- **React Three Fiber** - 3D graphics
- **Tailwind CSS** - Styling
- **Google Apps Script** - Contact form submissions to Google Sheets
- **React Hook Form** - Form handling
- **Sonner** - Toast notifications

## Features

- Interactive 3D models using Three.js
- Animated navigation menu
- Projects showcase
- Responsive design
- Contact form with Google Sheets storage

## Project Structure

```
Subhanjan-Baral/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.js       # Home page
│   │   ├── layout.js     # Root layout
│   │   ├── data.js       # Portfolio data
│   │   └── subPages/     # About, Projects, Contact pages
│   └── components/       # React components
│       ├── About/        # About section
│       ├── contacts/     # Contact form
│       ├── models/       # 3D models
│       ├── navigation/   # Navigation menu
│       └── projects/     # Projects display
├── public/               # Static assets
└── package.json          # Dependencies
```

## Deployment

This site is deployed on GitHub Pages using static export from Next.js.
To deploy updates:

```bash
npm run deploy
```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, Next.js will automatically try the next available port (3001, 3002, etc.). Check the terminal output for the actual port.

### Module Not Found Errors
Run `npm install` again to ensure all dependencies are installed.

### Build Errors
Make sure you're using Node.js version 18 or higher. Check your version with:
```bash
node --version
```

## Contact

Use the contact form on the website to get in touch, or connect via [LinkedIn](https://www.linkedin.com/in/subhanjan-baral-15852525a/) or [GitHub](https://github.com/Subhanjan07).

## License

This is a personal portfolio project.

---

Feel free to fork, star, or contribute!
