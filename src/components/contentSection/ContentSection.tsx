import { ReactElement } from "react";

const ContentSection = ({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactElement;
}): ReactElement => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default ContentSection;
