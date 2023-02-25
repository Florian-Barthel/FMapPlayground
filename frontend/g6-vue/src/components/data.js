export default {
  id: "r1c1",
  label: "净资产收益率",
  value: "",
  children: [
    {
      id: "r2c1",
      label: "总资产净利率",
      value: "",
      children: [
        {
          id: "r3c1",
          label: "营业净利润率",
          value: "",
          rightIconText: "✖️",
          children: [
            {
              id: "r4c1",
              label: "净利润",
              value: "",
              rightIconText: "➗",
              children: [
                {
                  id: "r5c1",
                  label: "收入总额",
                  value: "",
                  rightIconText: "➖",
                  children: [
                    {
                      id: "r6-1",
                      label: [
                        [
                          { id: "r6c1", title: "营业总收入", value: "" },
                          { id: "r7c1", title: "公允价值变动收益", value: "" },
                          { id: "r8c1", title: "营业外收入", value: "" },
                          { id: "r9c1", title: "投资收益", value: "" }
                        ]
                      ]
                    }
                  ]
                },
                {
                  id: "r5c2",
                  label: "成本总额",
                  value: "",
                  children: [
                    {
                      id: "r6-2",
                      label: [
                        [
                          { id: "r6c2", title: "营业成本", value: "" },
                          { id: "r7c2", title: "营业税金及附加", value: "" },
                          { id: "r8c2", title: "所得税费用", value: "" },
                          { id: "r9c2", title: "资产减值损失", value: "" },
                          { id: "r10c2", title: "营业外支出", value: "" }
                        ],
                        [
                          { id: "r6c3", title: "期间费用", value: "" },
                          { id: "r7c3", title: "财务费用", value: "" },
                          { id: "r8c3", title: "销售费用", value: "" },
                          { id: "r9c3", title: "管理费用", value: "" }
                        ]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "r4c2",
              label: "营业总收入",
              value: ""
            }
          ]
        },
        {
          id: "r3c2",
          label: "总资产周转率",
          value: "",
          children: [
            {
              id: "r4c3",
              label: "营业总收入",
              value: "",
              rightIconText: "➗"
            },
            {
              id: "r4c4",
              label: "资产总额",
              value: "",
              children: [
                {
                  id: "r5c3",
                  label: "流动资产",
                  value: "",
                  rightIconText: "➕",
                  children: [
                    {
                      id: "r6-3",
                      label: [
                        [
                          { id: "r6c4", title: "货币资金", value: "" },
                          { id: "r7c4", title: "交易性金融资产", value: "" },
                          { id: "r8c4", title: "应收账款", value: "" },
                          { id: "r9c4", title: "预付账款", value: "" },
                          { id: "r10c4", title: "其他应收账款", value: "" },
                          { id: "r11c4", title: "存货", value: "" }
                        ]
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "r2c2",
      label: "归属母公司股东的净利润占比",
      value: ""
    },
    {
      id: "r2c3",
      label: "权益乘数",
      value: "",
      children: [
        {
          id: "r3c3",
          label: "资产负债率",
          value: "",
          leftIconText: "1 ➗ ( 1 ➖",
          rightIconText: " )",
          children: [
            {
              id: "r4c5",
              label: "负债总额",
              value: "",
              rightIconText: "➗"
            },
            {
              id: "r4c6",
              label: "资产总额",
              value: ""
            }
          ]
        }
      ]
    }
  ]
};
