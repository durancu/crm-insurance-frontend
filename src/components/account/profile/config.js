//Functions

//Components

export const activitiesTableColumns = () => [
  {
    dataField: "date",
    text: "Date",
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "20%" };
    },
    //sort: true,
    //filter: textFilter({ placeholder: "Search" }),
  },
  {
    dataField: "description",
    text: "Description",
    headerStyle: () => {
      return { width: "80%" };
    },
  },
  
];

export const activitiesSample = [
  { _id: "123451", description: "Sold a commercial policy (Liability, Physical Damage) to John Dowd", date:"5 minutes ago"},
  { _id: "123452", description: "Sold a commercial policy (Liability, Cargo) to Jane Ford", date:"2 hours ago"},
  { _id: "123453", description: "Updated first name (Jane) to customer Janet Ford", date:"6 hours ago"},
  { _id: "123454", description: "Updated fees to sale 123452", date:"03-12-2021 14:22"},
  { _id: "123451", description: "Sold a commercial policy (Liability, Physical Damage) to John Dowd", date:"5 minutes ago"},
  { _id: "123452", description: "Sold a commercial policy (Liability, Cargo) to Jane Ford", date:"2 hours ago"},
  { _id: "123453", description: "Updated first name (Jane) to customer Janet Ford", date:"6 hours ago"},
  { _id: "123454", description: "Updated fees to sale 123452", date:"03-12-2021 14:22"},
  { _id: "123451", description: "Sold a commercial policy (Liability, Physical Damage) to John Dowd", date:"5 minutes ago"},
  { _id: "123452", description: "Sold a commercial policy (Liability, Cargo) to Jane Ford", date:"2 hours ago"},
  { _id: "123453", description: "Updated first name (Jane) to customer Janet Ford", date:"6 hours ago"},
  { _id: "123454", description: "Updated fees to sale 123452", date:"03-12-2021 14:22"},
]

export const activitiesDefaultSorted = () => [
  { dataField: "name", order: "desc" },
];
