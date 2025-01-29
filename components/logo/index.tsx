import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={82.8}
        height={86}
      />
    </Link>
  );
}
