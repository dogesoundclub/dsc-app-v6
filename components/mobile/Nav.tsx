
// const navigation = [
//   { name: "about", href: "/about" },
//   { name: "gallery", href: "/gallery" },
//   { name: "board", href: "/board" },
//   { name: "activities", href: "/activities" },
//   { name: "FAQ", href: "/faq" }
// ];

const navigation = [
  { name: "about", href: "/" },
  { name: "gallery", href: "/ready" },
  { name: "board", href: "/ready" },
  { name: "activities", href: "/activities" },
  { name: "FAQ", href: "/faq" }
];

export default function MobileNav() {

  return (
      <>
      <nav style={{ display: "flex" }}>
        <ul style={{ width: "100%", display: "flex", justifyContent: "space-around", fontSize: "1em" }}>
          {navigation.map((item) => {
              return <li style={{ padding: "5px", listStyle: "none", borderRadius: "3px", border: "1px solid #000000", backgroundColor: "#F7D701" }} key={item.name}><a href={item.href} style={{ color: "#ffffff", textShadow: "-1px 1px black, 1px 1px black, 1px 1px black, 1px -1px black;" }}>{item.name}</a></li>
          })}
        </ul>
      </nav>
      <style jsx>{`
        li {
          background: linear-gradient( to bottom, #F7D701 30%, #ffffff 50%, #F7D701 70%);
        }
        a:hover {
          text-shadow: 3px -1px 1px black, 1px 1px black, 1px 1px black, 1px -1px black;
        }
      `}</style>
      </>
  );
};