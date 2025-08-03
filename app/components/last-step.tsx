import { FormDataTypes } from "@/lib/types";

import { Globe, LucideProps } from "lucide-react";

export default function LastStep({ submittedData }: Props) {
  const data = submittedData;

  return (
    <div>
      {/* Header */}
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-medium text-primary">Thank you!</h2>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
          Thank you for your inquiry!
        </h3>
        <p className="mt-1 text-sm/6 text-muted">
          We have received your details and will contact you shortly – usually
          within 1–2 business days.
        </p>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {/* Contact Person */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-foreground">
              Contact Person
            </dt>
            <dd className="mt-1 text-sm/6 text-muted sm:col-span-2 sm:mt-0">
              {data?.fullName}
            </dd>
          </div>

          {/* Telephone Number */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-foreground">
              Telephone Number
            </dt>
            <dd className="mt-1 text-sm/6 text-muted sm:col-span-2 sm:mt-0">
              {data?.phone}
            </dd>
          </div>

          {/* Email */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-foreground">Email</dt>
            <dd className="mt-1 text-sm/6 text-muted sm:col-span-2 sm:mt-0">
              {data?.email}
            </dd>
          </div>

          {/* Name of The Organization */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-foreground">
              Name of The Organization
            </dt>
            <dd className="mt-1 text-sm/6 text-muted sm:col-span-2 sm:mt-0">
              {data?.organizationName}
            </dd>
          </div>

          {/* Facility */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-foreground">Facility</dt>
            <dd className="mt-1 text-sm/6 text-muted sm:col-span-2 sm:mt-0">
              {data?.organization}
            </dd>
          </div>

          {/* Participants */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-foreground">
              Participants
            </dt>
            <dd className="mt-1 text-sm/6 text-muted sm:col-span-2 sm:mt-0">
              {data?.person}
            </dd>
          </div>

          {/* About us */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-foreground">About us</dt>
            <dd className="mt-1 text-sm text-foreground sm:col-span-2 sm:mt-0">
              <ul>
                {information.map((info) => (
                  <li
                    className="flex items-center justify-between max-sm:py-4 text-sm/6"
                    key={info.name}
                  >
                    <div className="flex w-0 flex-1 items-center">
                      <info.icon
                        aria-hidden="true"
                        className="size-4.5 shrink-0 text-muted"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          {info.name}
                        </span>
                      </div>
                    </div>
                    {info.action && (
                      <div className="ml-4 shrink-0">
                        <a
                          href={info.href}
                          target="_blank"
                          className="font-medium text-primary hover:text-primary/90"
                        >
                          {info.action}
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

type Props = {
  submittedData: FormDataTypes | null;
};

type InformationType = {
  name: string;
  icon: React.ComponentType<LucideProps>;
  href: string;
  action: string | null;
};

const information: InformationType[] = [
  {
    name: "www.talhaozbek.com",
    icon: Globe,
    href: `https://talhaozbek.com/?multi-step-form-with-tanstack`,
    action: "Visit",
  },
];
