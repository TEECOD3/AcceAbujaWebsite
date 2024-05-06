import WeeklyHighlightsliders from "@/components/WeeklyHighLights/WeeklyHighlight-sliders";
import WeeklyHighlightSlider from "@/components/WeeklyHighLights/WeeklyHighlightSlider";
import Weeklyhighlighttexts from "@/components/WeeklyHighLights/Weeklyhighlight-texts";
import getPosts from "@/lib/getPost";
import getPostBySlug from "@/lib/getPostBySlug";
import heroimage2 from "../../../public/image2.png";
import Image from "next/image";

type Props = {
  params: {
    WeekHighLightId: string;
  };
};

const WeeklyHighLight = async ({ params: { WeekHighLightId } }: Props) => {
  const BlogDetails = await getPostBySlug(WeekHighLightId);
  // const Allposts = await getPosts();
  console.log(BlogDetails.data);

  // console.log(Allposts);
  // console.log(BlogDetails);
  return (
    <div className="w-full">
      <div className="h-96 sm:h-[40rem]  w-full bg-gray-300 relative">
        <Image
          src={BlogDetails.data?.image || heroimage2}
          alt="news image"
          fill
          className="object-cover object-center"
        />
      </div>
      {/* <WeeklyHighlightSlider /> */}
      <Weeklyhighlighttexts data={BlogDetails.data} />
      <WeeklyHighlightsliders />
    </div>
  );
};

export default WeeklyHighLight;
``;
