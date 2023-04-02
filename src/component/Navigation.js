import { Menubar } from "primereact/menubar";
import LanguageSelect from "./languaggeSelect";
import { useTranslation } from "react-i18next";

const start = (
  <img
    alt="logo"
    src="./logo192.png"
    height="40"
    className="mr-2"
  ></img>
);
const end = <LanguageSelect />;
const Navigation = () => {
  const { t } = useTranslation();
  const navlist = [
    {
      label: t("menu.home"),
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location.href = "/home";
      },
    },
    {
      label: t("menu.typeOfUser"),
      icon: "pi pi-fw pi-users",
      /*command: () => {
        window.location.href = "/home";
      },*/
      items: [
        {
          label: t("menu.student"),
        },
        {
          label: t("menu.teacher"),
        },
        {
          label: t("menu.parent"),
        },
      ],
    },
    {
      label: t("menu.signIn"),
      icon: "pi pi-fw pi-sign-in",
      command: () => {
        window.location.href = "/auth";
      },
    },
    {
      label: t("menu.signUp"),
      icon: "pi pi-fw pi-file-edit",
      command: () => {
        window.location.href = "/register";
      },
    },
    {
      label: t("menu.sampleTest"),
      icon: "pi pi-fw pi-calendar",
      command: () => {
        window.location.href = "/test";
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-phone",
      command: () => {
        window.location.href = "/contact";
      },
    },
  ];
  return (
    <div className="card">
      <Menubar model={navlist} start={start} end={end} />
    </div>
  );
};

export default Navigation;
