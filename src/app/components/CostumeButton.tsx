import { ButtonType } from "../types/Button";

export default function CostumeButton({ button }: { button: ButtonType }) {
  return (
    <>
      <a
        className={`px-7 py-3.5 font-medium text-[15px] inline-block`}
        style={{
          background: button?.bg_color ?? "transparent",
          color: button?.text_color ?? "inherit",
          border: button?.border ?? "none",
        }}
      >
        {button.text}
      </a>
    </>
  );
}
