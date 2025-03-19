import Image from "next/image";
import Catalogue from "./component/Catalogue";
import Search from "./component/Search"

export default function Home() {
  return (
<>
<div className="container">
  <Search />
  <Catalogue />
</div>
</>
  );
}

