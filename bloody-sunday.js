function bloodySunday(Data) {
  const start = new Date("0001-01-01");
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[((Data.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) % 6];
}
