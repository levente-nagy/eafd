import { useState, useRef, SetStateAction } from "react";
import { Link } from 'react-router-dom';

interface NavBarProps {
 brandName: string;
 imageSrcPath: string;
 navItems: string[];
}

function NavBar({ brandName, navItems }: NavBarProps) {
 const [selectedIndex, setSelectedIndex] = useState(-1);
 const [searchQuery, setSearchQuery] = useState("");
 const navbarCollapseRef = useRef<HTMLDivElement>(null);
 const handleLinkClick = (index: SetStateAction<number>) => {
  setSelectedIndex(index);
  const collapseInstance: JQuery<HTMLElement> | undefined = navbarCollapseRef.current ? ($(navbarCollapseRef.current) as any).collapse() : undefined;
  collapseInstance?.hide();
 };

 const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Perform search among articles based on searchQuery
  let foundArticle: string | null = null;
  const lowerCaseSearchQuery = searchQuery.toLowerCase();
  const articles = [
   { name: "General rules for cleaning the house", route: "article1" },
   { name: "Basic financial rules", route: "article2" }
  ];
  for (let i = 0; i < articles.length; i++) {
   const articleName = articles[i].name.toLowerCase();
   if (articleName.includes(lowerCaseSearchQuery)) {
    foundArticle = articles[i].route;
    break;
   }
  }
  if (foundArticle) {
   // Navigate to the found article
   window.location.href = `/${foundArticle}`;
  } else {
   // Handle case when article is not found
   alert("Article not found!");
  }
 };

 return (
  <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
   <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <img
      src="src\assets\logo96.png"
      width="60"
      height="60"
      className="d-inline-block align-center navbar_logo"
      alt=""
     />
     <span className="fw-bolder fs-4">{brandName}</span>
    </a>
    <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
    >
     <span className="navbar-toggler-icon" />
    </button>
    <div
     className="collapse
     navbar-collapse"
     id="navbarSupportedContent"
     ref={navbarCollapseRef}
    >
     <ul className="navbar-nav me-auto mb-2 mb-md-1">
      {navItems.map((items, index) => (
       <li
        key={items}
        className="nav-item"
       >
        <Link
         className={selectedIndex === index ? "nav-link active" : "nav-link"}
         to={`/${items.toLowerCase().replace(' ', '-')}`}
         onClick={() => handleLinkClick(index)}
        >
         <div className="item_text">{items}</div>
         
        </Link>
       </li>
       
      ))}
     </ul>
     
     <form className="d-flex me-3" onSubmit={handleSearchSubmit}>
      <input
       className="form-control me-2"
       type="search"
       placeholder="Search"
       aria-label="Search"
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
       Go
      </button>
     </form>
    </div>
   </div>
  </nav>
 );
}

export default NavBar;
