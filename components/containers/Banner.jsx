import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function Banner() {
  return (
    <FullContainer className="h-[60vh] overflow-hidden p-10 bg-black/30 text-white text-center">
      <Image
        src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/Untitled-1-1536x1024.jpg"
        alt="Background Image"
        priority={true}
        fill={true}
        loading="eager"
        className="-z-10 w-full h-full object-cover absolute top-0"
      />
      <Container className="gap-5">
        <Badge>Fashion</Badge>
        <h1 className="font-extrabold text-4xl">
          A Good Look at The Lush Green Mountains
        </h1>
        <div className="flex items-center justify-center gap-2">
          <p>BY SHANE DOE</p>
          <p>MAY 14, 2016</p>
        </div>
      </Container>
    </FullContainer>
  );
}
