import Image from "next/image";

import classes from "./careers-photos.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersPhotosProps {
  className?: string;
}

const CareersPhotos = (props: CareersPhotosProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      {items?.map((item, index) => (
        <Image
          className={classes.image}
          src={item}
          width={510}
          height={500}
          priority={true}
          alt="backgound image"
          key={index}
        />
      ))}
    </div>
  );
};

const items = [
  { src: "/images/careers/photos/1.webp", width: 510, height: 500 },
  { src: "/images/careers/photos/2.webp", width: 876, height: 500 },
  { src: "/images/careers/photos/3.webp", width: 694, height: 500 },
  { src: "/images/careers/photos/4.webp", width: 1610, height: 500 },
  { src: "/images/careers/photos/5.webp", width: 510, height: 500 },
];

export default CareersPhotos;
