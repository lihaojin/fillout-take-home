import { JSX } from "react";
import {
  FileText,
  BookOpen,
  CircleCheck,
  CalendarDays,
  Lock,
  Banknote,
  Eye,
} from "lucide-react";

export interface FormPagesConfig {
  id: number;
  icon: JSX.Element;
  label: string;
}

export interface FormPageOptionsConfig {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export enum FormOptionTypes {
  FORM = "FORM",
  COVER = "COVER",
  ENDING = "ENDING",
  REVIEW = "REVIEW",
  PAYMENT = "PAYMENT",
  LOGIN = "LOGIN",
  SCHEDULING = "SCHEDULING",
}

export const formOptionsMap: Record<FormOptionTypes, FormPageOptionsConfig> = {
  [FormOptionTypes.FORM]: {
    id: 1,
    title: "Form",
    description: "Page to collect user input",
    icon: <FileText />,
  },
  [FormOptionTypes.COVER]: {
    id: 2,
    title: "Cover",
    description: "Welcome users to your form",
    icon: <BookOpen />,
  },
  [FormOptionTypes.ENDING]: {
    id: 3,
    title: "Ending",
    description: "Show a thank you page or redirect users",
    icon: <CircleCheck />,
  },
  [FormOptionTypes.REVIEW]: {
    id: 4,
    title: "Review",
    description: "Let Users review their submission",
    icon: <Eye />,
  },
  [FormOptionTypes.PAYMENT]: {
    id: 5,
    title: "Payment",
    description: "Collect payments within stripe",
    icon: <Banknote />,
  },
  [FormOptionTypes.LOGIN]: {
    id: 6,
    title: "Login",
    description: "Let users login with email, password, or SSO",
    icon: <Lock />,
  },
  [FormOptionTypes.SCHEDULING]: {
    id: 7,
    title: "Scheduling",
    description: "Book meetings on your calendar",
    icon: <CalendarDays />,
  },
};
