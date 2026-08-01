import "../css/app.css";

import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Features } from "../components/features";
import { HowItWorks } from "../components/howItWorks";
import { FAQ } from "../components/faq";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";

import { initFAQ } from "./faq";
import { initNavbar } from "./navbar";
import { initFooter } from "./footer";
import { initHero } from "./hero";

const app = document.querySelector("#app");

app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${About()}
    ${Features()}
    ${HowItWorks()}
    ${FAQ()}
    ${CTA()}
    ${Footer()}
`;

initFAQ();
initNavbar();
initFooter();
initHero();
