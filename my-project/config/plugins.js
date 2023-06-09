module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken:
        "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC4auS1BRmrMvFmaXAvMK0cSbQumG9Cdup6Wsa/DONJ3O4UiItBdM0ClCzrD+jMmGuztbynrWay9pZHFIuNzuc6a9y7ncQCP2BPwUTOHHJjYNtBCnURHFx3THc7u8CYbWqtZ+NbJmIbUvtXBGa+yJwyge3iHlS7IampykV1HSuFG2oHn0xdrUAcUN1k2E5xsIoFoHsgqyfgREFhJF652XxoAGdkhLZNbkRDgr6/DzkCmtZhPOvjrKfyOl6W3b2NByc3DCjNR6UGghU11IJLK/g0BVMuJEHV1Z97vHvPTWorOu7Jry26OMAp8T0jixx2DgEaBLUgDPtvPQLE730fii9TW1TWGaRum2tm7a8HeKtoeJusxbgPk4+/OPn+O38IxEJuQp+dQ375yelogVIfk982rSINjP9A1Hq1Ze2hHivY9xyYx78vCwaFhx31/mK8cPSLdcexGw5dHBpbr426cDoGdBotb+vn61ZE2TXFAf/jyFV/Voqm5U0nJeuZTL4GBaMc7RWCU97e5vkUUybYLTm/6a5qLy7Cmt93S2i4BlR8cF4W9kFV04v7qJ8CvdlItL7Zku2M1aJC3vh9rDobLn8RG7gsFgf+STg/zk9kxCYst3W6PDSb9/ToPLscyawCi2Lh9lSKMAyKWPNQwJXMiT4ARiH9GyF92eZVn2JnFsD4pw==",
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
