export type Route = {
  link: string;
  name: string;
  target?: string;
};

export const routes: Route[] = [
  {
    link: "/projects",
    name: "projects",
  },
  {
    link: "/lab",
    name: "lab",
  },
  {
    link: "какая-то ссылка",
    name: "resume",
    target: "_blank",
  },
  {
    link: "/my-path",
    name: "my path",
  },
  {
    link: "https://github.com/DKMFzF",
    name: "github",
    target: "_blank",
  },
  {
    link: "https://t.me/+UqvsCpwYgSsxZWVi",
    name: "blog",
    target: "_blank",
  }
];
