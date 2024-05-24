import { unstable_setRequestLocale } from "next-intl/server";

import ContactsScreen from "@/domains/contacts";

export type ContactsParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Contacts({ params }: ContactsParams) {
  unstable_setRequestLocale(params.locale);

  return <ContactsScreen />;
}
