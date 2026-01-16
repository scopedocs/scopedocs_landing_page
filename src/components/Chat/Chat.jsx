import { FormatOutlineWeightBold2 } from "../../icons/FormatOutlineWeightBold2";
import { FormatOutlineWeightDuotone2 } from "../../icons/FormatOutlineWeightDuotone2";
import { FormatOutlineWeightFill2 } from "../../icons/FormatOutlineWeightFill2";
import { FormatOutlineWeightLight2 } from "../../icons/FormatOutlineWeightLight2";
import { FormatOutlineWeightRegular2 } from "../../icons/FormatOutlineWeightRegular2";
import { FormatOutlineWeightThin2 } from "../../icons/FormatOutlineWeightThin2";
import { FormatStrokeWeightBold } from "../../icons/FormatStrokeWeightBold";
import { FormatStrokeWeightDuotone } from "../../icons/FormatStrokeWeightDuotone";
import { FormatStrokeWeightLight } from "../../icons/FormatStrokeWeightLight";
import { FormatStrokeWeightRegular } from "../../icons/FormatStrokeWeightRegular";
import { FormatStrokeWeightThin } from "../../icons/FormatStrokeWeightThin";
import "./style.css";

export const Chat = ({ format, weight }) => {
  return (
    <>
      {weight === "regular" && format === "outline" && (
        <FormatOutlineWeightRegular2 className="instance-node-3" />
      )}

      {format === "outline" && weight === "thin" && (
        <FormatOutlineWeightThin2 className="instance-node-3" />
      )}

      {weight === "light" && format === "outline" && (
        <FormatOutlineWeightLight2 className="instance-node-3" />
      )}

      {format === "outline" && weight === "bold" && (
        <FormatOutlineWeightBold2 className="instance-node-3" />
      )}

      {weight === "fill" && (
        <FormatOutlineWeightFill2 className="instance-node-3" />
      )}

      {format === "outline" && weight === "duotone" && (
        <FormatOutlineWeightDuotone2 className="instance-node-3" />
      )}

      {weight === "regular" && format === "stroke" && (
        <FormatStrokeWeightRegular className="instance-node-3" />
      )}

      {weight === "thin" && format === "stroke" && (
        <FormatStrokeWeightThin className="instance-node-3" />
      )}

      {weight === "light" && format === "stroke" && (
        <FormatStrokeWeightLight className="instance-node-3" />
      )}

      {weight === "bold" && format === "stroke" && (
        <FormatStrokeWeightBold className="instance-node-3" />
      )}

      {weight === "duotone" && format === "stroke" && (
        <FormatStrokeWeightDuotone className="instance-node-3" />
      )}
    </>
  );
};
