import Table from "../../Component/dashboard/user/Table";

const UserBookingList = () => {
  return (
    <>
      <div className="bg-slate-950 w-full box-border h-32 items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div className="text-3xl font-bold">My Bookings</div>
        </div>
      </div>
      <Table></Table>
    </>
  );
};

export default UserBookingList;
