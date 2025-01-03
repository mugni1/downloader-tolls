export function LoadingButton() {
  return (
    <span className="flex items-center ">
      <img
        src="/loading-svgrepo-com.svg"
        alt=""
        className="h-5 w-5 animate-spin me-2"
      />
      Loading...
    </span>
  );
}
