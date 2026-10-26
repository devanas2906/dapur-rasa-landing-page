export default function ReasonIcon({ kind }) {
  const paths = {
    leaf: (
      <>
        <path d="M19.5 4.5c-8.2 0-13 3.8-13 9.2a5.8 5.8 0 0 0 5.8 5.8c5.4 0 9.2-4.8 9.2-13V4.5h-2Z" />
        <path d="M4 21c2.8-5 6.5-8.6 12-12" />
      </>
    ),
    plate: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="5.2" />
        <path d="M3 5v6m-2-6v4m4-4v4M3 11v8m18-14v14m0-14c-2 2-2 5 0 6" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      {paths[kind]}
    </svg>
  );
}
