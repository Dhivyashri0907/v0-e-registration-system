# eLand Register - Digital Property Registration Platform

A comprehensive, user-friendly property registration system built with Next.js, React, and modern web technologies. This frontend application provides a complete 10-step registration flow for seamless property documentation and digital deed generation.

## Overview

eLand Register is an Indian property registration platform that simplifies the property registration process through digital innovation. The system supports:

- User authentication (Login, Sign-up, OTP Verification)
- 10-step registration workflow
- Document upload and verification
- Digital signature collection
- Payment processing
- Success confirmation with receipt generation

## Technology Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS 4
- **UI Components:** Shadcn/ui
- **State Management:** React Context API
- **Form Handling:** Client-side React hooks
- **Icons:** Lucide React
- **Database Ready:** Frontend prepared for backend integration

## Project Structure

```
eLand Register/
├── app/
│   ├── layout.tsx                 # Root layout with RegistrationProvider
│   ├── page.tsx                   # Landing page
│   ├── globals.css                # Global styles with theme tokens
│   ├── context/
│   │   └── RegistrationContext.tsx # Form state management
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── otp/page.tsx
│   ├── registration/
│   │   ├── step1/page.tsx         # Bank Details
│   │   ├── step2/page.tsx         # Personal Information
│   │   ├── step3/page.tsx         # ID Verification
│   │   ├── step4/page.tsx         # Property Details
│   │   ├── step5/page.tsx         # Party Details
│   │   ├── step6/page.tsx         # Document Details
│   │   ├── step7/page.tsx         # Witness Details
│   │   ├── step8/page.tsx         # Digital Signatures
│   │   ├── step9/page.tsx         # Payment & Submission
│   │   └── success/page.tsx       # Confirmation
│   ├── features/page.tsx          # Features page
│   ├── blog/page.tsx              # Blog & resources
│   └── contact/page.tsx           # Contact page
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── Footer.tsx                 # Footer component
│   └── ui/                        # Shadcn UI components
├── public/                        # Static assets
└── package.json                   # Dependencies
```

## Key Features

### Landing & Marketing Pages
- Professional landing page with hero section
- Features showcase with 10+ capabilities
- How it works flowchart
- FAQ section
- Blog and resources center
- Contact page with support information

### Authentication System
- **Login Page:** Phone number and password-based login
- **Sign-up Page:** New user registration with password validation
- **OTP Verification:** Time-based OTP with resend functionality

### 10-Step Registration Flow

1. **Bank Details** - Account information and bank details
2. **Personal Information** - User profile and contact details
3. **ID Verification** - Document upload (PAN, Aadhaar, etc.)
4. **Property Details** - Property specifications and location
5. **Party Details** - Buyer and seller information
6. **Document Details** - Document type and fee calculation
7. **Witness Details** - Witness information and contact
8. **Digital Signatures** - Canvas-based signature capture
9. **Payment & Submission** - Final review and payment confirmation
10. **Success** - Application confirmation and receipt

### State Management
- React Context API for form data persistence across steps
- Progress tracking with visual progress bar
- Form validation at each step
- Error handling and user feedback

## Color System

Professional government-themed color palette:
- **Primary:** Deep Navy Blue (#1e40af / oklch(0.34 0.19 262))
- **Secondary:** Light Gray (oklch(0.95 0.02 262))
- **Accent:** Darker Navy (oklch(0.42 0.19 262))
- **Background:** Off-white (oklch(0.98 0 0))
- **Foreground:** Dark gray (oklch(0.15 0 0))

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm, npm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eland-register
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Routes

### Public Routes
- `/` - Landing page
- `/features` - Features overview
- `/blog` - Blog and resources
- `/contact` - Contact page

### Authentication Routes
- `/auth/login` - User login
- `/auth/signup` - User registration
- `/auth/otp` - OTP verification

### Registration Routes
- `/registration/step1` through `/registration/step9` - Registration steps
- `/registration/success` - Confirmation page

## Form Data Structure

The registration form data includes:

```typescript
{
  // Authentication
  phoneNumber: string
  otp: string
  
  // Bank Details
  accountNumber: string
  ifscCode: string
  bankName: string
  branch: string
  
  // Personal Info
  fullName: string
  email: string
  dateOfBirth: string
  gender: string
  
  // Documents
  panCardFile: File
  aadhaarCardFile: File
  // ... other document files
  
  // Property Details
  propertyType: string
  plotNumber: string
  totalArea: string
  
  // Party Details
  sellerFullName: string
  buyerFullName: string
  
  // Signatures
  buyerSignature: string (canvas data URL)
  sellerSignature: string (canvas data URL)
  
  // Payment
  stampFee: string
  registrationFee: string
  serviceCharge: string
  paymentMethod: string
  
  // Application
  applicationNumber: string
  submissionDateTime: string
}
```

## Backend Integration Points

The frontend is ready for backend integration. Key areas for backend work:

### 1. Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - OTP verification

### 2. Registration Endpoints
- `POST /api/registration/submit` - Submit registration data
- `GET /api/registration/{applicationId}` - Get registration status
- `POST /api/registration/{applicationId}/payment` - Process payment

### 3. Document Upload
- Integration with Vercel Blob or similar cloud storage
- `POST /api/documents/upload` - Upload and verify documents

### 4. Verification Services
- Document verification API
- Bank details validation
- Address verification

## Usage Examples

### Starting Registration
Users can start registration by:
1. Clicking "Start Registration" on landing page
2. Signing up with phone number and password
3. Verifying OTP
4. Following the 10-step registration flow

### Form Validation
Each step includes client-side validation:
- Required field checks
- Email validation
- Phone number formatting
- Document file type validation

### Progress Tracking
Users can track progress through:
- Visual progress bar showing current step
- Step indicator (e.g., "Step 1 of 10")
- Back button to previous steps

## Customization

### Theme Customization
Update colors in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.34 0.19 262);
  --secondary: oklch(0.95 0.02 262);
  /* ... other variables */
}
```

### Form Fields
Modify form fields in individual step pages in `/app/registration/step*/page.tsx`

### Text Content
Update static text in components or pass as props from content management system

## Performance Optimization

- Next.js Image optimization ready
- CSS modules with Tailwind purging
- Dynamic imports for heavy components
- Client-side form validation to reduce server requests

## Accessibility

- Semantic HTML structure
- ARIA labels on form inputs
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Security Considerations

### Frontend Security
- Password input masking
- Form data stored in React Context (not localStorage)
- HTTPS ready for production
- Input validation and sanitization

### Backend Integration Notes
- Use secure password hashing (bcrypt)
- Implement rate limiting for authentication
- Use HTTPOnly cookies for session storage
- Implement proper CORS policies
- Validate all file uploads on backend

## Future Enhancements

1. Multi-language support
2. Real-time document verification
3. Blockchain verification integration
4. Payment gateway integration (Stripe, Razorpay)
5. Admin dashboard for document verification
6. Email notifications
7. SMS notifications
8. Document archival and retrieval system

## Support

For support inquiries:
- Email: support@elandregister.com
- Phone: +91 98765 43210
- Business Hours: Mon-Fri, 9 AM - 6 PM IST

## License

This project is proprietary and confidential.

## Notes for Developers

- The entire form state is managed via React Context (`RegistrationContext`)
- Form data persists across navigation using the context
- Each step validates its own data before allowing progression
- The success page generates a mock application number and submission date
- File uploads store File objects in context (ready for backend integration)
- Digital signatures are captured as canvas data URLs

## Deployment

### Vercel Deployment
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Set environment variables if needed
4. Deploy with one click

### Environment Variables
Create a `.env.local` file (optional):
```
NEXT_PUBLIC_API_URL=https://your-backend-api.com
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

**Built with ❤️ for seamless property registration**
