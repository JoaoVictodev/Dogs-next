"use client";

import photosGEt, { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";
import React from "react";
import Loading from "@/components/helper/loading";
import styles from "./feed.module.css";

export default function Feed({
  photos,
  user,
}: {
  photos: Photo[];
  user?: 0 | string;
}) {
  const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(photos);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [infinity, setInfinite] = React.useState(
    photos.length < 6 ? false : true
  );

  const fetching = React.useRef(false);
  function infinityScrool() {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }
  React.useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await photosGEt(
        { page, total: 6, user: 0 },
        {
          cache: "no-store",
        }
      );
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinite(false);
      }
    }
    getPagePhotos(page);
  }, [page]);

  React.useEffect(() => {
    if (infinity) {
      window.addEventListener("scroll", infinityScrool);
      window.addEventListener("wheel", infinityScrool);
    } else {
      window.removeEventListener("scroll", infinityScrool);
      window.removeEventListener("wheel", infinityScrool);
    }
    return () => {
      window.removeEventListener("scroll", infinityScrool);
      window.removeEventListener("wheel", infinityScrool);
    };
  }, [infinity]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <div className={styles.loadingWrapper}>
        {infinity ? <Loading /> : <p>Não existem mais postagems.</p>}
      </div>
    </div>
  );
}
