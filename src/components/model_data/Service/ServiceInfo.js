const columnname = ["#Ref. No", "Unit No", "Date", "Title", "Status"];

const rowdata = [
  {
    RefNo: "#S0010",
    UnitNo: 136,
    Date: "10 Dec 2024",
    Title: "Entry access invalid",
    Status: "Pending",
  },
  {
    RefNo: "#S0009",
    UnitNo: 131,
    Date: "20 Nov 2024",
    Title: "Door lock damaged",
    Status: "Pending",
  },
  {
    RefNo: "#S0008",
    UnitNo: 133,
    Date: "17 Nov 2024",
    Title: "Air conditioning not working properly",
    Status: "Resolved",
  },
  {
    RefNo: "#S0007",
    UnitNo: 137,
    Date: "25 Oct 2024",
    Title: "Internet connection keeps disconnecting",
    Status: "Resolved",
  },
  {
    RefNo: "#S0006",
    UnitNo: 130,
    Date: "05 Oct 2024",
    Title: "Power plug not working",
    Status: "Resolved",
  },
  {
    RefNo: "#S0005",
    UnitNo: 135,
    Date: "23 Sep 2024",
    Title: "Elevator out of service",
    Status: "Resolved",
  },
  {
    RefNo: "#S0004",
    UnitNo: 140,
    Date: "19 Sep 2024",
    Title: "Lights not working",
    Status: "Resolved",
  },
  {
    RefNo: "#S0003",
    UnitNo: 135,
    Date: "10 Aug 2024",
    Title: "Power plug not working",
    Status: "Resolved",
  },
  {
    RefNo: "#S0002",
    UnitNo: 139,
    Date: "15 Jul 2024",
    Title: "Heater not working",
    Status: "Resolved",
  },
  {
    RefNo: "#S0001",
    UnitNo: 145,
    Date: "20 Jun 2024",
    Title: "Door lock damaged",
    Status: "Resolved",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export { paginationModel, columnname, rowdata };
