import "./styles.css";
import { home } from "./homePage.js";

// Build the initial page
const homePage = home();
homePage.createHomePageTopSection();
homePage.refreshProjects();
homePage.showDetails();

// Refresh projects when project is added
