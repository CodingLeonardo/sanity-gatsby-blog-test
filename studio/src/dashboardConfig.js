export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611679bf18d43a369bad46d3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-test-studio-6gigrre6",
                  apiId: "d5c8c86b-0b2e-4ce2-9767-8edd91c74c01",
                },
                {
                  buildHookId: "611679c06f1f7a292efbe992",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-test-web-obka1iww",
                  apiId: "9a54993e-eb8e-4d7c-9cf3-2660375760a1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/CodingLeonardo/sanity-gatsby-blog-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-test-web-obka1iww.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
