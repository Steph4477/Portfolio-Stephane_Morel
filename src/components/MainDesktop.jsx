export default function MainDesktop() {
    const sidebarTitles = [
      { id: 0, title: "Home" },
      { id: 1, title: "Portfolio" },
      { id: 2, title: "About" },
      { id: 3, title: "Contact" }
    ];
  
    return (
      <main className="main_desktop">
        {sidebarTitles.map((sidebarTitle) => (
          <div className={`main_desktop_${sidebarTitle.title.toLowerCase()}`} key={sidebarTitle.id} id={sidebarTitle.title.toLowerCase()}>
            <a href={`#${sidebarTitle.title.toLowerCase()}`}>{sidebarTitle.title}</a>
          </div>
        ))}
      </main>
    );
  }
  