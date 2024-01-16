export default function Section({ sectionTitle, children, ...props }) {
  return (
    <section {...props}>
      <h2>{sectionTitle}</h2>
      {children}
    </section>
  );
}
