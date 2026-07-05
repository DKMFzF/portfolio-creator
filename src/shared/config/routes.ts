export type Route = {
  link: string;
  name: string;
  target?: string;
};

export const routes: Route[] = [
  {
    link: "/lab",
    name: "lab",
  },
  {
    link: "/my-path",
    name: "my path",
  },
  {
    link: "какая-то ссылка",
    name: "resume",
    target: "_blank",
  },
  {
    link: "какая-то ссылка",
    name: "blog",
    target: "_blank",
  }
];