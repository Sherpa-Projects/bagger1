const blobs = [
  {
    className:
      "-top-40 left-[6%] size-[34rem] bg-primary/10 lg:bg-primary/15 blur-[150px]",
  },
  {
    className:
      "top-[18%] right-[-8rem] size-[28rem] bg-secondary/5 lg:bg-secondary/10 blur-[135px]",
  },
  {
    className:
      "top-[55%] left-[18%] size-[24rem] bg-acent/5 lg:bg-acent/10 blur-[125px]",
  },
  {
    className:
      "bottom-[-8rem] right-[12%] size-[32rem] bg-primary/10 lg:bg-primary/15 blur-[155px]",
  },
  {
    className:
      "bottom-[12%] left-1/2 -translate-x-1/2 size-[30rem] bg-secondary/5 blur-[160px]",
  },
];

export default function Ambient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {blobs.map(({ className }, index) => (
        <div
          key={index}
          className={`absolute rounded-full transform-gpu ${className}`}
        />
      ))}
    </div>
  );
}
