import React from "react";

type ListComponentProps = {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
};

export function ListComponent({
  data,
  renderItem,
}: ListComponentProps & React.ComponentProps<"div">) {
  return <div>{data.map((item) => renderItem(item))}</div>;
}
