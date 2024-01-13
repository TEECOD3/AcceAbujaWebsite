import WeeklyHighlightsliders from "@/components/WeeklyHighLights/WeeklyHighlight-sliders";
import WeeklyHighlightSlider from "@/components/WeeklyHighLights/WeeklyHighlightSlider";
import Weeklyhighlighttexts from "@/components/WeeklyHighLights/Weeklyhighlight-texts";

type Props = {};

const WeeklyHighLight = (props: Props) => {
  return (
    <div className="">
      <WeeklyHighlightSlider />
      <Weeklyhighlighttexts />
      <WeeklyHighlightsliders />
    </div>
  );
};

export default WeeklyHighLight;
