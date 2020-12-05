# Static Site Generators

They make use of Server-side rendering: (build time) to make the pages before hand.

A static site generator runs locally or in you CI/CD pipeline on your machine that turns templates and data into a set of static assets.


## Options

Choose your static-site generator based on:

1. Language
2. Workflow
3. Performance
4. Architecture
5. Output Control
6. Adoption

## Why 11ty?

* Logical architecture
* Flexible templating
* Nothing you don't ask for (doesn't bundle any extra JS)
* JS all the way down (built and installed using JS)


## Building with data from an API

Data Sources => Build Time (pulls data from the source and integrates into the pages) => Then templates,assets, and data from the source and fully created and hosted on the CDN

1. Use data in the SSG
2. Request data from an API
3. Get data in Dev and in our deployments

