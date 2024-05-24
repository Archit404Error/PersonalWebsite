import { Card } from "@nextui-org/react";
import { PropsWithChildren } from "react";

type GradientCardProps = PropsWithChildren & { visible: boolean };

export const GradientCard = ({ visible, children }: GradientCardProps) => {
  return (
    <div className="grid grid-cols-1">
      <Card
        className={`bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 row-start-1 col-start-1 ease-in transition-all delay-800 ${
          visible
            ? "md:translate-x-5 md:translate-y-5"
            : "md:translate-x-2.5 md:translate-y-2.5"
        }`}
      />
      <div className="row-start-1 col-start-1">
        <Card
          className={`m-[1px] ease-in transition-all delay-800 ${
            visible
              ? "translate-x-0 translate-y-0"
              : "md:translate-x-2.5 md:translate-y-2.5"
          }`}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};
