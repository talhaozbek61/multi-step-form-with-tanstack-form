import { z } from "zod";

// Calculate tomorrow's date
const tomorrow = new Date();
tomorrow.setHours(0, 0, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);

export const formSchema = z.object({
  organizationName: z
    .string()
    .min(3, "Organization Name must be at least 3 characters"),
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Invalid email address"),
  organization: z
    .union([
      z.literal("Medical Practice"),
      z.literal("Dental Office"),
      z.literal("Care Facility"),
      z.literal("Physiotherapy Treatment"),
      z.literal("Daycare Center or School"),
    ])
    .refine(() => true, {
      message: "Please select a organization",
    }),
  phone: z.coerce
    .number()
    .positive()
    .min(10, "Phone must be at least 10 digits"),
  person: z
    .union([
      z.literal("Up to 5"),
      z.literal("6–10"),
      z.literal("11–15"),
      z.literal("16–20"),
      z.literal("22+"),
    ])
    .refine(() => true, {
      message: "Please select the number of participants",
    }),
  meetingDate: z.coerce.date().refine(
    (date) => {
      const selected = new Date(date);
      selected.setHours(0, 0, 0, 0); // for day comparison only
      return selected >= tomorrow;
    },
    {
      message: "The date must be sometime after today.",
    }
  ),
});

export type FormDataTypes = z.infer<typeof formSchema>;
