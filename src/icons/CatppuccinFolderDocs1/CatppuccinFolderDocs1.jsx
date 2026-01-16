export const CatppuccinFolderDocs1 = ({
  color = "#CAD3F5",
  stroke = "#8AADF4",
  className,
}) => {
  return (
    <svg
      className={`catppuccin-folder-docs-1 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.25 11.25H30C30.9946 11.25 31.9484 11.6451 32.6517 12.3483C33.3549 13.0516 33.75 14.0054 33.75 15V16.25M15 33.75H5C4.00544 33.75 3.05161 33.3549 2.34835 32.6517C1.64509 31.9484 1.25 30.9946 1.25 30V8.75C1.25 8.08696 1.51339 7.45107 1.98223 6.98223C2.45107 6.51339 3.08696 6.25 3.75 6.25H16.25C16.913 6.25 17.5489 6.51339 18.0178 6.98223C18.4866 7.45107 18.75 8.08696 18.75 8.75V11.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="path"
        d="M21.25 36.25V23.75C21.25 23.087 21.5134 22.4511 21.9822 21.9822C22.4511 21.5134 23.087 21.25 23.75 21.25H38.75V36.25M21.25 36.25C21.25 36.913 21.5134 37.5489 21.9822 38.0178C22.4511 38.4866 23.087 38.75 23.75 38.75H38.75V33.75H23.75C23.087 33.75 22.4511 34.0134 21.9822 34.4822C21.5134 34.9511 21.25 35.587 21.25 36.25Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
