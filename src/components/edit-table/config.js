const makeColumns = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  let extraCol = arr.map((i, idx) => {
    return {
      title: i + "月",
      key: i,
      children: [
        {
          title: "人力成本预计值",
          key: "humanEstimatedValue-" + i,
          dataIndex: "humanEstimatedValue-" + i,
        },
        {
          title: "业务量预计值",
          key: "businessEstimatedValue-" + i,
          dataIndex: "businessEstimatedValue-" + i,
        },
        {
          title: "人力成本实际值",
          key: "humanActualValue-" + i,
          dataIndex: "humanActualValue-" + i,
        },
        {
          title: "业务量实际值",
          key: "businessActualValue-" + i,
          dataIndex: "businessActualValue-" + i,
        },
      ],
    };
  });

  let columns = [
    {
      title: "服务方案",
      dataIndex: "servicePlanName",
      key: "servicePlanName",
      fixed: "left",
    },
    {
      title: "职场",
      dataIndex: "workplaceName",
      key: "workplaceName",
      fixed: "left",
    },
    ...extraCol,
    {
      title: "汇总",
      children: [
        {
          title: "人力成本预计值",
          key: "human-sum",
          dataIndex: "human-sum",
        },
        {
          title: "业务量预计值",
          key: "business-sum",
          dataIndex: "business-sum",
        },
        {
          title: "人力成本实际值",
          key: "humanActual-sum",
          dataIndex: "humanActual-sum",
        },
        {
          title: "业务量实际值",
          key: "businessActual-sum",
          dataIndex: "businessActual-sum",
        },
      ],
    },
  ];

  return columns;
};

export default makeColumns;
