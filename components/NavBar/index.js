import Link from "next/link";
import SVGIcon from "../SVGIcon";
import { StyledNavBar } from "./NavBar.styled";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <StyledNavBar>
        <Link href={router.pathname === "/" ? "" : "/"}>
          <SVGIcon variant="home" width="40px" color="#acacac" />
        </Link>
        <Link href={router.pathname === "/" ? "" : "/"}>
          <SVGIcon variant="info" width="40px" color="#acacac" />
        </Link>
        <Link href={router.pathname === "/Bikes" ? "" : "/Bikes"}>
          <SVGIcon variant="bicylce" width="40px" color="#acacac" />
        </Link>
        <Link
          href={router.pathname === "/ContactUsPage" ? "" : "/ContactUsPage"}
        >
          <SVGIcon variant="send" width="40px" color="#acacac" />
        </Link>
      </StyledNavBar>
    </>
  );
}
