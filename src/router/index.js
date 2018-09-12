import Vue from "vue";
import Router from "vue-router";
import Main from "../views/main";
import ButtonComp from "../views/button-comp.vue";
import BreadcrumbComp from "../views/breadcrumb-comp.vue";
import TabsComp from "../views/tabs-comp.vue";
import StepsComp from "../views/steps-comp.vue";
import DividinglineComp from "../views/dividingline-comp.vue";
import TimelineComp from "../views/timeline-comp.vue";
import CheckboxTagGroupComp from "../views/checkboxtaggroup-comp.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
      children: [
        {
          path: "/components/button",
          name: "button",
          component: ButtonComp
        },
        {
          path: "/components/breadcrumb",
          name: "breadcrumb",
          component: BreadcrumbComp
        },
        {
          path: "/components/tabs",
          name: "tabs",
          component: TabsComp
        },
        {
          path: "/components/steps",
          name: "steps",
          component: StepsComp
        },
        {
          path: "/components/dividingline",
          name: "dividingline",
          component: DividinglineComp
        },
        {
          path: "/components/timeline",
          name: "timeline",
          component: TimelineComp
        },
        {
          path: "/components/checkboxtaggroup",
          name: "checkboxtaggroup",
          component: CheckboxTagGroupComp
        },
      ]
    }
  ]
});
