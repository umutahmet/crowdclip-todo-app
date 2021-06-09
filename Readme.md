# Crowdclip Todo App - umutahmet

## Introduction

Hi and welcome to my solution! Firstly, thank you for the giving me the opportunity to show you my skills. I enjoyed it and hopefully this will give you a good idea of my skillset! I have opted for strength in breadth, over depth, to showcase what I can do across the project, including design, build and deployment.

### Standing on the shoulder of giants (so you would think)

I began looking for a project in the open source community that I thought would suit the requirements of the task. As this is a full-stack test, I wanted to utilise a stack that would show my understanding of db/schema design as well as my understanding for current frontend practices using Redux state managment.

Aiming to save time using someone elses code always creates problems because of the variety of ways we have creating the same thing. The chosen solution was no execption and I had a couple of issues. I dive in to this more down below.

#### Full disclosure

It's been a while since I've set up a full stack project (as I've been using services such as firebase to alleviate db/schema design and creation) but I found a project which would suit my needs built with the MERN stack.

For comparison: https://github.com/salih18/MERN-Todo-App

Fortunately/unfortunately this had most of the todo app functionality and I was looking for a stack which had authentication only. I didn't want to recreate the auth wheel but I nabbed a bonus with the todo functionality 🤷‍♂️

That said, I integrated my changes for both frontend and backend to get the app working the way I needed it.

### Known issues

#### Flash of content

When using the app, you may notice a flash of content when you refresh the page. This is because the check for authentication state is happening on the page level rather than higher up. If I had more time, I'd work a way around this to make sure the checks are happening before the page load rather than on page load.

### Improvements

#### ATOMIC design

With more time, I would like to create smaller components to follow the ATOMIC design principle and reduce repetition around the codebase. Namely things form elements.

#### HOCs

I'd also like to reduce repetition where possible by extracting the form submission elements from pages like signin/signup/dashboard and create a HOC to house this, as they're very similar.

#### Unit tests

Having worked with unit tests in the past, I know how valuable they are to a project. Given the time constraints, these haven't been implemented at all for this project but if I had more time, I'd add tests to both frontend and backend services.

#### Typescript/flow types

This project hasn't been scrictly typed. Again, I've worked with codebases that have utilised both typescript / flow types in the past and capable of adding this in if I had more time.

## My timesheet

-   Codebase and DB setup = 2hrs
-   Wireframing and design = 1.5hrs
-   Homepage, signup and signin = 3hrs
-   Dashboard Add/edit/delete todos = 5hrs
-   Deployment = 2hrs

## Stack

MERN

-   MongoDB
-   Express Server
-   React JS
-   Node Js

Additional:

-   TailwindCSS (Can be hard on the eyes if you're used to SCSS but enables rapid UI development and reduced my time creating components for this app)

## Design

Please find the design here:

https://www.figma.com/file/2u2Wp9WGbA23nugPlCltjg/Crowdclip-Todo-App?node-id=2%3A323

## Live demo

Please find the app deployed to Heroku here:

https://crowdclip-todo-app.herokuapp.com/

## Local development

### Environment Requirements

-   Operating System: MacOS or Linux
-   [Node.js](https://nodejs.org/) v14.13.1 (I recommend installing with [NODENV](https://github.com/nodenv/nodenv))
-   NPM 7.14.0 (will be installed with node)
-   [Homebrew](https://brew.sh) (to install MongoDB)

### Quick Start

#### Setup

```bash
# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Install project dependencies
npm install && npm install --prefix client
```

Database should automatically be running after installation but if not, run:

```bash
brew services start mongodb-community
```

#### Start development

CD in to the directory and run:

```bash
npm run dev
```

Once compiled, it will be availble to view in the browser at [http://localhost:3000](http://localhost:3000) and any changes to the code will automatically reload in the browser.
