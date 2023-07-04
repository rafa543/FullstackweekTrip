import { prisma } from "@/lib/prisma";
import React from "react";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
};

const Trips = async () => {
  const date = await getTrips();

  console.log({ date });
  return <div>Trips</div>;
};

export default Trips;
