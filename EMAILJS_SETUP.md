# EmailJS Setup Guide

The contact form uses EmailJS to send emails directly from the website. Follow these steps to configure it:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{to_name}}` - Recipient name (Subhanjan Baral)
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email (for reply-to)
   - `{{message}}` - The message content
4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (or create one if needed)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (same level as `package.json`)
2. Add the following variables:

```env
NEXT_PUBLIC_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Fallback Behavior

If EmailJS is not configured, the contact form will automatically fall back to opening the user's default email client with a pre-filled message. You can update the email address in `src/components/contacts/Form.jsx` (line 68) if needed.

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. Verify that the form resets after successful submission

## Troubleshooting

- **Form not sending**: Check that all environment variables are set correctly
- **"Email service not configured" message**: Make sure your `.env.local` file exists and has all three variables
- **Environment variables not loading**: Restart your development server after adding/changing `.env.local`

