module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "UbP9dji7r7gGAWDEKRXESTHC_A7x9ABPvr3cyrvScv0",
      sites: [
        {
          name: "mellow-narwhal-5c7f29",
          id: "5aa681bc-1bf7-4fc0-b27f-72d9608b52aa",
          buildHook:
            "https://api.netlify.com/build_hooks/648345d4708fc0202195239a",
          branch: "master", // optional
        },
      ],
    },
  },
});
