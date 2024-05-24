import * as LocalImages from "./images";

import classes from "./contacts-address.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface ContactsAddressProps {
  className?: string;
}

const ContactsAddress = (props: ContactsAddressProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <h2 className={classes.title}>Address</h2>

      <ul>
        <li className={classes.item}>
          <LocalImages.Location className={classes.icon} />
          <span className={classes.value}>
            Cannon Bridge House 25, Dowgate Hill, London EC4R 2YA
          </span>
        </li>

        <li className={classes.item}>
          <LocalImages.Location className={classes.icon} />
          <span className={classes.value}>
            Schärenmoosstrasse, 8052 Zurich, Switzerland
          </span>
        </li>

        <li className={classes.item}>
          <LocalImages.Email className={classes.icon} />
          <span className={classes.value}>support@globalinvestment.com</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactsAddress;
