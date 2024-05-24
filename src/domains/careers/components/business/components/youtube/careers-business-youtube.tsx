"use client";

import YouTube from "react-youtube";

import classes from "./careers-business-youtube.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersBusinessYoutubeProps {
  className?: string;
}

const CareersBusinessYoutube = (props: CareersBusinessYoutubeProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <YouTube className={_className} videoId="P5yCXckf_nc" opts={youtubeOpts} />
  );
};

export default CareersBusinessYoutube;

const youtubeOpts = {
  height: "242",
  width: "438",
};
