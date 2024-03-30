
const columns = [
  {
    title: 'Nom',
    dataIndex: 'Nom',
    align: "center",

  },
  {
    title: 'Risque',
    dataIndex: 'Risque',
    filters: [
      {
        text: 'medium risk',
        value: 'medium risk',
      },
      {
        text: 'low risk',
        value: 'low risk',
      },
      {
        text: 'high risk',
        value: 'high risk',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.Risque.includes(value),
    sorter: ((a, b) => (a.Risque.toLowerCase() > b.Risque.toLowerCase() ? 1 : -1)),
    align: "center",
  },
  {
    title: 'Description actif',
    dataIndex: 'Description',
    align: "center",
  },
  {
    title: 'Catégorie de contrôle de sécurité',
    dataIndex: 'Catégorie de contrôle de sécurité',
    align: "center",
  },
  {
    title: 'Sous-catégorie de contrôle de sécurité',
    dataIndex: 'Sous-catégorie de contrôle de sécurité',
    align: "center",
  },
  {
    title: 'ID-ISO',
    dataIndex: 'ID-ISO',
    align: "center",
  },
  {
    title: 'clause',
    dataIndex: 'clause',
    align: "center",
  },
  {
    title: 'ID-NIST',
    dataIndex: 'ID-NIST',
    align: "center",
  }
];
export default columns;