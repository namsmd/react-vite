import patientConfigs from "@modules/patient/configs";
import { ROLE } from "./contants";

export default {
  layout: {
    sideBarMaxWidth: 250,
    sideBarMinWidth: 0,
    sideBarMobileMinWidth: 0,
    sideBarMobileMaxWidth: 200,
    sideBarBackgroundColor: "#589DF7",
  },
  modules: {
    [ROLE.PATIENT]: patientConfigs,
  },
};
