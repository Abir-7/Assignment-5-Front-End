/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  useBookingFacilityMutation,
  useGetSingleFacilityQuery,
  useLazyCheckAvailabilityQuery,
} from "../../redux/Api/FacilityApi/facilityApi";
import Form from "../../Component/form/Form";
import Input from "../../Component/form/Input";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import InputWithState from "../../Component/form/InputWithState";
import { toast } from "sonner";
import { IRespone } from "../../redux/InterfaceForRedux/apiRespone.interface";
import LoadingUi from "../../Component/Loding/LoadingUi";

const BookFacility = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleFacilityQuery(id!, { skip: !id });

  const [bookingFacility] = useBookingFacilityMutation();

  const [checkAvailability, { data: availableTime }] =
    useLazyCheckAvailabilityQuery();
  const onFormSubmit = async (data: FieldValues) => {
    const res = (await bookingFacility({
      ...data,
      facility: id,
    })) as IRespone<any>;

    if (res?.data) {
      toast.success(res?.data?.message);

      window.location.href = res.data.data.payLink;
    }
  };
  const [date, setDate] = useState("");

  const checkAvailableTime = async () => {
    const facility = id;

    if (!date) {
      toast.error("Select Date");
    } else {
      const res = (await checkAvailability([
        { name: "date", value: date },
        { name: "facility", value: facility as string },
      ])) as IRespone<any>;
      if (res?.data) {
        if (res?.data?.data?.length == 0) {
          toast.error("No Time Slote Available");
        }
      }
    }
  };

  return (
    <>
      {id == "undefined" ? (
        <p className="text-xl font-bold text-center mt-20">Nothing to show</p>
      ) : (
        <div>
          {isLoading ? (
            <LoadingUi></LoadingUi>
          ) : (
            <div className="flex justify-center min-h-[60vh] mt-20 items-center">
              <div className="card ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <div className="border p-4 border-slate-950">
                      <h1 className="text-xl text-center font-semibold">
                        Facility Name : {data?.data?.name}
                      </h1>
                    </div>
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
                      <InputWithState
                        setDate={setDate}
                        label="Date"
                        type="date"
                        name="date"
                        errorMsg="Date is Required"
                      ></InputWithState>
                      <div className="flex flex-col ">
                        <button
                          className="my-5 btn btn-sm hover:text-white hover:bg-slate-900 bg-slate-950 border-none"
                          type="submit"
                        >
                          Confirm
                        </button>
                      </div>
                    </Form>
                    <button
                      onClick={() => checkAvailableTime()}
                      className="my-5 w-full btn relative btn-sm hover:text-white hover:bg-slate-900 bg-slate-950 border-none"
                      type="submit"
                    >
                      Check Availability{" "}
                      <div
                        className="tooltip  tooltip-left md:tooltip-top absolute right-3 p-1 w-5 h-5 flex justify-center items-center rounded-full bg-slate-950 text-white"
                        data-tip="Check Availability before booking. Select date then check."
                      >
                        ?
                      </div>{" "}
                    </button>
                  </div>
                  <div>
                    <div className="border p-4 border-slate-950">
                      <h1 className="text-xl text-center font-semibold">
                        Available Time
                      </h1>
                    </div>
                    {availableTime && (
                      <>
                        {
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          availableTime.data.map((item: any, i: number) => {
                            return (
                              <div
                                className="border flex gap-5 justify-center my-2"
                                key={i}
                              >
                                <div>
                                  <span>Start Time: </span>
                                  <span className="font-bold">
                                    {item.startTime}
                                  </span>
                                </div>
                                <div>
                                  <span>End Time: </span>
                                  <span className="font-bold">
                                    {item.endTime}
                                  </span>
                                </div>
                              </div>
                            );
                          })
                        }
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BookFacility;
