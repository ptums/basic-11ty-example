# Static Site Generators

This repository contains the notes I took while watching the [JAMstack course on Free Code Camp](https://youtu.be/A_l0qrPUJds) by Phil Hawksworth. Here's the link to the project I built through out the course (warning: it's a bit mushy) https://rachelandmarssite.netlify.app/. And below are the notes I took throughout the video.

## Notes
They make use of Server-side rendering: (build time) to make the pages before hand.

A static site generator runs locally or in you CI/CD pipeline on your machine that turns templates and data into a set of static assets.


### Options

Choose your static-site generator based on:

1. Language
2. Workflow
3. Performance
4. Architecture
5. Output Control
6. Adoption

### Why 11ty?

* Logical architecture
* Flexible templating
* Nothing you don't ask for (doesn't bundle any extra JS)
* JS all the way down (built and installed using JS)


### Building with data from an API

Data Sources => Build Time (pulls data from the source and integrates into the pages) => Then templates,assets, and data from the source and fully created and hosted on the CDN

1. Use data in the SSG
2. Request data from an API
3. Get data in Dev and in our deployments

Data Source => Templates => Pages are built (Templates + Data) => Pages are sent to CDN => Content on CDN => User

### Personalization

Static Site Generator => Applies structured data to templates in order to create views and assets

<-------------- Universal Content ------------- Localization -------------- Targeted 
---------------- Personalized Content ----------->

#### Enablers

* Automation
* Tools & Services
* The API Economy

1. Generate views for many locales
2. Route traffic at the CDN
3. Generate our CDN config


(Again) Fast and secure sites and apps, delivered by pre-rendered files and serving them directly from a CDN. Removing, the requirements to manage or run a web server.


### Client Side Rendering

* Multiple APIs calls
* Browswer APIs
* Serverless APIs

#### Progressive Enhancement

1. Decide on what is critical to the experience
2. Deliver as much as possible using a little as possible
3. Detect supported features and enahnce where possible

### Going from monolith to JAMstack

"Let's not try to boil the ocean"
