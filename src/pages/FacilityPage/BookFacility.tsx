import { useParams } from "react-router-dom";
import { useGetSingleFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import { FieldValues } from "react-hook-form";

const BookFacility = () => {
  const { id } = useParams();
  const { data } = useGetSingleFacilityQuery(id!, { skip: !id });
  console.log(data, "ggggg");
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center min-h-[60vh] items-center">
      <div className="card">
        <div className="border p-4 border-slate-950">
          <h1 className="text-xl font-semibold">
            Facility Name : {data?.data?.name}
          </h1>
        </div>
        <div>
          <Form onFormSubmit={onFormSubmit}>
            <Input
              label="Start Time"
              type="time"
              name="startTime"
              errorMsg="Start Time Required"
            ></Input>
            <Input
              label="End Time"
              type="time"
              name="endTime"
              errorMsg="End Time Required"
            ></Input>
            <Input
              label="Date"
              type="date"
              name="date"
              errorMsg="Date is Required"
            ></Input>
            <button type="submit">Confirm</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookFacility;
