export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type DateFormat = `${string}-${string}-${string}`;

export type MediaType = "image" | "video";