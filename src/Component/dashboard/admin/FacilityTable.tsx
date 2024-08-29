/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";
import { FieldValues } from "react-hook-form";
import {
  useDeleteFacilityMutation,
  useUpdateFacilityMutation,
} from "../../../redux/Api/FacilityApi/facilityApi";
import { IRespone } from "../../../redux/InterfaceForRedux/apiRespone.interface";
import { toast } from "sonner";

interface IData {
  _id: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: number;
  isDeleted: boolean;
  __v: number;
}

export const FacilityTable = ({ data }: { data: IData[] }) => {
  const [facilityId, setFacilityId] = useState<string | null>(null); // Specify the type as string or null

  const [updateFacility] = useUpdateFacilityMutation();
  const onFormSubmit = async (data: FieldValues) => {
    const newObject = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== undefined)
    );

    // const newObject = {};
    // for (const [key, value] of Object.entries(originalObject)) {
    //   if (value !== undefined) {
    //     newObject[key] = value;
    //   }
    // }
    if (Object.entries(newObject).length == 0) {
      toast.success("Select at least one field to update");
    } else {
      const res = (await updateFacility({
        id: facilityId,
        data: newObject,
      })) as IRespone<any>;

      if (res?.data) {
        toast.success(res.data.message);
      }
      if (res?.error) {
        toast.success(res.error.data.message);
      }
    }
  };
  const [deleteFacility, { error }] = useDeleteFacilityMutation();

  const handleDelete = async () => {
    if (facilityId == null) {
      toast.success("facility not found. Try again.");
    } else {
      const res = (await deleteFacility({ id: facilityId })) as IRespone<any>;

      if (res?.data) {
        toast.success(res.data.message);
      }
      if (res?.error) {
        toast.success(res.error.data.message);
      }
    }
  };
  return (
    <>
      <input type="checkbox" id="my_modal_9" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h1>Are You Sure?</h1>
          <div className="modal-action">
            <label
              onClick={() => handleDelete()}
              htmlFor="my_modal_9"
              className="btn btn-sm"
            >
              Yes
            </label>
            <label htmlFor="my_modal_9" className="btn btn-sm">
              Close!
            </label>
          </div>
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <Form onFormSubmit={onFormSubmit}>
            <Input
              label="Facility Name"
              type="text"
              name="name"
              errorMsg={false}
            ></Input>
            <Input
              label="Description"
              type="text"
              name="description"
              errorMsg={false}
            ></Input>
            <Input
              label="Price Per Hour"
              type="number"
              name="pricePerHour"
              errorMsg={false}
            ></Input>
            <Input
              label="Location"
              type="text"
              name="location"
              errorMsg={false}
            ></Input>
            <Input
              label="Image"
              type="text"
              name="photo"
              errorMsg={false}
            ></Input>
            <button className="btn mt-5 btn-warning btn-sm" type="submit">
              Update
            </button>
          </Form>

          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-sm">
              Close!
            </label>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Facility Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Price Per Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((item: IData) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td>
                  {item.pricePerHour}
                  {"$"}
                </td>
                <td className="flex gap-3">
                  <label
                    onClick={() => setFacilityId(item._id)}
                    htmlFor="my_modal_6"
                    className="btn btn-sm btn-success text-white"
                  >
                    Edit
                  </label>

                  <label
                    onClick={() => setFacilityId(item._id)}
                    htmlFor="my_modal_9"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};
