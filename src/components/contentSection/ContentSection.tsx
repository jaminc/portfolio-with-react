import { ReactElement } from "react";

import styles from "./content-section.module.css";

const ContentSection = ({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title: string;
  className?: string;
  children: ReactElement;
}): ReactElement => {
  return (
    <section className={`${className} ${styles.container}`} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default ContentSection;
