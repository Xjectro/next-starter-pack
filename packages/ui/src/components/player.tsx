import {
  MediaPlayer,
  MediaProvider,
  Poster,
  type MediaPlayerProps,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export function VideoPlayer({
  poster,
  title,
  ...props
}: Omit<MediaPlayerProps, "children">) {
  return (
    <MediaPlayer title={title} {...props}>
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
      <Poster
        className="absolute inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
        src={poster}
        alt={title}
      />
    </MediaPlayer>
  );
}

export function CloudPlayer({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      loading="lazy"
      style={{ border: "none", height: "100%", width: "100%" }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media;"
      allowFullScreen={true}
    ></iframe>
  );
}
