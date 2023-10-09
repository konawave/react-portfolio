import weatherdash from './assets/weatherdash.jpg'
import socialnetworkapi from './assets/socialnetworkapi.jpg'
import comingsoon from './assets/comingsoon.jpg'



export const projects = [
  {
    title: "Weather Dashboard",
    image: weatherdash,
    description: "Web App that retrieves and displays weather forecast using Open Weather API. This web application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",
    deployedlink: "https://konawave.github.io/class-weatherDash/",
    githublink: "https://github.com/konawave/class-weatherDash",
  },
  {
    title: "Social Network API",
    image: socialnetworkapi,
    description: "An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.This app is using Express.js for routing, a MongoDB database, and the Mongoose ODM.", 
    deployedlink: "https://github.com/konawave/social-network-api",
    githublink: "https://github.com/konawave/social-network-api",
  },
  {
    title: "Next Project",
    image: comingsoon,
    description: "My next project is currently in development and will be published on GitHub when it's ready!", 
    deployedlink: "N/A",
    githublink: "N/A",
  }
  
];