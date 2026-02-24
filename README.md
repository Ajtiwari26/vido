# Vidovermedia Website

A modern, high-performance marketing website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Server-side rendering for better search rankings
- **Contact Form** with API route
- **Fast Loading** - Optimized images and code splitting

## 📁 Project Structure

```
vidovermedia-website/
├── app/
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── contact/        # Contact page with form
│   ├── api/
│   │   └── contact/    # Contact form API endpoint
│   ├── layout.tsx      # Root layout with Header & Footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── public/             # Static assets
└── next.config.ts      # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd vidovermedia-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Pages

- **Home** (`/`) - Hero section, services overview, testimonials
- **About** (`/about`) - Company philosophy and team info
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and information

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To enable email notifications:

### Option 1: SendGrid (Recommended)

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Add your API key to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

3. Uncomment the SendGrid code in `app/api/contact/route.ts`

### Option 2: Resend

1. Install Resend:
```bash
npm install resend
```

2. Add your API key to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

3. Update the API route to use Resend

### Option 3: Nodemailer

1. Install Nodemailer:
```bash
npm install nodemailer
```

2. Configure SMTP settings in `.env.local`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- AWS Amplify
- Google Cloud Run
- DigitalOcean App Platform
- Railway
- Render

## 🎯 Performance Optimizations

- Server-side rendering for better SEO
- Automatic code splitting
- Image optimization with Next.js Image component
- Lazy loading of components
- Minimal JavaScript bundle size

## 🔧 Customization

### Update Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #6366f1;
  --secondary: #db2777;
  --tertiary: #16a34a;
}
```

### Update Content

- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Services: `app/services/page.tsx`
- Contact: `app/contact/page.tsx`

### Update Navigation

Edit `components/Header.tsx` to add/remove menu items

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Environment Variables

Create a `.env.local` file for sensitive data:

```
SENDGRID_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://vidovermedia.com
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support, email contact@vidovermedia.com

---

Built with ❤️ using Next.js
