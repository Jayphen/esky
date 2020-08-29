export const genId = () =>
  [...Array(10)].map((i) => (~~(Math.random() * 36)).toString(36)).join("");
