import { ReactElement } from "react";

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
    <section className={className} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default ContentSection;
