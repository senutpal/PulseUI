import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      amount: 134,
      status: "pending",
      username: "Aarav Sharma",
      email: "aarav.sharma@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124,
      status: "success",
      username: "Isha Verma",
      email: "isha.verma@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167,
      status: "success",
      username: "Rohan Mehta",
      email: "rohan.mehta@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156,
      status: "failed",
      username: "Kavya Reddy",
      email: "kavya.reddy@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145,
      status: "success",
      username: "Nikhil Bansal",
      email: "nikhil.bansal@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189,
      status: "pending",
      username: "Sneha Kulkarni",
      email: "sneha.kulkarni@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178,
      status: "success",
      username: "Ananya Nair",
      email: "ananya.nair@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190,
      status: "success",
      username: "Dev Patel",
      email: "dev.patel@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134,
      status: "failed",
      username: "Ritika Jain",
      email: "ritika.jain@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543,
      status: "success",
      username: "Arjun Desai",
      email: "arjun.desai@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 234,
      status: "pending",
      username: "Meera Joshi",
      email: "meera.joshi@gmail.com",
    },
    {
      id: "728ed52c",
      amount: 345,
      status: "success",
      username: "Kabir Sinha",
      email: "kabir.sinha@gmail.com",
    },
    {
      id: "728ed52d",
      amount: 335,
      status: "failed",
      username: "Tanya Aggarwal",
      email: "tanya.aggarwal@gmail.com",
    },
    {
      id: "728ed52e",
      amount: 664,
      status: "pending",
      username: "Rahul Chatterjee",
      email: "rahul.chatterjee@gmail.com",
    },
    {
      id: "728ed52f",
      amount: 332,
      status: "success",
      username: "Priya Malhotra",
      email: "priya.malhotra@gmail.com",
    },
    {
      id: "728ed52g",
      amount: 413,
      status: "failed",
      username: "Yash Gupta",
      email: "yash.gupta@gmail.com",
    },
    {
      id: "728ed52h",
      amount: 345,
      status: "pending",
      username: "Neha Bhatt",
      email: "neha.bhatt@gmail.com",
    },
    {
      id: "728ed52i",
      amount: 754,
      status: "success",
      username: "Amitabh Rao",
      email: "amitabh.rao@gmail.com",
    },
    {
      id: "728ed52j",
      amount: 643,
      status: "failed",
      username: "Sanya Kapoor",
      email: "sanya.kapoor@gmail.com",
    },
    {
      id: "728ed52k",
      amount: 543,
      status: "pending",
      username: "Manav Iyer",
      email: "manav.iyer@gmail.com",
    },
    {
      id: "728ed52l",
      amount: 324,
      status: "success",
      username: "Tanvi Shah",
      email: "tanvi.shah@gmail.com",
    },
    {
      id: "728ed52m",
      amount: 123,
      status: "pending",
      username: "Vikram Saxena",
      email: "vikram.saxena@gmail.com",
    },
    {
      id: "728ed52n",
      amount: 422,
      status: "failed",
      username: "Diya Menon",
      email: "diya.menon@gmail.com",
    },
    {
      id: "728ed52o",
      amount: 712,
      status: "success",
      username: "Ayaan Khurana",
      email: "ayaan.khurana@gmail.com",
    },
    {
      id: "728ed52p",
      amount: 360,
      status: "success",
      username: "Simran Dutta",
      email: "simran.dutta@gmail.com",
    },
    {
      id: "728ed52q",
      amount: 454,
      status: "pending",
      username: "Kunal Mishra",
      email: "kunal.mishra@gmail.com",
    },
    {
      id: "728ed52r",
      amount: 382,
      status: "success",
      username: "Pooja Ghosh",
      email: "pooja.ghosh@gmail.com",
    },
    {
      id: "728ed52s",
      amount: 328,
      status: "failed",
      username: "Aditya Rathi",
      email: "aditya.rathi@gmail.com",
    },
    {
      id: "728ed52t",
      amount: 250,
      status: "success",
      username: "Rhea Bhardwaj",
      email: "rhea.bhardwaj@gmail.com",
    },
    {
      id: "728ed52u",
      amount: 658,
      status: "success",
      username: "Naveen Tripathi",
      email: "naveen.tripathi@gmail.com",
    },
    {
      id: "728ed52v",
      amount: 691,
      status: "success",
      username: "Aishwarya Pillai",
      email: "aishwarya.pillai@gmail.com",
    },
    {
      id: "728ed52w",
      amount: 969,
      status: "success",
      username: "Siddharth Joshi",
      email: "siddharth.joshi@gmail.com",
    },
    {
      id: "728ed52x",
      amount: 617,
      status: "failed",
      username: "Bhavya Arora",
      email: "bhavya.arora@gmail.com",
    },
    {
      id: "728ed52y",
      amount: 173,
      status: "success",
      username: "Kartik Anand",
      email: "kartik.anand@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      status: "success",
      username: "Shruti Deshmukh",
      email: "shruti.deshmukh@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      status: "pending",
      username: "Rajni Singh",
      email: "rajni.singh@gmail.com",
    },
  ];
};


const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
