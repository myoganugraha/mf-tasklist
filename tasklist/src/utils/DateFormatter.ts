const dateFormatter = (rawDate?: string) => {
  return new Date(rawDate!)
    .toLocaleDateString("en-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", " -");
};

export { dateFormatter }