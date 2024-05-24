import Image from "next/image";

import classes from "./layouts-auth-form.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsAuthFormProps {
  className?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const LayoutsAuthForm = (props: LayoutsAuthFormProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <div className={classes.image}>
        <Image
          src="/images/auth/background.webp"
          width={1236}
          height={1640}
          priority={true}
          alt="backgound image"
        />
      </div>

      <div className={classes.body}>
        <form className={classes.content} action="">
          <header className={classes.header}>
            <h1 className={classes.title}>{props.title}</h1>

            {!!props.description && (
              <p className={classes.description}>{props.description}</p>
            )}
          </header>

          {props.children}
        </form>
      </div>
    </div>
  );
};

export default LayoutsAuthForm;
