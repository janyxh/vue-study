import Home from "@/views/Home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/progress",
    name: "progress",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Progress.vue")
  },
  {
    path: "/validate",
    name: "validate",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Validate.vue")
  },
  {
    path: "/ValidateFor",
    name: "ValidateFor",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ValidateFor.vue")
  },
  {
    path: "/flex",
    name: "flex",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Flex.vue"),
    children: [
      {
        path: "flex-direction",
        name: "flex-direction",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/FlexDirection.vue")
      },
      {
        path: "flex-wrap",
        name: "flex-wrap",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/FlexWrap.vue")
      },
      {
        path: "flex-shrink",
        name: "flex-shrink",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/FlexShrink.vue")
      },
      {
        path: "justify-content",
        name: "justify-content",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/JustifyContent.vue")
      },
      {
        path: "align-items",
        name: "align-items",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/AlignItems.vue")
      },
      {
        path: "align-content",
        name: "align-content",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/AlignContent.vue")
      },
      {
        path: "SpeedDial",
        name: "SpeedDial",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/SpeedDial.vue")
      },
      {
        path: "Dice",
        name: "Dice",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/Dice.vue")
      },
      {
        path: "FlexFixed",
        name: "FlexFixed",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Flex/FlexFixed.vue")
      }
    ]
  },
  {
    path: "/slice",
    name: "slice",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Slice.vue")
  },
  {
    path: "/aguments",
    name: "aguments",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Aguments.vue")
  },
  {
    path: "/switch",
    name: "switch",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Switch.vue")
  },
  {
    path: "/worker",
    name: "worker",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Worker.vue")
  }
];
export default routes;
