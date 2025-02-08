import Loader from "@/components/shared/Loader";
import { getDoctorById } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AddDoctor from "./AddDoctor";

const UpdateDoctor = () => {
  const { doctorId } = useParams();

  const doctorsQuery = useQuery({
    queryKey: ["doctors", doctorId],
    queryFn: () => getDoctorById(doctorId),
  });

  const doctor = doctorsQuery.data?.data?.doctor;

  if (doctorsQuery.isFetching)
    return (
      <div className="flex h-full min-h-[500px] items-center justify-center">
        <Loader className="size-20" />
      </div>
    );

  return (
    <div>
      <AddDoctor doctor={doctor} />
    </div>
  );
};

export default UpdateDoctor;
