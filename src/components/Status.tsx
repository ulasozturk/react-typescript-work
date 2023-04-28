type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  return (
    <div>
      <h2>
        Status{" "}
        {props.status == "loading"
          ? "Loading..."
          : props.status == "success"
          ? "Data fetched successfully!"
          : "Error fetching data"}
      </h2>
    </div>
  );
};
