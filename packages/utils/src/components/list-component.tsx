import React from "react";

type ListComponentProps = {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
};

export function ListComponent({
  data,
  renderItem,
  ...props
}: ListComponentProps & React.ComponentProps<"div">) {
  return (
    <div {...props}>
      {data.map((item, index) => (
        <span key={index}>{renderItem(item)}</span>
      ))}
    </div>
  );
}
