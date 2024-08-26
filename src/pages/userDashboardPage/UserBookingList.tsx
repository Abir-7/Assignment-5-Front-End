import Table from "../../Component/dashboard/user/Table";
import LoadingUi from "../../Component/Loding/LoadingUi";
import { useGetUsersBookingQuery } from "../../redux/Api/bookingApi/bookingApi";

const UserBookingList = () => {
  const { data, isLoading } = useGetUsersBookingQuery(null);

  return (
    <>
      <div className="bg-slate-950 w-full box-border h-32 items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div className="text-3xl font-bold">My Bookings</div>
        </div>
      </div>
      {isLoading ? <LoadingUi /> : <Table data={data?.data}></Table>}
    </>
  );
};

export default UserBookingList;
