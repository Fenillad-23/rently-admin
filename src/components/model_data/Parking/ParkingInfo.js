const columnname = [
  "Lot No",
  "Unit No",
  "Name",
  "Plat No",
  "Pass Amount",
  "Payment Date",
  "Reference Id",
  "Status",
];

const rowdata = [
  {
    "Lot No": "A01",
    "Unit No": "#135",
    Name: "John Doe",
    "Plate No": "SVGH123",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "A02",
    "Unit No": "#136",
    Name: "Jane Smith",
    "Plate No": "KJH589D",
    "Pass Amount": "$125.00",
    "Payment Date": "1 Oct 2024",
    "Reference Id": "2594024",
    Status: "Paid",
  },
  {
    "Lot No": "A03",
    "Unit No": "#137",
    Name: "Michael Johnson",
    "Plate No": "LOP123",
    "Pass Amount": "$125.00",
    "Payment Date": "2 Oct 2024",
    "Reference Id": "2594025",
    Status: "Paid",
  },
  {
    "Lot No": "A04",
    "Unit No": "#135",
    Name: "John Doe",
    "Plate No": "FGH567",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "A05",
    "Unit No": "#139",
    Name: "David Wilson",
    "Plate No": "IOP678",
    "Pass Amount": "$125.00",
    "Payment Date": "4 Oct 2024",
    "Reference Id": "2594027",
    Status: "Paid",
  },
  {
    "Lot No": "A06",
    "Unit No": "#140",
    Name: "Sarah Martinez",
    "Plate No": "QWE789",
    "Pass Amount": "$125.00",
    "Payment Date": "5 Oct 2024",
    "Reference Id": "2594028",
    Status: "Paid",
  },
  {
    "Lot No": "A07",
    "Unit No": "#141",
    Name: "Christopher Lee",
    "Plate No": "ASD890",
    "Pass Amount": "$125.00",
    "Payment Date": "6 Oct 2024",
    "Reference Id": "2594029",
    Status: "Paid",
  },
  {
    "Lot No": "B01",
    "Unit No": "#142",
    Name: "Olivia Rodriguez",
    "Plate No": "ZXCV901",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "B02",
    "Unit No": "#142",
    Name: "Olivia Rodriguez",
    "Plate No": "TYU012",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "B03",
    "Unit No": "#144",
    Name: "Sophia Hernandez",
    "Plate No": "GHJ123",
    "Pass Amount": "$125.00",
    "Payment Date": "9 Oct 2024",
    "Reference Id": "2594032",
    Status: "Paid",
  },
  {
    "Lot No": "A01",
    "Unit No": "#135",
    Name: "John Doe",
    "Plate No": "SVGH123",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "A02",
    "Unit No": "#136",
    Name: "Jane Smith",
    "Plate No": "KJH589D",
    "Pass Amount": "$125.00",
    "Payment Date": "1 Oct 2024",
    "Reference Id": "2594024",
    Status: "Paid",
  },
  {
    "Lot No": "A03",
    "Unit No": "#137",
    Name: "Michael Johnson",
    "Plate No": "LOP123",
    "Pass Amount": "$125.00",
    "Payment Date": "2 Oct 2024",
    "Reference Id": "2594025",
    Status: "Paid",
  },
  {
    "Lot No": "A04",
    "Unit No": "#135",
    Name: "John Doe",
    "Plate No": "FGH567",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "A05",
    "Unit No": "#139",
    Name: "David Wilson",
    "Plate No": "IOP678",
    "Pass Amount": "$125.00",
    "Payment Date": "4 Oct 2024",
    "Reference Id": "2594027",
    Status: "Paid",
  },
  {
    "Lot No": "A06",
    "Unit No": "#140",
    Name: "Sarah Martinez",
    "Plate No": "QWE789",
    "Pass Amount": "$125.00",
    "Payment Date": "5 Oct 2024",
    "Reference Id": "2594028",
    Status: "Paid",
  },
  {
    "Lot No": "A01",
    "Unit No": "#135",
    Name: "John Doe",
    "Plate No": "SVGH123",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "A02",
    "Unit No": "#136",
    Name: "Jane Smith",
    "Plate No": "KJH589D",
    "Pass Amount": "$125.00",
    "Payment Date": "1 Oct 2024",
    "Reference Id": "2594024",
    Status: "Paid",
  },
  {
    "Lot No": "A03",
    "Unit No": "#137",
    Name: "Michael Johnson",
    "Plate No": "LOP123",
    "Pass Amount": "$125.00",
    "Payment Date": "2 Oct 2024",
    "Reference Id": "2594025",
    Status: "Paid",
  },
  {
    "Lot No": "A04",
    "Unit No": "#135",
    Name: "John Doe",
    "Plate No": "FGH567",
    "Pass Amount": "$125.00",
    "Payment Date": undefined,
    "Reference Id": undefined,
    Status: "Pending",
  },
  {
    "Lot No": "A05",
    "Unit No": "#139",
    Name: "David Wilson",
    "Plate No": "IOP678",
    "Pass Amount": "$125.00",
    "Payment Date": "4 Oct 2024",
    "Reference Id": "2594027",
    Status: "Paid",
  },
  {
    "Lot No": "A06",
    "Unit No": "#140",
    Name: "Sarah Martinez",
    "Plate No": "QWE789",
    "Pass Amount": "$125.00",
    "Payment Date": "5 Oct 2024",
    "Reference Id": "2594028",
    Status: "Paid",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export { paginationModel, columnname, rowdata };