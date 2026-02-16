import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiossecure from "../../Hook/useAxiossecure";
import useAuth from "../../Hook/UseAuth";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const axiosSecure = useAxiossecure();
  const { user } = useAuth();
  const servicecenters = useLoaderData();
  const regionduplicate = servicecenters.map((c) => c.region);
  const regions = [...new Set(regionduplicate)];
  const RiderRegion = useWatch({ control, name: "bikeRegion" });

  const districtbyregion = (region) => {
    const districtregions = servicecenters.filter((c) => c.region === region);
    const districts = districtregions.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted. we will reach to you in 10 days!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl text-primary">Be a rider</h2>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-12 p-4 text-black"
        action=""
      >
        {/* tow column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Rider info */}

          <fieldset className="fieldset">
            {/*rider name */}
            <h4 className="text-2xl font-semibold">Rider-Details</h4>
            <label className="label">Rider Name</label>
            <input
              type="text"
              {...register("RiderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Rider Name"
            />

            {/* rider email */}
            <label className="label mt-4">Email</label>
            <input
              type="email"
              {...register("Email")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Email"
            />

            {/* selected region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Region</legend>
              <select
                {...register("bikeRegion")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* selected district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("District")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtbyregion(RiderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* rider address */}
            <label className="label mt-4">Your Address</label>
            <input
              type="text"
              {...register("Address")}
              className="input w-full"
              placeholder="Sender Address"
            />
            {/* rider number */}
            <label className="label mt-4">Your number</label>
            <input
              type="number"
              {...register("yourNumber")}
              className="input w-full"
              placeholder="Your Number"
            />
            {/* pickup instruction */}

            <label className="label mt-4">Pickup Instruction</label>
            <textarea
              type="text"
              {...register("pickupInstruction")}
              className="input w-full textarea "
              rows={10}
              placeholder="Pickup Instruction"
            />
          </fieldset>

          {/*  Details */}

          <fieldset className="fieldset">
            {/* receiver name */}
            <h4 className="text-2xl font-semibold">More-Details</h4>
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License"
            />
            {/* receiver email */}
            <label className="label mt-4">NID</label>
            <input
              type="text"
              {...register("nid")}
              className="input w-full"
              placeholder="NID"
            />

            {/* bike */}
            <label className="label mt-4">Bike</label>
            <input
              type="text"
              {...register("bike")}
              className="input w-full"
              placeholder="Bike"
            />
            {/* receiver number */}
            <label className="label mt-4">Receiver number</label>
            <input
              type="number"
              {...register("receiverNumber")}
              className="input w-full"
              placeholder="Receiver Number"
            />
            {/* pickup instruction */}

            <label className="label mt-4">Pickup Instruction</label>
            <textarea
              type="text"
              {...register("pickupInstruction")}
              className="input w-full textarea "
              rows={10}
              placeholder="Pickup Instruction"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-8 text-black"
          value="Apply as a Rider"
        />
      </form>
    </div>
  );
};

export default Rider;
