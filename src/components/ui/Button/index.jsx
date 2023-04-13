export const Button = ({ id, children }) => {
  return <a href={`#${id}`}>{children}</a>;
};
