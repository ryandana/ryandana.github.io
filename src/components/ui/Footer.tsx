import React from "react";
import Desc from "../atoms/Desc";
import Link from "next/link";
import { Button } from "../atoms/Button";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="w-full py-4 border-t border-border">
      <div className="w-full mx-auto max-w-4xl flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-3">
        <Desc>Copyright {new Date().getFullYear()}, Ryan Dana</Desc>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/ryandana">
            <Button variant={'secondary'}>
              <IconBrandGithub />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/ryandanaputra">
            <Button variant={'secondary'}>
              <IconBrandLinkedin />
            </Button>
          </Link>
          <Link href="https://instagram.com/ryandnp_">
            <Button variant={'secondary'}>
              <IconBrandInstagram />
            </Button>
          </Link>
          <Link href="mailto:puturyandana@gmail.com">
            <Button variant={'secondary'}>
              <IconMail />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
