# Multi-Step Form with TanStack Form

This project is a **multi-step form application** built using the **Next.js 15 App Router** architecture. It utilizes **TanStack Form** for form state management and **Zod** for validation. The app is designed with a modern structure, prioritizing user experience and simplicity.

🔗 **Demo:** [https://multi-step-form-with-tanstack-form.vercel.app/](https://multi-step-form-with-tanstack-form.vercel.app/)

## 🚀 Features

- ✅ Modern and responsive design (mobile/tablet/desktop friendly)
- ✅ Multi-step form structure with TanStack Form
- ✅ Validation with Zod
- ✅ Field-level error messages shown below each input
- ✅ Server Actions with React
- ✅ Clean and modern UI powered by Tailwind CSS

## 🛠️ Technologies Used

- **Next.js 15**
- **TypeScript**
- **@tanstack/react-form v1.9.0**
- **Zod v3.24.3**
- **Tailwind CSS v4**

## 🧩 Installation

```bash
# Clone the repository
git clone https://github.com/talhaozbek61/multi-step-form-with-tanstack-form.git
cd multi-step-form-with-tanstack-form

# Install dependencies
bun install

# Create the .env file
cp .env.local

# Start the development server
bun dev
```

## ✅ Form Steps

1. **First, Second Step** – Collects initial user data
2. **Third Step** – Collects contact details
3. **Last Step** – Displays a summary of all entered data

## 🧪 How It Works

- Each form step is managed by its own component
- Form state is centrally managed via **TanStack Form**
- Validation is performed using **Zod schemas**
- Validation error messages are displayed directly under each corresponding input field
- Submitted data is handled by a server action defined in `app/actions.ts`
- A summary screen is displayed via the `last-step.tsx` component after successful submission

## 📌 Notes

- `@tanstack/react-form` is used in **v1.9.0**, and `zod` in **v3.24.3**

- An `.env` file is required (an example is provided as `.env.example`)
