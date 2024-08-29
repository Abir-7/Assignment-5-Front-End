/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import { FieldValues } from "react-hook-form";
import { useCreateFacilityMutation } from "../../redux/Api/FacilityApi/facilityApi";
import { IRespone } from "../../redux/InterfaceForRedux/apiRespone.interface";
import { toast } from "sonner";

const CreateFacility = () => {
  const [createFacility] = useCreateFacilityMutation();
  const onFormSubmit = async (data: FieldValues) => {
    const res = (await createFacility({
      ...data,
      pricePerHour: Number(data.pricePerHour),
    })) as IRespone<any>;

    if (res?.data) {
      toast.success(res.data.message);
    }
  };
  return (
    <>
      <div className="bg-slate-950 w-full box-border h-32 items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div className="text-3xl font-bold">Create Facility</div>
        </div>
      </div>{" "}
      <div className="container mx-auto mt-10 p-2">
        <Form onFormSubmit={onFormSubmit}>
          <Input
            errorMsg="Facility Name is Requierd"
            name="name"
            label="Facility Name"
            type="text"
          ></Input>
          <Input
            errorMsg="Description is Requierd"
            name="description"
            label="Description"
            type="text"
          ></Input>
          <Input
            errorMsg="Price Per Hour is Requierd"
            name="pricePerHour"
            label="Price Per Hour"
            type="number"
          ></Input>
          <Input
            errorMsg="Location is Requierd"
            name="location"
            label="Location"
            type="text"
          ></Input>{" "}
          <Input
            errorMsg={false}
            name="photo"
            label="Image Link:(optional)"
            type="text"
          ></Input>
          <button
            type="submit"
            className="btn btn-sm text-white hover:bg-slate-900 bg-slate-950 border-none mt-4"
          >
            Create
          </button>
        </Form>
      </div>
    </>
  );
};

export default CreateFacility;
