# Blog (NextJs, Sanity)

A simple blog with articles and an admin area with the ability to add authors, their photo posts and comments. Visitors can leave comments under the posts, which will be displayed after approval by the moderators. Work on the content can be done by several people at a time; changes will be visible in the admin panel in real time. The post will be available 60 seconds after publication.

Stack and what was done: FullStack application. Client-side: I wrote it in NextJS + TypeScript. SSR (Server Site Rendering) with dynamic routing. I have used Tailwind (CSS Framework) for styles and adaptive layouts. I developed it following the Mobile First strategy. I have used React Hook Form library to validate the comment form. I added page regeneration in 60 seconds, which allows us to add content without full regeneration of the project. I deployed the client part on Vercel.com. The server side: I used Headless CMS Sanity. I used GROQ (Graph-Relational Object Queries) language to process data. To work with text, I used Portable Text without configuring styles. Admin and the ability to work with content in real-time mode for multiple users provide Sanity. Configured work with NextJS, configured additional fields, comment approval, prescribed GROQ queries to receive and send data, and deployed the server part on Sanity.io.


## Demo

### [https://blog-next-tailwind-sanity-xd7y-b8pcmgxqn-zhuk-off.vercel.app/](https://blog-next-tailwind-sanity-xd7y-b8pcmgxqn-zhuk-off.vercel.app/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Zhuk-off/Blog-Next-Tailwind-Sanity-.git
```

2. Install dependencies:

```bash
npm install
```

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contacts

You can contact me by email: zhukoffweb@gmail.com